(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var rd={exports:{}},Ma={},sd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function CM(){if(Pv)return mt;Pv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,te,Fe){this.props=O,this.context=te,this.refs=M,this.updater=Fe||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=x.prototype;function P(O,te,Fe){this.props=O,this.context=te,this.refs=M,this.updater=Fe||S}var R=P.prototype=new y;R.constructor=P,E(R,x.prototype),R.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(O,te,Fe){var K,fe={},Te=null,ye=null;if(te!=null)for(K in te.ref!==void 0&&(ye=te.ref),te.key!==void 0&&(Te=""+te.key),te)N.call(te,K)&&!U.hasOwnProperty(K)&&(fe[K]=te[K]);var Ae=arguments.length-2;if(Ae===1)fe.children=Fe;else if(1<Ae){for(var Oe=Array(Ae),et=0;et<Ae;et++)Oe[et]=arguments[et+2];fe.children=Oe}if(O&&O.defaultProps)for(K in Ae=O.defaultProps,Ae)fe[K]===void 0&&(fe[K]=Ae[K]);return{$$typeof:n,type:O,key:Te,ref:ye,props:fe,_owner:F.current}}function D(O,te){return{$$typeof:n,type:O.type,key:te,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function V(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Fe){return te[Fe]})}var ae=/\/+/g;function Q(O,te){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):te.toString(36)}function ce(O,te,Fe,K,fe){var Te=typeof O;(Te==="undefined"||Te==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(Te){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case n:case e:ye=!0}}if(ye)return ye=O,fe=fe(ye),O=K===""?"."+Q(ye,0):K,b(fe)?(Fe="",O!=null&&(Fe=O.replace(ae,"$&/")+"/"),ce(fe,te,Fe,"",function(et){return et})):fe!=null&&(C(fe)&&(fe=D(fe,Fe+(!fe.key||ye&&ye.key===fe.key?"":(""+fe.key).replace(ae,"$&/")+"/")+O)),te.push(fe)),1;if(ye=0,K=K===""?".":K+":",b(O))for(var Ae=0;Ae<O.length;Ae++){Te=O[Ae];var Oe=K+Q(Te,Ae);ye+=ce(Te,te,Fe,Oe,fe)}else if(Oe=v(O),typeof Oe=="function")for(O=Oe.call(O),Ae=0;!(Te=O.next()).done;)Te=Te.value,Oe=K+Q(Te,Ae++),ye+=ce(Te,te,Fe,Oe,fe);else if(Te==="object")throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ye}function pe(O,te,Fe){if(O==null)return O;var K=[],fe=0;return ce(O,K,"","",function(Te){return te.call(Fe,Te,fe++)}),K}function ue(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(Fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Fe)},function(Fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Fe)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var ie={current:null},z={transition:null},le={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:pe,forEach:function(O,te,Fe){pe(O,function(){te.apply(this,arguments)},Fe)},count:function(O){var te=0;return pe(O,function(){te++}),te},toArray:function(O){return pe(O,function(te){return te})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},mt.Component=x,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=P,mt.StrictMode=r,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,mt.act=re,mt.cloneElement=function(O,te,Fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var K=E({},O.props),fe=O.key,Te=O.ref,ye=O._owner;if(te!=null){if(te.ref!==void 0&&(Te=te.ref,ye=F.current),te.key!==void 0&&(fe=""+te.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Oe in te)N.call(te,Oe)&&!U.hasOwnProperty(Oe)&&(K[Oe]=te[Oe]===void 0&&Ae!==void 0?Ae[Oe]:te[Oe])}var Oe=arguments.length-2;if(Oe===1)K.children=Fe;else if(1<Oe){Ae=Array(Oe);for(var et=0;et<Oe;et++)Ae[et]=arguments[et+2];K.children=Ae}return{$$typeof:n,type:O.type,key:fe,ref:Te,props:K,_owner:ye}},mt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},mt.createElement=B,mt.createFactory=function(O){var te=B.bind(null,O);return te.type=O,te},mt.createRef=function(){return{current:null}},mt.forwardRef=function(O){return{$$typeof:c,render:O}},mt.isValidElement=C,mt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:ue}},mt.memo=function(O,te){return{$$typeof:h,type:O,compare:te===void 0?null:te}},mt.startTransition=function(O){var te=z.transition;z.transition={};try{O()}finally{z.transition=te}},mt.unstable_act=re,mt.useCallback=function(O,te){return ie.current.useCallback(O,te)},mt.useContext=function(O){return ie.current.useContext(O)},mt.useDebugValue=function(){},mt.useDeferredValue=function(O){return ie.current.useDeferredValue(O)},mt.useEffect=function(O,te){return ie.current.useEffect(O,te)},mt.useId=function(){return ie.current.useId()},mt.useImperativeHandle=function(O,te,Fe){return ie.current.useImperativeHandle(O,te,Fe)},mt.useInsertionEffect=function(O,te){return ie.current.useInsertionEffect(O,te)},mt.useLayoutEffect=function(O,te){return ie.current.useLayoutEffect(O,te)},mt.useMemo=function(O,te){return ie.current.useMemo(O,te)},mt.useReducer=function(O,te,Fe){return ie.current.useReducer(O,te,Fe)},mt.useRef=function(O){return ie.current.useRef(O)},mt.useState=function(O){return ie.current.useState(O)},mt.useSyncExternalStore=function(O,te,Fe){return ie.current.useSyncExternalStore(O,te,Fe)},mt.useTransition=function(){return ie.current.useTransition()},mt.version="18.3.1",mt}var Dv;function hp(){return Dv||(Dv=1,sd.exports=CM()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function RM(){if(Lv)return Ma;Lv=1;var n=hp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:v,ref:S,props:g,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=u,Ma.jsxs=u,Ma}var Iv;function bM(){return Iv||(Iv=1,rd.exports=RM()),rd.exports}var xe=bM(),Ie=hp(),fu={},od={exports:{}},Vn={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function PM(){return Nv||(Nv=1,function(n){function e(z,le){var re=z.length;z.push(le);e:for(;0<re;){var O=re-1>>>1,te=z[O];if(0<o(te,le))z[O]=le,z[re]=te,re=O;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var le=z[0],re=z.pop();if(re!==le){z[0]=re;e:for(var O=0,te=z.length,Fe=te>>>1;O<Fe;){var K=2*(O+1)-1,fe=z[K],Te=K+1,ye=z[Te];if(0>o(fe,re))Te<te&&0>o(ye,fe)?(z[O]=ye,z[Te]=re,O=Te):(z[O]=fe,z[K]=re,O=K);else if(Te<te&&0>o(ye,re))z[O]=ye,z[Te]=re,O=Te;else break e}}return le}function o(z,le){var re=z.sortIndex-le.sortIndex;return re!==0?re:z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,v=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var le=t(h);le!==null;){if(le.callback===null)r(h);else if(le.startTime<=z)r(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function b(z){if(M=!1,R(z),!E)if(t(d)!==null)E=!0,ue(N);else{var le=t(h);le!==null&&ie(b,le.startTime-z)}}function N(z,le){E=!1,M&&(M=!1,y(B),B=-1),S=!0;var re=v;try{for(R(le),g=t(d);g!==null&&(!(g.expirationTime>le)||z&&!V());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var te=O(g.expirationTime<=le);le=n.unstable_now(),typeof te=="function"?g.callback=te:g===t(d)&&r(d),R(le)}else r(d);g=t(d)}if(g!==null)var Fe=!0;else{var K=t(h);K!==null&&ie(b,K.startTime-le),Fe=!1}return Fe}finally{g=null,v=re,S=!1}}var F=!1,U=null,B=-1,D=5,C=-1;function V(){return!(n.unstable_now()-C<D)}function ae(){if(U!==null){var z=n.unstable_now();C=z;var le=!0;try{le=U(!0,z)}finally{le?Q():(F=!1,U=null)}}else F=!1}var Q;if(typeof P=="function")Q=function(){P(ae)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=ae,Q=function(){pe.postMessage(null)}}else Q=function(){x(ae,0)};function ue(z){U=z,F||(F=!0,Q())}function ie(z,le){B=x(function(){z(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,ue(N))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(z){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var re=v;v=le;try{return z()}finally{v=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,le){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=v;v=z;try{return le()}finally{v=re}},n.unstable_scheduleCallback=function(z,le,re){var O=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,z={id:p++,callback:le,priorityLevel:z,startTime:re,expirationTime:te,sortIndex:-1},re>O?(z.sortIndex=re,e(h,z),t(d)===null&&z===t(h)&&(M?(y(B),B=-1):M=!0,ie(b,re-O))):(z.sortIndex=te,e(d,z),E||S||(E=!0,ue(N))),z},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(z){var le=v;return function(){var re=v;v=le;try{return z.apply(this,arguments)}finally{v=re}}}}(ld)),ld}var Uv;function DM(){return Uv||(Uv=1,ad.exports=PM()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function LM(){if(Fv)return Vn;Fv=1;var n=hp(),e=DM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function S(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,f){if(s===null||typeof s>"u"||S(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,f,m,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,P);x[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,P);x[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,P);x[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function R(i,s,l,f){var m=x.hasOwnProperty(s)?x[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,f)&&(l=null),f||m===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),z=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,O;function te(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Fe=!1;function K(i,s){if(!i||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Z){var f=Z}Reflect.construct(i,[],s)}else{try{s.call()}catch(Z){f=Z}i.call(s.prototype)}else{try{throw Error()}catch(Z){f=Z}i()}}catch(Z){if(Z&&f&&typeof Z.stack=="string"){for(var m=Z.stack.split(`
`),_=f.stack.split(`
`),T=m.length-1,I=_.length-1;1<=T&&0<=I&&m[T]!==_[I];)I--;for(;1<=T&&0<=I;T--,I--)if(m[T]!==_[I]){if(T!==1||I!==1)do if(T--,I--,0>I||m[T]!==_[I]){var k=`
`+m[T].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=T&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?te(i):""}function fe(i){switch(i.tag){case 5:return te(i.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return i=K(i.type,!1),i;case 11:return i=K(i.type.render,!1),i;case 1:return i=K(i.type,!0),i;default:return""}}function Te(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case F:return"Portal";case D:return"Profiler";case B:return"StrictMode";case Q:return"Suspense";case ce:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case ae:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case pe:return s=i.displayName||null,s!==null?s:Te(i.type)||"Memo";case ue:s=i._payload,i=i._init;try{return Te(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(s);case 8:return s===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(i){var s=Oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Dt(i){i._valueTracker||(i._valueTracker=et(i))}function _t(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Oe(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function Ut(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Rn(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=Ae(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(i,s){s=s.checked,s!=null&&R(i,"checked",s,!1)}function ht(i,s){gt(i,s);var l=Ae(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?bt(i,s.type,l):s.hasOwnProperty("defaultValue")&&bt(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function $e(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function bt(i,s,l){(s!=="number"||Ut(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var qe=Array.isArray;function L(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+Ae(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(qe(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ae(l)}}function me(i,s){var l=Ae(s.value),f=Ae(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function ve(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Be=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function dt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Ve.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function Ze(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function nt(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Ze(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var He=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(i,s){if(s){if(He[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ot(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function j(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,se=null,he=null;function Le(i){if(i=la(i)){if(typeof Re!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Al(s),Re(i.stateNode,i.type,s))}}function De(i){se?he?he.push(i):he=[i]:se=i}function at(){if(se){var i=se,s=he;if(he=se=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ot(i,s){return i(s)}function rn(){}var Et=!1;function Un(i,s,l){if(Et)return i(s,l);Et=!0;try{return Ot(i,s,l)}finally{Et=!1,(se!==null||he!==null)&&(rn(),at())}}function bn(i,s){var l=i.stateNode;if(l===null)return null;var f=Al(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Fs=!1;if(c)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Fs=!1}function Vi(i,s,l,f,m,_,T,I,k){var Z=Array.prototype.slice.call(arguments,3);try{s.apply(l,Z)}catch(_e){this.onError(_e)}}var Hi=!1,Kr=null,Zr=!1,mr=null,sl={onError:function(i){Hi=!0,Kr=i}};function Os(i,s,l,f,m,_,T,I,k){Hi=!1,Kr=null,Vi.apply(sl,arguments)}function ol(i,s,l,f,m,_,T,I,k){if(Os.apply(this,arguments),Hi){if(Hi){var Z=Kr;Hi=!1,Kr=null}else throw Error(t(198));Zr||(Zr=!0,mr=Z)}}function Di(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function al(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ll(i){if(Di(i)!==i)throw Error(t(188))}function Ac(i){var s=i.alternate;if(!s){if(s=Di(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return ll(m),i;if(_===f)return ll(m),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=_;else{for(var T=!1,I=m.child;I;){if(I===l){T=!0,l=m,f=_;break}if(I===f){T=!0,f=m,l=_;break}I=I.sibling}if(!T){for(I=_.child;I;){if(I===l){T=!0,l=_,f=m;break}if(I===f){T=!0,f=_,l=m;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ul(i){return i=Ac(i),i!==null?cl(i):null}function cl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=cl(i);if(s!==null)return s;i=i.sibling}return null}var A=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,J=e.unstable_shouldYield,ee=e.unstable_requestPaint,G=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,it=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ye=null,lt=null;function Tt(i){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ye,i,void 0,(i.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Ke,Vt=Math.log,St=Math.LN2;function Ke(i){return i>>>=0,i===0?32:31-(Vt(i)/St|0)|0}var Xt=64,yt=4194304;function hn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function pi(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var I=T&~m;I!==0?f=hn(I):(_&=T,_!==0&&(f=hn(_)))}else T=l&~m,T!==0?f=hn(T):_!==0&&(f=hn(_));if(f===0)return 0;if(s!==0&&s!==f&&!(s&m)&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if(f&4&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-wt(s),m=1<<l,f|=i[l],s&=~m;return f}function Pn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-wt(_),I=1<<T,k=m[T];k===-1?(!(I&l)||I&f)&&(m[T]=Pn(I,s)):k<=s&&(i.expiredLanes|=I),_&=~I}}function Lt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Dn(){var i=Xt;return Xt<<=1,!(Xt&4194240)&&(Xt=64),i}function vn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function $t(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-wt(s),i[s]=l}function _n(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-wt(l),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~_}}function Jr(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-wt(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var vt=0;function lm(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var um,Cc,cm,fm,dm,Rc=!1,fl=[],gr=null,vr=null,_r=null,Xo=new Map,qo=new Map,yr=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hm(i,s){switch(i){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Xo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(s.pointerId)}}function Yo(i,s,l,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=la(s),s!==null&&Cc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function KS(i,s,l,f,m){switch(s){case"focusin":return gr=Yo(gr,i,s,l,f,m),!0;case"dragenter":return vr=Yo(vr,i,s,l,f,m),!0;case"mouseover":return _r=Yo(_r,i,s,l,f,m),!0;case"pointerover":var _=m.pointerId;return Xo.set(_,Yo(Xo.get(_)||null,i,s,l,f,m)),!0;case"gotpointercapture":return _=m.pointerId,qo.set(_,Yo(qo.get(_)||null,i,s,l,f,m)),!0}return!1}function pm(i){var s=es(i.target);if(s!==null){var l=Di(s);if(l!==null){if(s=l.tag,s===13){if(s=al(l),s!==null){i.blockedOn=s,dm(i.priority,function(){cm(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function dl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Pc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Rt=f,l.target.dispatchEvent(f),Rt=null}else return s=la(l),s!==null&&Cc(s),i.blockedOn=l,!1;s.shift()}return!0}function mm(i,s,l){dl(i)&&l.delete(s)}function ZS(){Rc=!1,gr!==null&&dl(gr)&&(gr=null),vr!==null&&dl(vr)&&(vr=null),_r!==null&&dl(_r)&&(_r=null),Xo.forEach(mm),qo.forEach(mm)}function $o(i,s){i.blockedOn===s&&(i.blockedOn=null,Rc||(Rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ZS)))}function Ko(i){function s(m){return $o(m,i)}if(0<fl.length){$o(fl[0],i);for(var l=1;l<fl.length;l++){var f=fl[l];f.blockedOn===i&&(f.blockedOn=null)}}for(gr!==null&&$o(gr,i),vr!==null&&$o(vr,i),_r!==null&&$o(_r,i),Xo.forEach(s),qo.forEach(s),l=0;l<yr.length;l++)f=yr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<yr.length&&(l=yr[0],l.blockedOn===null);)pm(l),l.blockedOn===null&&yr.shift()}var Bs=b.ReactCurrentBatchConfig,hl=!0;function QS(i,s,l,f){var m=vt,_=Bs.transition;Bs.transition=null;try{vt=1,bc(i,s,l,f)}finally{vt=m,Bs.transition=_}}function JS(i,s,l,f){var m=vt,_=Bs.transition;Bs.transition=null;try{vt=4,bc(i,s,l,f)}finally{vt=m,Bs.transition=_}}function bc(i,s,l,f){if(hl){var m=Pc(i,s,l,f);if(m===null)qc(i,s,f,pl,l),hm(i,f);else if(KS(m,i,s,l,f))f.stopPropagation();else if(hm(i,f),s&4&&-1<$S.indexOf(i)){for(;m!==null;){var _=la(m);if(_!==null&&um(_),_=Pc(i,s,l,f),_===null&&qc(i,s,f,pl,l),_===m)break;m=_}m!==null&&f.stopPropagation()}else qc(i,s,f,null,l)}}var pl=null;function Pc(i,s,l,f){if(pl=null,i=j(f),i=es(i),i!==null)if(s=Di(i),s===null)i=null;else if(l=s.tag,l===13){if(i=al(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return pl=i,null}function gm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case be:return 1;case Ue:return 4;case ke:case it:return 16;case rt:return 536870912;default:return 16}default:return 16}}var xr=null,Dc=null,ml=null;function vm(){if(ml)return ml;var i,s=Dc,l=s.length,f,m="value"in xr?xr.value:xr.textContent,_=m.length;for(i=0;i<l&&s[i]===m[i];i++);var T=l-i;for(f=1;f<=T&&s[l-f]===m[_-f];f++);return ml=m.slice(i,1<f?1-f:void 0)}function gl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function vl(){return!0}function _m(){return!1}function qn(i){function s(l,f,m,_,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(l=i[I],this[I]=l?l(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?vl:_m,this.isPropagationStopped=_m,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),s}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=qn(ks),Zo=re({},ks,{view:0,detail:0}),eE=qn(Zo),Ic,Nc,Qo,_l=re({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Qo&&(Qo&&i.type==="mousemove"?(Ic=i.screenX-Qo.screenX,Nc=i.screenY-Qo.screenY):Nc=Ic=0,Qo=i),Ic)},movementY:function(i){return"movementY"in i?i.movementY:Nc}}),ym=qn(_l),tE=re({},_l,{dataTransfer:0}),nE=qn(tE),iE=re({},Zo,{relatedTarget:0}),Uc=qn(iE),rE=re({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),sE=qn(rE),oE=re({},ks,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),aE=qn(oE),lE=re({},ks,{data:0}),xm=qn(lE),uE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dE(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=fE[i])?!!s[i]:!1}function Fc(){return dE}var hE=re({},Zo,{key:function(i){if(i.key){var s=uE[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=gl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(i){return i.type==="keypress"?gl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?gl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),pE=qn(hE),mE=re({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=qn(mE),gE=re({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),vE=qn(gE),_E=re({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),yE=qn(_E),xE=re({},_l,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),SE=qn(xE),EE=[9,13,27,32],Oc=c&&"CompositionEvent"in window,Jo=null;c&&"documentMode"in document&&(Jo=document.documentMode);var ME=c&&"TextEvent"in window&&!Jo,Em=c&&(!Oc||Jo&&8<Jo&&11>=Jo),Mm=" ",Tm=!1;function wm(i,s){switch(i){case"keyup":return EE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var zs=!1;function TE(i,s){switch(i){case"compositionend":return Am(s);case"keypress":return s.which!==32?null:(Tm=!0,Mm);case"textInput":return i=s.data,i===Mm&&Tm?null:i;default:return null}}function wE(i,s){if(zs)return i==="compositionend"||!Oc&&wm(i,s)?(i=vm(),ml=Dc=xr=null,zs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Em&&s.locale!=="ko"?null:s.data;default:return null}}var AE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!AE[i.type]:s==="textarea"}function Rm(i,s,l,f){De(f),s=Ml(s,"onChange"),0<s.length&&(l=new Lc("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var ea=null,ta=null;function CE(i){Xm(i,0)}function yl(i){var s=js(i);if(_t(s))return i}function RE(i,s){if(i==="change")return s}var bm=!1;if(c){var Bc;if(c){var kc="oninput"in document;if(!kc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),kc=typeof Pm.oninput=="function"}Bc=kc}else Bc=!1;bm=Bc&&(!document.documentMode||9<document.documentMode)}function Dm(){ea&&(ea.detachEvent("onpropertychange",Lm),ta=ea=null)}function Lm(i){if(i.propertyName==="value"&&yl(ta)){var s=[];Rm(s,ta,i,j(i)),Un(CE,s)}}function bE(i,s,l){i==="focusin"?(Dm(),ea=s,ta=l,ea.attachEvent("onpropertychange",Lm)):i==="focusout"&&Dm()}function PE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return yl(ta)}function DE(i,s){if(i==="click")return yl(s)}function LE(i,s){if(i==="input"||i==="change")return yl(s)}function IE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var mi=typeof Object.is=="function"?Object.is:IE;function na(i,s){if(mi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!mi(i[m],s[m]))return!1}return!0}function Im(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Nm(i,s){var l=Im(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Im(l)}}function Um(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Um(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Fm(){for(var i=window,s=Ut();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Ut(i.document)}return s}function zc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function NE(i){var s=Fm(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Um(l.ownerDocument.documentElement,l)){if(f!==null&&zc(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=Nm(l,_);var T=Nm(l,f);m&&T&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var UE=c&&"documentMode"in document&&11>=document.documentMode,Vs=null,Vc=null,ia=null,Hc=!1;function Om(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hc||Vs==null||Vs!==Ut(f)||(f=Vs,"selectionStart"in f&&zc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ia&&na(ia,f)||(ia=f,f=Ml(Vc,"onSelect"),0<f.length&&(s=new Lc("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Vs)))}function xl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Hs={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Gc={},Bm={};c&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Sl(i){if(Gc[i])return Gc[i];if(!Hs[i])return i;var s=Hs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Bm)return Gc[i]=s[l];return i}var km=Sl("animationend"),zm=Sl("animationiteration"),Vm=Sl("animationstart"),Hm=Sl("transitionend"),Gm=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(i,s){Gm.set(i,s),a(s,[i])}for(var Wc=0;Wc<Wm.length;Wc++){var jc=Wm[Wc],FE=jc.toLowerCase(),OE=jc[0].toUpperCase()+jc.slice(1);Sr(FE,"on"+OE)}Sr(km,"onAnimationEnd"),Sr(zm,"onAnimationIteration"),Sr(Vm,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Hm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function jm(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,ol(f,s,void 0,i),i.currentTarget=null}function Xm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var I=f[T],k=I.instance,Z=I.currentTarget;if(I=I.listener,k!==_&&m.isPropagationStopped())break e;jm(m,I,Z),_=k}else for(T=0;T<f.length;T++){if(I=f[T],k=I.instance,Z=I.currentTarget,I=I.listener,k!==_&&m.isPropagationStopped())break e;jm(m,I,Z),_=k}}}if(Zr)throw i=mr,Zr=!1,mr=null,i}function Bt(i,s){var l=s[Jc];l===void 0&&(l=s[Jc]=new Set);var f=i+"__bubble";l.has(f)||(qm(s,i,2,!1),l.add(f))}function Xc(i,s,l){var f=0;s&&(f|=4),qm(l,i,f,s)}var El="_reactListening"+Math.random().toString(36).slice(2);function sa(i){if(!i[El]){i[El]=!0,r.forEach(function(l){l!=="selectionchange"&&(BE.has(l)||Xc(l,!1,i),Xc(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[El]||(s[El]=!0,Xc("selectionchange",!1,s))}}function qm(i,s,l,f){switch(gm(s)){case 1:var m=QS;break;case 4:m=JS;break;default:m=bc}l=m.bind(null,s,l,i),m=void 0,!Fs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function qc(i,s,l,f,m){var _=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var I=f.stateNode.containerInfo;if(I===m||I.nodeType===8&&I.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===m||k.nodeType===8&&k.parentNode===m))return;T=T.return}for(;I!==null;){if(T=es(I),T===null)return;if(k=T.tag,k===5||k===6){f=_=T;continue e}I=I.parentNode}}f=f.return}Un(function(){var Z=_,_e=j(l),Se=[];e:{var ge=Gm.get(i);if(ge!==void 0){var Ne=Lc,Ge=i;switch(i){case"keypress":if(gl(l)===0)break e;case"keydown":case"keyup":Ne=pE;break;case"focusin":Ge="focus",Ne=Uc;break;case"focusout":Ge="blur",Ne=Uc;break;case"beforeblur":case"afterblur":Ne=Uc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=vE;break;case km:case zm:case Vm:Ne=sE;break;case Hm:Ne=yE;break;case"scroll":Ne=eE;break;case"wheel":Ne=SE;break;case"copy":case"cut":case"paste":Ne=aE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Sm}var We=(s&4)!==0,Kt=!We&&i==="scroll",q=We?ge!==null?ge+"Capture":null:ge;We=[];for(var W=Z,Y;W!==null;){Y=W;var we=Y.stateNode;if(Y.tag===5&&we!==null&&(Y=we,q!==null&&(we=bn(W,q),we!=null&&We.push(oa(W,we,Y)))),Kt)break;W=W.return}0<We.length&&(ge=new Ne(ge,Ge,null,l,_e),Se.push({event:ge,listeners:We}))}}if(!(s&7)){e:{if(ge=i==="mouseover"||i==="pointerover",Ne=i==="mouseout"||i==="pointerout",ge&&l!==Rt&&(Ge=l.relatedTarget||l.fromElement)&&(es(Ge)||Ge[Gi]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Ge=l.relatedTarget||l.toElement,Ne=Z,Ge=Ge?es(Ge):null,Ge!==null&&(Kt=Di(Ge),Ge!==Kt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Ne=null,Ge=Z),Ne!==Ge)){if(We=ym,we="onMouseLeave",q="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(We=Sm,we="onPointerLeave",q="onPointerEnter",W="pointer"),Kt=Ne==null?ge:js(Ne),Y=Ge==null?ge:js(Ge),ge=new We(we,W+"leave",Ne,l,_e),ge.target=Kt,ge.relatedTarget=Y,we=null,es(_e)===Z&&(We=new We(q,W+"enter",Ge,l,_e),We.target=Y,We.relatedTarget=Kt,we=We),Kt=we,Ne&&Ge)t:{for(We=Ne,q=Ge,W=0,Y=We;Y;Y=Gs(Y))W++;for(Y=0,we=q;we;we=Gs(we))Y++;for(;0<W-Y;)We=Gs(We),W--;for(;0<Y-W;)q=Gs(q),Y--;for(;W--;){if(We===q||q!==null&&We===q.alternate)break t;We=Gs(We),q=Gs(q)}We=null}else We=null;Ne!==null&&Ym(Se,ge,Ne,We,!1),Ge!==null&&Kt!==null&&Ym(Se,Kt,Ge,We,!0)}}e:{if(ge=Z?js(Z):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Xe=RE;else if(Cm(ge))if(bm)Xe=LE;else{Xe=PE;var Qe=bE}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=DE);if(Xe&&(Xe=Xe(i,Z))){Rm(Se,Xe,l,_e);break e}Qe&&Qe(i,ge,Z),i==="focusout"&&(Qe=ge._wrapperState)&&Qe.controlled&&ge.type==="number"&&bt(ge,"number",ge.value)}switch(Qe=Z?js(Z):window,i){case"focusin":(Cm(Qe)||Qe.contentEditable==="true")&&(Vs=Qe,Vc=Z,ia=null);break;case"focusout":ia=Vc=Vs=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Om(Se,l,_e);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":Om(Se,l,_e)}var Je;if(Oc)e:{switch(i){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else zs?wm(i,l)&&(st="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(Em&&l.locale!=="ko"&&(zs||st!=="onCompositionStart"?st==="onCompositionEnd"&&zs&&(Je=vm()):(xr=_e,Dc="value"in xr?xr.value:xr.textContent,zs=!0)),Qe=Ml(Z,st),0<Qe.length&&(st=new xm(st,i,null,l,_e),Se.push({event:st,listeners:Qe}),Je?st.data=Je:(Je=Am(l),Je!==null&&(st.data=Je)))),(Je=ME?TE(i,l):wE(i,l))&&(Z=Ml(Z,"onBeforeInput"),0<Z.length&&(_e=new xm("onBeforeInput","beforeinput",null,l,_e),Se.push({event:_e,listeners:Z}),_e.data=Je))}Xm(Se,s)})}function oa(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Ml(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=bn(i,l),_!=null&&f.unshift(oa(i,_,m)),_=bn(i,s),_!=null&&f.push(oa(i,_,m))),i=i.return}return f}function Gs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ym(i,s,l,f,m){for(var _=s._reactName,T=[];l!==null&&l!==f;){var I=l,k=I.alternate,Z=I.stateNode;if(k!==null&&k===f)break;I.tag===5&&Z!==null&&(I=Z,m?(k=bn(l,_),k!=null&&T.unshift(oa(l,k,I))):m||(k=bn(l,_),k!=null&&T.push(oa(l,k,I)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var kE=/\r\n?/g,zE=/\u0000|\uFFFD/g;function $m(i){return(typeof i=="string"?i:""+i).replace(kE,`
`).replace(zE,"")}function Tl(i,s,l){if(s=$m(s),$m(i)!==s&&l)throw Error(t(425))}function wl(){}var Yc=null,$c=null;function Kc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(i){return Km.resolve(null).then(i).catch(GE)}:Zc;function GE(i){setTimeout(function(){throw i})}function Qc(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),Ko(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Ko(s)}function Er(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Zm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Li="__reactFiber$"+Ws,aa="__reactProps$"+Ws,Gi="__reactContainer$"+Ws,Jc="__reactEvents$"+Ws,WE="__reactListeners$"+Ws,jE="__reactHandles$"+Ws;function es(i){var s=i[Li];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Gi]||l[Li]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Zm(i);i!==null;){if(l=i[Li])return l;i=Zm(i)}return s}i=l,l=i.parentNode}return null}function la(i){return i=i[Li]||i[Gi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Al(i){return i[aa]||null}var ef=[],Xs=-1;function Mr(i){return{current:i}}function kt(i){0>Xs||(i.current=ef[Xs],ef[Xs]=null,Xs--)}function Ft(i,s){Xs++,ef[Xs]=i.current,i.current=s}var Tr={},yn=Mr(Tr),Fn=Mr(!1),ts=Tr;function qs(i,s){var l=i.type.contextTypes;if(!l)return Tr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function On(i){return i=i.childContextTypes,i!=null}function Cl(){kt(Fn),kt(yn)}function Qm(i,s,l){if(yn.current!==Tr)throw Error(t(168));Ft(yn,s),Ft(Fn,l)}function Jm(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,ye(i)||"Unknown",m));return re({},l,f)}function Rl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Tr,ts=yn.current,Ft(yn,i),Ft(Fn,Fn.current),!0}function eg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=Jm(i,s,ts),f.__reactInternalMemoizedMergedChildContext=i,kt(Fn),kt(yn),Ft(yn,i)):kt(Fn),Ft(Fn,l)}var Wi=null,bl=!1,tf=!1;function tg(i){Wi===null?Wi=[i]:Wi.push(i)}function XE(i){bl=!0,tg(i)}function wr(){if(!tf&&Wi!==null){tf=!0;var i=0,s=vt;try{var l=Wi;for(vt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}Wi=null,bl=!1}catch(m){throw Wi!==null&&(Wi=Wi.slice(i+1)),A(be,wr),m}finally{vt=s,tf=!1}}return null}var Ys=[],$s=0,Pl=null,Dl=0,ni=[],ii=0,ns=null,ji=1,Xi="";function is(i,s){Ys[$s++]=Dl,Ys[$s++]=Pl,Pl=i,Dl=s}function ng(i,s,l){ni[ii++]=ji,ni[ii++]=Xi,ni[ii++]=ns,ns=i;var f=ji;i=Xi;var m=32-wt(f)-1;f&=~(1<<m),l+=1;var _=32-wt(s)+m;if(30<_){var T=m-m%5;_=(f&(1<<T)-1).toString(32),f>>=T,m-=T,ji=1<<32-wt(s)+m|l<<m|f,Xi=_+i}else ji=1<<_|l<<m|f,Xi=i}function nf(i){i.return!==null&&(is(i,1),ng(i,1,0))}function rf(i){for(;i===Pl;)Pl=Ys[--$s],Ys[$s]=null,Dl=Ys[--$s],Ys[$s]=null;for(;i===ns;)ns=ni[--ii],ni[ii]=null,Xi=ni[--ii],ni[ii]=null,ji=ni[--ii],ni[ii]=null}var Yn=null,$n=null,Ht=!1,gi=null;function ig(i,s){var l=ai(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function rg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Yn=i,$n=Er(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Yn=i,$n=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ns!==null?{id:ji,overflow:Xi}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ai(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Yn=i,$n=null,!0):!1;default:return!1}}function sf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function of(i){if(Ht){var s=$n;if(s){var l=s;if(!rg(i,s)){if(sf(i))throw Error(t(418));s=Er(l.nextSibling);var f=Yn;s&&rg(i,s)?ig(f,l):(i.flags=i.flags&-4097|2,Ht=!1,Yn=i)}}else{if(sf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ht=!1,Yn=i}}}function sg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Yn=i}function Ll(i){if(i!==Yn)return!1;if(!Ht)return sg(i),Ht=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Kc(i.type,i.memoizedProps)),s&&(s=$n)){if(sf(i))throw og(),Error(t(418));for(;s;)ig(i,s),s=Er(s.nextSibling)}if(sg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){$n=Er(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}$n=null}}else $n=Yn?Er(i.stateNode.nextSibling):null;return!0}function og(){for(var i=$n;i;)i=Er(i.nextSibling)}function Ks(){$n=Yn=null,Ht=!1}function af(i){gi===null?gi=[i]:gi.push(i)}var qE=b.ReactCurrentBatchConfig;function ua(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var I=m.refs;T===null?delete I[_]:I[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Il(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ag(i){var s=i._init;return s(i._payload)}function lg(i){function s(q,W){if(i){var Y=q.deletions;Y===null?(q.deletions=[W],q.flags|=16):Y.push(W)}}function l(q,W){if(!i)return null;for(;W!==null;)s(q,W),W=W.sibling;return null}function f(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function m(q,W){return q=Ir(q,W),q.index=0,q.sibling=null,q}function _(q,W,Y){return q.index=Y,i?(Y=q.alternate,Y!==null?(Y=Y.index,Y<W?(q.flags|=2,W):Y):(q.flags|=2,W)):(q.flags|=1048576,W)}function T(q){return i&&q.alternate===null&&(q.flags|=2),q}function I(q,W,Y,we){return W===null||W.tag!==6?(W=Qf(Y,q.mode,we),W.return=q,W):(W=m(W,Y),W.return=q,W)}function k(q,W,Y,we){var Xe=Y.type;return Xe===U?_e(q,W,Y.props.children,we,Y.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ue&&ag(Xe)===W.type)?(we=m(W,Y.props),we.ref=ua(q,W,Y),we.return=q,we):(we=iu(Y.type,Y.key,Y.props,null,q.mode,we),we.ref=ua(q,W,Y),we.return=q,we)}function Z(q,W,Y,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==Y.containerInfo||W.stateNode.implementation!==Y.implementation?(W=Jf(Y,q.mode,we),W.return=q,W):(W=m(W,Y.children||[]),W.return=q,W)}function _e(q,W,Y,we,Xe){return W===null||W.tag!==7?(W=fs(Y,q.mode,we,Xe),W.return=q,W):(W=m(W,Y),W.return=q,W)}function Se(q,W,Y){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Qf(""+W,q.mode,Y),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return Y=iu(W.type,W.key,W.props,null,q.mode,Y),Y.ref=ua(q,null,W),Y.return=q,Y;case F:return W=Jf(W,q.mode,Y),W.return=q,W;case ue:var we=W._init;return Se(q,we(W._payload),Y)}if(qe(W)||le(W))return W=fs(W,q.mode,Y,null),W.return=q,W;Il(q,W)}return null}function ge(q,W,Y,we){var Xe=W!==null?W.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Xe!==null?null:I(q,W,""+Y,we);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:return Y.key===Xe?k(q,W,Y,we):null;case F:return Y.key===Xe?Z(q,W,Y,we):null;case ue:return Xe=Y._init,ge(q,W,Xe(Y._payload),we)}if(qe(Y)||le(Y))return Xe!==null?null:_e(q,W,Y,we,null);Il(q,Y)}return null}function Ne(q,W,Y,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(Y)||null,I(W,q,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return q=q.get(we.key===null?Y:we.key)||null,k(W,q,we,Xe);case F:return q=q.get(we.key===null?Y:we.key)||null,Z(W,q,we,Xe);case ue:var Qe=we._init;return Ne(q,W,Y,Qe(we._payload),Xe)}if(qe(we)||le(we))return q=q.get(Y)||null,_e(W,q,we,Xe,null);Il(W,we)}return null}function Ge(q,W,Y,we){for(var Xe=null,Qe=null,Je=W,st=W=0,fn=null;Je!==null&&st<Y.length;st++){Je.index>st?(fn=Je,Je=null):fn=Je.sibling;var At=ge(q,Je,Y[st],we);if(At===null){Je===null&&(Je=fn);break}i&&Je&&At.alternate===null&&s(q,Je),W=_(At,W,st),Qe===null?Xe=At:Qe.sibling=At,Qe=At,Je=fn}if(st===Y.length)return l(q,Je),Ht&&is(q,st),Xe;if(Je===null){for(;st<Y.length;st++)Je=Se(q,Y[st],we),Je!==null&&(W=_(Je,W,st),Qe===null?Xe=Je:Qe.sibling=Je,Qe=Je);return Ht&&is(q,st),Xe}for(Je=f(q,Je);st<Y.length;st++)fn=Ne(Je,q,st,Y[st],we),fn!==null&&(i&&fn.alternate!==null&&Je.delete(fn.key===null?st:fn.key),W=_(fn,W,st),Qe===null?Xe=fn:Qe.sibling=fn,Qe=fn);return i&&Je.forEach(function(Nr){return s(q,Nr)}),Ht&&is(q,st),Xe}function We(q,W,Y,we){var Xe=le(Y);if(typeof Xe!="function")throw Error(t(150));if(Y=Xe.call(Y),Y==null)throw Error(t(151));for(var Qe=Xe=null,Je=W,st=W=0,fn=null,At=Y.next();Je!==null&&!At.done;st++,At=Y.next()){Je.index>st?(fn=Je,Je=null):fn=Je.sibling;var Nr=ge(q,Je,At.value,we);if(Nr===null){Je===null&&(Je=fn);break}i&&Je&&Nr.alternate===null&&s(q,Je),W=_(Nr,W,st),Qe===null?Xe=Nr:Qe.sibling=Nr,Qe=Nr,Je=fn}if(At.done)return l(q,Je),Ht&&is(q,st),Xe;if(Je===null){for(;!At.done;st++,At=Y.next())At=Se(q,At.value,we),At!==null&&(W=_(At,W,st),Qe===null?Xe=At:Qe.sibling=At,Qe=At);return Ht&&is(q,st),Xe}for(Je=f(q,Je);!At.done;st++,At=Y.next())At=Ne(Je,q,st,At.value,we),At!==null&&(i&&At.alternate!==null&&Je.delete(At.key===null?st:At.key),W=_(At,W,st),Qe===null?Xe=At:Qe.sibling=At,Qe=At);return i&&Je.forEach(function(AM){return s(q,AM)}),Ht&&is(q,st),Xe}function Kt(q,W,Y,we){if(typeof Y=="object"&&Y!==null&&Y.type===U&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:e:{for(var Xe=Y.key,Qe=W;Qe!==null;){if(Qe.key===Xe){if(Xe=Y.type,Xe===U){if(Qe.tag===7){l(q,Qe.sibling),W=m(Qe,Y.props.children),W.return=q,q=W;break e}}else if(Qe.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ue&&ag(Xe)===Qe.type){l(q,Qe.sibling),W=m(Qe,Y.props),W.ref=ua(q,Qe,Y),W.return=q,q=W;break e}l(q,Qe);break}else s(q,Qe);Qe=Qe.sibling}Y.type===U?(W=fs(Y.props.children,q.mode,we,Y.key),W.return=q,q=W):(we=iu(Y.type,Y.key,Y.props,null,q.mode,we),we.ref=ua(q,W,Y),we.return=q,q=we)}return T(q);case F:e:{for(Qe=Y.key;W!==null;){if(W.key===Qe)if(W.tag===4&&W.stateNode.containerInfo===Y.containerInfo&&W.stateNode.implementation===Y.implementation){l(q,W.sibling),W=m(W,Y.children||[]),W.return=q,q=W;break e}else{l(q,W);break}else s(q,W);W=W.sibling}W=Jf(Y,q.mode,we),W.return=q,q=W}return T(q);case ue:return Qe=Y._init,Kt(q,W,Qe(Y._payload),we)}if(qe(Y))return Ge(q,W,Y,we);if(le(Y))return We(q,W,Y,we);Il(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,W!==null&&W.tag===6?(l(q,W.sibling),W=m(W,Y),W.return=q,q=W):(l(q,W),W=Qf(Y,q.mode,we),W.return=q,q=W),T(q)):l(q,W)}return Kt}var Zs=lg(!0),ug=lg(!1),Nl=Mr(null),Ul=null,Qs=null,lf=null;function uf(){lf=Qs=Ul=null}function cf(i){var s=Nl.current;kt(Nl),i._currentValue=s}function ff(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function Js(i,s){Ul=i,lf=Qs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(Bn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(lf!==i)if(i={context:i,memoizedValue:s,next:null},Qs===null){if(Ul===null)throw Error(t(308));Qs=i,Ul.dependencies={lanes:0,firstContext:i}}else Qs=Qs.next=i;return s}var rs=null;function df(i){rs===null?rs=[i]:rs.push(i)}function cg(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,df(s)):(l.next=m.next,m.next=l),s.interleaved=l,qi(i,f)}function qi(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ar=!1;function hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Yi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Cr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,Mt&2){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,qi(i,l)}return m=f.interleaved,m===null?(s.next=s,df(f)):(s.next=m.next,m.next=s),f.interleaved=s,qi(i,l)}function Fl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Jr(i,l)}}function dg(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?m=_=s:_=_.next=s}else m=_=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ol(i,s,l,f){var m=i.updateQueue;Ar=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,I=m.shared.pending;if(I!==null){m.shared.pending=null;var k=I,Z=k.next;k.next=null,T===null?_=Z:T.next=Z,T=k;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=Z:I.next=Z,_e.lastBaseUpdate=k))}if(_!==null){var Se=m.baseState;T=0,_e=Z=k=null,I=_;do{var ge=I.lane,Ne=I.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=i,We=I;switch(ge=s,Ne=l,We.tag){case 1:if(Ge=We.payload,typeof Ge=="function"){Se=Ge.call(Ne,Se,ge);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=We.payload,ge=typeof Ge=="function"?Ge.call(Ne,Se,ge):Ge,ge==null)break e;Se=re({},Se,ge);break e;case 2:Ar=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ge=m.effects,ge===null?m.effects=[I]:ge.push(I))}else Ne={eventTime:Ne,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(Z=_e=Ne,k=Se):_e=_e.next=Ne,T|=ge;if(I=I.next,I===null){if(I=m.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(_e===null&&(k=Se),m.baseState=k,m.firstBaseUpdate=Z,m.lastBaseUpdate=_e,s=m.shared.interleaved,s!==null){m=s;do T|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);as|=T,i.lanes=T,i.memoizedState=Se}}function hg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ca={},Ii=Mr(ca),fa=Mr(ca),da=Mr(ca);function ss(i){if(i===ca)throw Error(t(174));return i}function pf(i,s){switch(Ft(da,s),Ft(fa,i),Ft(Ii,ca),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:je(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=je(s,i)}kt(Ii),Ft(Ii,s)}function eo(){kt(Ii),kt(fa),kt(da)}function pg(i){ss(da.current);var s=ss(Ii.current),l=je(s,i.type);s!==l&&(Ft(fa,i),Ft(Ii,l))}function mf(i){fa.current===i&&(kt(Ii),kt(fa))}var Gt=Mr(0);function Bl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var gf=[];function vf(){for(var i=0;i<gf.length;i++)gf[i]._workInProgressVersionPrimary=null;gf.length=0}var kl=b.ReactCurrentDispatcher,_f=b.ReactCurrentBatchConfig,os=0,Wt=null,sn=null,un=null,zl=!1,ha=!1,pa=0,YE=0;function xn(){throw Error(t(321))}function yf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!mi(i[l],s[l]))return!1;return!0}function xf(i,s,l,f,m,_){if(os=_,Wt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,kl.current=i===null||i.memoizedState===null?QE:JE,i=l(f,m),ha){_=0;do{if(ha=!1,pa=0,25<=_)throw Error(t(301));_+=1,un=sn=null,s.updateQueue=null,kl.current=eM,i=l(f,m)}while(ha)}if(kl.current=Gl,s=sn!==null&&sn.next!==null,os=0,un=sn=Wt=null,zl=!1,s)throw Error(t(300));return i}function Sf(){var i=pa!==0;return pa=0,i}function Ni(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Wt.memoizedState=un=i:un=un.next=i,un}function si(){if(sn===null){var i=Wt.alternate;i=i!==null?i.memoizedState:null}else i=sn.next;var s=un===null?Wt.memoizedState:un.next;if(s!==null)un=s,sn=i;else{if(i===null)throw Error(t(310));sn=i,i={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?Wt.memoizedState=un=i:un=un.next=i}return un}function ma(i,s){return typeof s=="function"?s(i):s}function Ef(i){var s=si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=sn,m=f.baseQueue,_=l.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}f.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,f=f.baseState;var I=T=null,k=null,Z=_;do{var _e=Z.lane;if((os&_e)===_e)k!==null&&(k=k.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),f=Z.hasEagerState?Z.eagerState:i(f,Z.action);else{var Se={lane:_e,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};k===null?(I=k=Se,T=f):k=k.next=Se,Wt.lanes|=_e,as|=_e}Z=Z.next}while(Z!==null&&Z!==_);k===null?T=f:k.next=I,mi(f,s.memoizedState)||(Bn=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=k,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do _=m.lane,Wt.lanes|=_,as|=_,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Mf(i){var s=si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,_=s.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do _=i(_,T.action),T=T.next;while(T!==m);mi(_,s.memoizedState)||(Bn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function mg(){}function gg(i,s){var l=Wt,f=si(),m=s(),_=!mi(f.memoizedState,m);if(_&&(f.memoizedState=m,Bn=!0),f=f.queue,Tf(yg.bind(null,l,f,i),[i]),f.getSnapshot!==s||_||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ga(9,_g.bind(null,l,f,m,s),void 0,null),cn===null)throw Error(t(349));os&30||vg(l,s,m)}return m}function vg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function _g(i,s,l,f){s.value=l,s.getSnapshot=f,xg(s)&&Sg(i)}function yg(i,s,l){return l(function(){xg(s)&&Sg(i)})}function xg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!mi(i,l)}catch{return!0}}function Sg(i){var s=qi(i,1);s!==null&&xi(s,i,1,-1)}function Eg(i){var s=Ni();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:i},s.queue=i,i=i.dispatch=ZE.bind(null,Wt,i),[s.memoizedState,i]}function ga(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function Mg(){return si().memoizedState}function Vl(i,s,l,f){var m=Ni();Wt.flags|=i,m.memoizedState=ga(1|s,l,void 0,f===void 0?null:f)}function Hl(i,s,l,f){var m=si();f=f===void 0?null:f;var _=void 0;if(sn!==null){var T=sn.memoizedState;if(_=T.destroy,f!==null&&yf(f,T.deps)){m.memoizedState=ga(s,l,_,f);return}}Wt.flags|=i,m.memoizedState=ga(1|s,l,_,f)}function Tg(i,s){return Vl(8390656,8,i,s)}function Tf(i,s){return Hl(2048,8,i,s)}function wg(i,s){return Hl(4,2,i,s)}function Ag(i,s){return Hl(4,4,i,s)}function Cg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Rg(i,s,l){return l=l!=null?l.concat([i]):null,Hl(4,4,Cg.bind(null,s,i),l)}function wf(){}function bg(i,s){var l=si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&yf(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function Pg(i,s){var l=si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&yf(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function Dg(i,s,l){return os&21?(mi(l,s)||(l=Dn(),Wt.lanes|=l,as|=l,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,Bn=!0),i.memoizedState=l)}function $E(i,s){var l=vt;vt=l!==0&&4>l?l:4,i(!0);var f=_f.transition;_f.transition={};try{i(!1),s()}finally{vt=l,_f.transition=f}}function Lg(){return si().memoizedState}function KE(i,s,l){var f=Dr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Ig(i))Ng(s,l);else if(l=cg(i,s,l,f),l!==null){var m=In();xi(l,i,f,m),Ug(l,s,f)}}function ZE(i,s,l){var f=Dr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ig(i))Ng(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,I=_(T,l);if(m.hasEagerState=!0,m.eagerState=I,mi(I,T)){var k=s.interleaved;k===null?(m.next=m,df(s)):(m.next=k.next,k.next=m),s.interleaved=m;return}}catch{}finally{}l=cg(i,s,m,f),l!==null&&(m=In(),xi(l,i,f,m),Ug(l,s,f))}}function Ig(i){var s=i.alternate;return i===Wt||s!==null&&s===Wt}function Ng(i,s){ha=zl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Ug(i,s,l){if(l&4194240){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Jr(i,l)}}var Gl={readContext:ri,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},QE={readContext:ri,useCallback:function(i,s){return Ni().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:Tg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Vl(4194308,4,Cg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Vl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Vl(4,2,i,s)},useMemo:function(i,s){var l=Ni();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Ni();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=KE.bind(null,Wt,i),[f.memoizedState,i]},useRef:function(i){var s=Ni();return i={current:i},s.memoizedState=i},useState:Eg,useDebugValue:wf,useDeferredValue:function(i){return Ni().memoizedState=i},useTransition:function(){var i=Eg(!1),s=i[0];return i=$E.bind(null,i[1]),Ni().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=Wt,m=Ni();if(Ht){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),cn===null)throw Error(t(349));os&30||vg(f,s,l)}m.memoizedState=l;var _={value:l,getSnapshot:s};return m.queue=_,Tg(yg.bind(null,f,_,i),[i]),f.flags|=2048,ga(9,_g.bind(null,f,_,l,s),void 0,null),l},useId:function(){var i=Ni(),s=cn.identifierPrefix;if(Ht){var l=Xi,f=ji;l=(f&~(1<<32-wt(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=pa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=YE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},JE={readContext:ri,useCallback:bg,useContext:ri,useEffect:Tf,useImperativeHandle:Rg,useInsertionEffect:wg,useLayoutEffect:Ag,useMemo:Pg,useReducer:Ef,useRef:Mg,useState:function(){return Ef(ma)},useDebugValue:wf,useDeferredValue:function(i){var s=si();return Dg(s,sn.memoizedState,i)},useTransition:function(){var i=Ef(ma)[0],s=si().memoizedState;return[i,s]},useMutableSource:mg,useSyncExternalStore:gg,useId:Lg,unstable_isNewReconciler:!1},eM={readContext:ri,useCallback:bg,useContext:ri,useEffect:Tf,useImperativeHandle:Rg,useInsertionEffect:wg,useLayoutEffect:Ag,useMemo:Pg,useReducer:Mf,useRef:Mg,useState:function(){return Mf(ma)},useDebugValue:wf,useDeferredValue:function(i){var s=si();return sn===null?s.memoizedState=i:Dg(s,sn.memoizedState,i)},useTransition:function(){var i=Mf(ma)[0],s=si().memoizedState;return[i,s]},useMutableSource:mg,useSyncExternalStore:gg,useId:Lg,unstable_isNewReconciler:!1};function vi(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Af(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:re({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Wl={isMounted:function(i){return(i=i._reactInternals)?Di(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=In(),m=Dr(i),_=Yi(f,m);_.payload=s,l!=null&&(_.callback=l),s=Cr(i,_,m),s!==null&&(xi(s,i,m,f),Fl(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=In(),m=Dr(i),_=Yi(f,m);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Cr(i,_,m),s!==null&&(xi(s,i,m,f),Fl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=In(),f=Dr(i),m=Yi(l,f);m.tag=2,s!=null&&(m.callback=s),s=Cr(i,m,f),s!==null&&(xi(s,i,f,l),Fl(s,i,f))}};function Fg(i,s,l,f,m,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!na(l,f)||!na(m,_):!0}function Og(i,s,l){var f=!1,m=Tr,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(m=On(s)?ts:yn.current,f=s.contextTypes,_=(f=f!=null)?qs(i,m):Tr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function Bg(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Wl.enqueueReplaceState(s,s.state,null)}function Cf(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},hf(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=ri(_):(_=On(s)?ts:yn.current,m.context=qs(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Af(i,s,_,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Wl.enqueueReplaceState(m,m.state,null),Ol(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function to(i,s){try{var l="",f=s;do l+=fe(f),f=f.return;while(f);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function Rf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function bf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var tM=typeof WeakMap=="function"?WeakMap:Map;function kg(i,s,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Zl||(Zl=!0,Wf=f),bf(i,s)},l}function zg(i,s,l){l=Yi(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){bf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){bf(i,s),typeof f!="function"&&(br===null?br=new Set([this]):br.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function Vg(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new tM;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=mM.bind(null,i,s,l),s.then(i,i))}function Hg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Gg(i,s,l,f,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Yi(-1,1),s.tag=2,Cr(l,s,1))),l.lanes|=1),i)}var nM=b.ReactCurrentOwner,Bn=!1;function Ln(i,s,l,f){s.child=i===null?ug(s,null,l,f):Zs(s,i.child,l,f)}function Wg(i,s,l,f,m){l=l.render;var _=s.ref;return Js(s,m),f=xf(i,s,l,f,_,m),l=Sf(),i!==null&&!Bn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,$i(i,s,m)):(Ht&&l&&nf(s),s.flags|=1,Ln(i,s,f,m),s.child)}function jg(i,s,l,f,m){if(i===null){var _=l.type;return typeof _=="function"&&!Zf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,Xg(i,s,_,f,m)):(i=iu(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,!(i.lanes&m)){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:na,l(T,f)&&i.ref===s.ref)return $i(i,s,m)}return s.flags|=1,i=Ir(_,f),i.ref=s.ref,i.return=s,s.child=i}function Xg(i,s,l,f,m){if(i!==null){var _=i.memoizedProps;if(na(_,f)&&i.ref===s.ref)if(Bn=!1,s.pendingProps=f=_,(i.lanes&m)!==0)i.flags&131072&&(Bn=!0);else return s.lanes=i.lanes,$i(i,s,m)}return Pf(i,s,l,f,m)}function qg(i,s,l){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(io,Kn),Kn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ft(io,Kn),Kn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Ft(io,Kn),Kn|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Ft(io,Kn),Kn|=f;return Ln(i,s,m,l),s.child}function Yg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Pf(i,s,l,f,m){var _=On(l)?ts:yn.current;return _=qs(s,_),Js(s,m),l=xf(i,s,l,f,_,m),f=Sf(),i!==null&&!Bn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,$i(i,s,m)):(Ht&&f&&nf(s),s.flags|=1,Ln(i,s,l,m),s.child)}function $g(i,s,l,f,m){if(On(l)){var _=!0;Rl(s)}else _=!1;if(Js(s,m),s.stateNode===null)Xl(i,s),Og(s,l,f),Cf(s,l,f,m),f=!0;else if(i===null){var T=s.stateNode,I=s.memoizedProps;T.props=I;var k=T.context,Z=l.contextType;typeof Z=="object"&&Z!==null?Z=ri(Z):(Z=On(l)?ts:yn.current,Z=qs(s,Z));var _e=l.getDerivedStateFromProps,Se=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==f||k!==Z)&&Bg(s,T,f,Z),Ar=!1;var ge=s.memoizedState;T.state=ge,Ol(s,f,T,m),k=s.memoizedState,I!==f||ge!==k||Fn.current||Ar?(typeof _e=="function"&&(Af(s,l,_e,f),k=s.memoizedState),(I=Ar||Fg(s,l,I,f,ge,k,Z))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=k),T.props=f,T.state=k,T.context=Z,f=I):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,fg(i,s),I=s.memoizedProps,Z=s.type===s.elementType?I:vi(s.type,I),T.props=Z,Se=s.pendingProps,ge=T.context,k=l.contextType,typeof k=="object"&&k!==null?k=ri(k):(k=On(l)?ts:yn.current,k=qs(s,k));var Ne=l.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Se||ge!==k)&&Bg(s,T,f,k),Ar=!1,ge=s.memoizedState,T.state=ge,Ol(s,f,T,m);var Ge=s.memoizedState;I!==Se||ge!==Ge||Fn.current||Ar?(typeof Ne=="function"&&(Af(s,l,Ne,f),Ge=s.memoizedState),(Z=Ar||Fg(s,l,Z,f,ge,Ge,k)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Ge,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Ge,k)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Ge),T.props=f,T.state=Ge,T.context=k,f=Z):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return Df(i,s,l,f,_,m)}function Df(i,s,l,f,m,_){Yg(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return m&&eg(s,l,!1),$i(i,s,_);f=s.stateNode,nM.current=s;var I=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=Zs(s,i.child,null,_),s.child=Zs(s,null,I,_)):Ln(i,s,I,_),s.memoizedState=f.state,m&&eg(s,l,!0),s.child}function Kg(i){var s=i.stateNode;s.pendingContext?Qm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Qm(i,s.context,!1),pf(i,s.containerInfo)}function Zg(i,s,l,f,m){return Ks(),af(m),s.flags|=256,Ln(i,s,l,f),s.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function If(i){return{baseLanes:i,cachePool:null,transitions:null}}function Qg(i,s,l){var f=s.pendingProps,m=Gt.current,_=!1,T=(s.flags&128)!==0,I;if((I=T)||(I=i!==null&&i.memoizedState===null?!1:(m&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ft(Gt,m&1),i===null)return of(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=T):_=ru(T,f,0,null),i=fs(i,f,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=If(l),s.memoizedState=Lf,i):Nf(s,T));if(m=i.memoizedState,m!==null&&(I=m.dehydrated,I!==null))return iM(i,s,T,f,I,m,l);if(_){_=f.fallback,T=s.mode,m=i.child,I=m.sibling;var k={mode:"hidden",children:f.children};return!(T&1)&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=k,s.deletions=null):(f=Ir(m,k),f.subtreeFlags=m.subtreeFlags&14680064),I!==null?_=Ir(I,_):(_=fs(_,T,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?If(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,s.memoizedState=Lf,f}return _=i.child,i=_.sibling,f=Ir(_,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Nf(i,s){return s=ru({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function jl(i,s,l,f){return f!==null&&af(f),Zs(s,i.child,null,l),i=Nf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function iM(i,s,l,f,m,_,T){if(l)return s.flags&256?(s.flags&=-257,f=Rf(Error(t(422))),jl(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=ru({mode:"visible",children:f.children},m,0,null),_=fs(_,m,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,s.mode&1&&Zs(s,i.child,null,T),s.child.memoizedState=If(T),s.memoizedState=Lf,_);if(!(s.mode&1))return jl(i,s,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var I=f.dgst;return f=I,_=Error(t(419)),f=Rf(_,f,void 0),jl(i,s,T,f)}if(I=(T&i.childLanes)!==0,Bn||I){if(f=cn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|T)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,qi(i,m),xi(f,i,m,-1))}return Kf(),f=Rf(Error(t(421))),jl(i,s,T,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=gM.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,$n=Er(m.nextSibling),Yn=s,Ht=!0,gi=null,i!==null&&(ni[ii++]=ji,ni[ii++]=Xi,ni[ii++]=ns,ji=i.id,Xi=i.overflow,ns=s),s=Nf(s,f.children),s.flags|=4096,s)}function Jg(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),ff(i.return,s,l)}function Uf(i,s,l,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=m)}function ev(i,s,l){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(Ln(i,s,f.children,l),f=Gt.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jg(i,l,s);else if(i.tag===19)Jg(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ft(Gt,f),!(s.mode&1))s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Bl(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Uf(s,!1,m,l,_);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Bl(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Uf(s,!0,l,null,_);break;case"together":Uf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xl(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),as|=s.lanes,!(l&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ir(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ir(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function rM(i,s,l){switch(s.tag){case 3:Kg(s),Ks();break;case 5:pg(s);break;case 1:On(s.type)&&Rl(s);break;case 4:pf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Ft(Nl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ft(Gt,Gt.current&1),s.flags|=128,null):l&s.child.childLanes?Qg(i,s,l):(Ft(Gt,Gt.current&1),i=$i(i,s,l),i!==null?i.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,i.flags&128){if(f)return ev(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ft(Gt,Gt.current),f)break;return null;case 22:case 23:return s.lanes=0,qg(i,s,l)}return $i(i,s,l)}var tv,Ff,nv,iv;tv=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ff=function(){},nv=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,ss(Ii.current);var _=null;switch(l){case"input":m=H(i,m),f=H(i,f),_=[];break;case"select":m=re({},m,{value:void 0}),f=re({},f,{value:void 0}),_=[];break;case"textarea":m=w(i,m),f=w(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=wl)}pt(l,f);var T;l=null;for(Z in m)if(!f.hasOwnProperty(Z)&&m.hasOwnProperty(Z)&&m[Z]!=null)if(Z==="style"){var I=m[Z];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?_||(_=[]):(_=_||[]).push(Z,null));for(Z in f){var k=f[Z];if(I=m!=null?m[Z]:void 0,f.hasOwnProperty(Z)&&k!==I&&(k!=null||I!=null))if(Z==="style")if(I){for(T in I)!I.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in k)k.hasOwnProperty(T)&&I[T]!==k[T]&&(l||(l={}),l[T]=k[T])}else l||(_||(_=[]),_.push(Z,l)),l=k;else Z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(_=_||[]).push(Z,k)):Z==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(Z,""+k):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(k!=null&&Z==="onScroll"&&Bt("scroll",i),_||I===k||(_=[])):(_=_||[]).push(Z,k))}l&&(_=_||[]).push("style",l);var Z=_;(s.updateQueue=Z)&&(s.flags|=4)}},iv=function(i,s,l,f){l!==f&&(s.flags|=4)};function va(i,s){if(!Ht)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Sn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function sM(i,s,l){var f=s.pendingProps;switch(rf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(s),null;case 1:return On(s.type)&&Cl(),Sn(s),null;case 3:return f=s.stateNode,eo(),kt(Fn),kt(yn),vf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ll(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,gi!==null&&(qf(gi),gi=null))),Ff(i,s),Sn(s),null;case 5:mf(s);var m=ss(da.current);if(l=s.type,i!==null&&s.stateNode!=null)nv(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Sn(s),null}if(i=ss(Ii.current),Ll(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[Li]=s,f[aa]=_,i=(s.mode&1)!==0,l){case"dialog":Bt("cancel",f),Bt("close",f);break;case"iframe":case"object":case"embed":Bt("load",f);break;case"video":case"audio":for(m=0;m<ra.length;m++)Bt(ra[m],f);break;case"source":Bt("error",f);break;case"img":case"image":case"link":Bt("error",f),Bt("load",f);break;case"details":Bt("toggle",f);break;case"input":Rn(f,_),Bt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Bt("invalid",f);break;case"textarea":$(f,_),Bt("invalid",f)}pt(l,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var I=_[T];T==="children"?typeof I=="string"?f.textContent!==I&&(_.suppressHydrationWarning!==!0&&Tl(f.textContent,I,i),m=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&Tl(f.textContent,I,i),m=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Bt("scroll",f)}switch(l){case"input":Dt(f),$e(f,_,!0);break;case"textarea":Dt(f),ve(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=wl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(l,{is:f.is}):(i=T.createElement(l),l==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,l),i[Li]=s,i[aa]=f,tv(i,s,!1,!1),s.stateNode=i;e:{switch(T=ot(l,f),l){case"dialog":Bt("cancel",i),Bt("close",i),m=f;break;case"iframe":case"object":case"embed":Bt("load",i),m=f;break;case"video":case"audio":for(m=0;m<ra.length;m++)Bt(ra[m],i);m=f;break;case"source":Bt("error",i),m=f;break;case"img":case"image":case"link":Bt("error",i),Bt("load",i),m=f;break;case"details":Bt("toggle",i),m=f;break;case"input":Rn(i,f),m=H(i,f),Bt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=re({},f,{value:void 0}),Bt("invalid",i);break;case"textarea":$(i,f),m=w(i,f),Bt("invalid",i);break;default:m=f}pt(l,m),I=m;for(_ in I)if(I.hasOwnProperty(_)){var k=I[_];_==="style"?nt(i,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Be(i,k)):_==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&dt(i,k):typeof k=="number"&&dt(i,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?k!=null&&_==="onScroll"&&Bt("scroll",i):k!=null&&R(i,_,k,T))}switch(l){case"input":Dt(i),$e(i,f,!1);break;case"textarea":Dt(i),ve(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ae(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?L(i,!!f.multiple,_,!1):f.defaultValue!=null&&L(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=wl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Sn(s),null;case 6:if(i&&s.stateNode!=null)iv(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ss(da.current),ss(Ii.current),Ll(s)){if(f=s.stateNode,l=s.memoizedProps,f[Li]=s,(_=f.nodeValue!==l)&&(i=Yn,i!==null))switch(i.tag){case 3:Tl(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Tl(f.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Li]=s,s.stateNode=f}return Sn(s),null;case 13:if(kt(Gt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ht&&$n!==null&&s.mode&1&&!(s.flags&128))og(),Ks(),s.flags|=98560,_=!1;else if(_=Ll(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Li]=s}else Ks(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Sn(s),_=!1}else gi!==null&&(qf(gi),gi=null),_=!0;if(!_)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||Gt.current&1?on===0&&(on=3):Kf())),s.updateQueue!==null&&(s.flags|=4),Sn(s),null);case 4:return eo(),Ff(i,s),i===null&&sa(s.stateNode.containerInfo),Sn(s),null;case 10:return cf(s.type._context),Sn(s),null;case 17:return On(s.type)&&Cl(),Sn(s),null;case 19:if(kt(Gt),_=s.memoizedState,_===null)return Sn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)va(_,!1);else{if(on!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(T=Bl(i),T!==null){for(s.flags|=128,va(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ft(Gt,Gt.current&1|2),s.child}i=i.sibling}_.tail!==null&&G()>ro&&(s.flags|=128,f=!0,va(_,!1),s.lanes=4194304)}else{if(!f)if(i=Bl(T),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),va(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Ht)return Sn(s),null}else 2*G()-_.renderingStartTime>ro&&l!==1073741824&&(s.flags|=128,f=!0,va(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(l=_.last,l!==null?l.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=G(),s.sibling=null,l=Gt.current,Ft(Gt,f?l&1|2:l&1),s):(Sn(s),null);case 22:case 23:return $f(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?Kn&1073741824&&(Sn(s),s.subtreeFlags&6&&(s.flags|=8192)):Sn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function oM(i,s){switch(rf(s),s.tag){case 1:return On(s.type)&&Cl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return eo(),kt(Fn),kt(yn),vf(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return mf(s),null;case 13:if(kt(Gt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ks()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return kt(Gt),null;case 4:return eo(),null;case 10:return cf(s.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ql=!1,En=!1,aM=typeof WeakSet=="function"?WeakSet:Set,ze=null;function no(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){qt(i,s,f)}else l.current=null}function Of(i,s,l){try{l()}catch(f){qt(i,s,f)}}var rv=!1;function lM(i,s){if(Yc=hl,i=Fm(),zc(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,I=-1,k=-1,Z=0,_e=0,Se=i,ge=null;t:for(;;){for(var Ne;Se!==l||m!==0&&Se.nodeType!==3||(I=T+m),Se!==_||f!==0&&Se.nodeType!==3||(k=T+f),Se.nodeType===3&&(T+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)ge=Se,Se=Ne;for(;;){if(Se===i)break t;if(ge===l&&++Z===m&&(I=T),ge===_&&++_e===f&&(k=T),(Ne=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ne}l=I===-1||k===-1?null:{start:I,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for($c={focusedElem:i,selectionRange:l},hl=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var Ge=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var We=Ge.memoizedProps,Kt=Ge.memoizedState,q=s.stateNode,W=q.getSnapshotBeforeUpdate(s.elementType===s.type?We:vi(s.type,We),Kt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Y=s.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){qt(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return Ge=rv,rv=!1,Ge}function _a(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&Of(s,l,_)}m=m.next}while(m!==f)}}function Yl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Bf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function sv(i){var s=i.alternate;s!==null&&(i.alternate=null,sv(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Li],delete s[aa],delete s[Jc],delete s[WE],delete s[jE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function ov(i){return i.tag===5||i.tag===3||i.tag===4}function av(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ov(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function kf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=wl));else if(f!==4&&(i=i.child,i!==null))for(kf(i,s,l),i=i.sibling;i!==null;)kf(i,s,l),i=i.sibling}function zf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(zf(i,s,l),i=i.sibling;i!==null;)zf(i,s,l),i=i.sibling}var pn=null,_i=!1;function Rr(i,s,l){for(l=l.child;l!==null;)lv(i,s,l),l=l.sibling}function lv(i,s,l){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ye,l)}catch{}switch(l.tag){case 5:En||no(l,s);case 6:var f=pn,m=_i;pn=null,Rr(i,s,l),pn=f,_i=m,pn!==null&&(_i?(i=pn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):pn.removeChild(l.stateNode));break;case 18:pn!==null&&(_i?(i=pn,l=l.stateNode,i.nodeType===8?Qc(i.parentNode,l):i.nodeType===1&&Qc(i,l),Ko(i)):Qc(pn,l.stateNode));break;case 4:f=pn,m=_i,pn=l.stateNode.containerInfo,_i=!0,Rr(i,s,l),pn=f,_i=m;break;case 0:case 11:case 14:case 15:if(!En&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&(_&2||_&4)&&Of(l,s,T),m=m.next}while(m!==f)}Rr(i,s,l);break;case 1:if(!En&&(no(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(I){qt(l,s,I)}Rr(i,s,l);break;case 21:Rr(i,s,l);break;case 22:l.mode&1?(En=(f=En)||l.memoizedState!==null,Rr(i,s,l),En=f):Rr(i,s,l);break;default:Rr(i,s,l)}}function uv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new aM),s.forEach(function(f){var m=vM.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function yi(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var _=i,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,_i=!1;break e;case 3:pn=I.stateNode.containerInfo,_i=!0;break e;case 4:pn=I.stateNode.containerInfo,_i=!0;break e}I=I.return}if(pn===null)throw Error(t(160));lv(_,T,m),pn=null,_i=!1;var k=m.alternate;k!==null&&(k.return=null),m.return=null}catch(Z){qt(m,s,Z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)cv(s,i),s=s.sibling}function cv(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(yi(s,i),Ui(i),f&4){try{_a(3,i,i.return),Yl(3,i)}catch(We){qt(i,i.return,We)}try{_a(5,i,i.return)}catch(We){qt(i,i.return,We)}}break;case 1:yi(s,i),Ui(i),f&512&&l!==null&&no(l,l.return);break;case 5:if(yi(s,i),Ui(i),f&512&&l!==null&&no(l,l.return),i.flags&32){var m=i.stateNode;try{dt(m,"")}catch(We){qt(i,i.return,We)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,I=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&gt(m,_),ot(I,T);var Z=ot(I,_);for(T=0;T<k.length;T+=2){var _e=k[T],Se=k[T+1];_e==="style"?nt(m,Se):_e==="dangerouslySetInnerHTML"?Be(m,Se):_e==="children"?dt(m,Se):R(m,_e,Se,Z)}switch(I){case"input":ht(m,_);break;case"textarea":me(m,_);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ne=_.value;Ne!=null?L(m,!!_.multiple,Ne,!1):ge!==!!_.multiple&&(_.defaultValue!=null?L(m,!!_.multiple,_.defaultValue,!0):L(m,!!_.multiple,_.multiple?[]:"",!1))}m[aa]=_}catch(We){qt(i,i.return,We)}}break;case 6:if(yi(s,i),Ui(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(We){qt(i,i.return,We)}}break;case 3:if(yi(s,i),Ui(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Ko(s.containerInfo)}catch(We){qt(i,i.return,We)}break;case 4:yi(s,i),Ui(i);break;case 13:yi(s,i),Ui(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Gf=G())),f&4&&uv(i);break;case 22:if(_e=l!==null&&l.memoizedState!==null,i.mode&1?(En=(Z=En)||_e,yi(s,i),En=Z):yi(s,i),Ui(i),f&8192){if(Z=i.memoizedState!==null,(i.stateNode.isHidden=Z)&&!_e&&i.mode&1)for(ze=i,_e=i.child;_e!==null;){for(Se=ze=_e;ze!==null;){switch(ge=ze,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:_a(4,ge,ge.return);break;case 1:no(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){f=ge,l=ge.return;try{s=f,Ge.props=s.memoizedProps,Ge.state=s.memoizedState,Ge.componentWillUnmount()}catch(We){qt(f,l,We)}}break;case 5:no(ge,ge.return);break;case 22:if(ge.memoizedState!==null){hv(Se);continue}}Ne!==null?(Ne.return=ge,ze=Ne):hv(Se)}_e=_e.sibling}e:for(_e=null,Se=i;;){if(Se.tag===5){if(_e===null){_e=Se;try{m=Se.stateNode,Z?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=Se.stateNode,k=Se.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Ze("display",T))}catch(We){qt(i,i.return,We)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=Z?"":Se.memoizedProps}catch(We){qt(i,i.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:yi(s,i),Ui(i),f&4&&uv(i);break;case 21:break;default:yi(s,i),Ui(i)}}function Ui(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(ov(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(dt(m,""),f.flags&=-33);var _=av(i);zf(i,_,m);break;case 3:case 4:var T=f.stateNode.containerInfo,I=av(i);kf(i,I,T);break;default:throw Error(t(161))}}catch(k){qt(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function uM(i,s,l){ze=i,fv(i)}function fv(i,s,l){for(var f=(i.mode&1)!==0;ze!==null;){var m=ze,_=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||ql;if(!T){var I=m.alternate,k=I!==null&&I.memoizedState!==null||En;I=ql;var Z=En;if(ql=T,(En=k)&&!Z)for(ze=m;ze!==null;)T=ze,k=T.child,T.tag===22&&T.memoizedState!==null?pv(m):k!==null?(k.return=T,ze=k):pv(m);for(;_!==null;)ze=_,fv(_),_=_.sibling;ze=m,ql=I,En=Z}dv(i)}else m.subtreeFlags&8772&&_!==null?(_.return=m,ze=_):dv(i)}}function dv(i){for(;ze!==null;){var s=ze;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:En||Yl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!En)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:vi(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&hg(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}hg(s,T,l)}break;case 5:var I=s.stateNode;if(l===null&&s.flags&4){l=I;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Z=s.alternate;if(Z!==null){var _e=Z.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&Ko(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||s.flags&512&&Bf(s)}catch(ge){qt(s,s.return,ge)}}if(s===i){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function hv(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function pv(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Yl(4,s)}catch(k){qt(s,l,k)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(k){qt(s,m,k)}}var _=s.return;try{Bf(s)}catch(k){qt(s,_,k)}break;case 5:var T=s.return;try{Bf(s)}catch(k){qt(s,T,k)}}}catch(k){qt(s,s.return,k)}if(s===i){ze=null;break}var I=s.sibling;if(I!==null){I.return=s.return,ze=I;break}ze=s.return}}var cM=Math.ceil,$l=b.ReactCurrentDispatcher,Vf=b.ReactCurrentOwner,oi=b.ReactCurrentBatchConfig,Mt=0,cn=null,tn=null,mn=0,Kn=0,io=Mr(0),on=0,ya=null,as=0,Kl=0,Hf=0,xa=null,kn=null,Gf=0,ro=1/0,Ki=null,Zl=!1,Wf=null,br=null,Ql=!1,Pr=null,Jl=0,Sa=0,jf=null,eu=-1,tu=0;function In(){return Mt&6?G():eu!==-1?eu:eu=G()}function Dr(i){return i.mode&1?Mt&2&&mn!==0?mn&-mn:qE.transition!==null?(tu===0&&(tu=Dn()),tu):(i=vt,i!==0||(i=window.event,i=i===void 0?16:gm(i.type)),i):1}function xi(i,s,l,f){if(50<Sa)throw Sa=0,jf=null,Error(t(185));$t(i,l,f),(!(Mt&2)||i!==cn)&&(i===cn&&(!(Mt&2)&&(Kl|=l),on===4&&Lr(i,mn)),zn(i,f),l===1&&Mt===0&&!(s.mode&1)&&(ro=G()+500,bl&&wr()))}function zn(i,s){var l=i.callbackNode;Qr(i,s);var f=pi(i,i===cn?mn:0);if(f===0)l!==null&&X(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&X(l),s===1)i.tag===0?XE(gv.bind(null,i)):tg(gv.bind(null,i)),HE(function(){!(Mt&6)&&wr()}),l=null;else{switch(lm(f)){case 1:l=be;break;case 4:l=Ue;break;case 16:l=ke;break;case 536870912:l=rt;break;default:l=ke}l=Tv(l,mv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function mv(i,s){if(eu=-1,tu=0,Mt&6)throw Error(t(327));var l=i.callbackNode;if(so()&&i.callbackNode!==l)return null;var f=pi(i,i===cn?mn:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=nu(i,f);else{s=f;var m=Mt;Mt|=2;var _=_v();(cn!==i||mn!==s)&&(Ki=null,ro=G()+500,us(i,s));do try{hM();break}catch(I){vv(i,I)}while(!0);uf(),$l.current=_,Mt=m,tn!==null?s=0:(cn=null,mn=0,s=on)}if(s!==0){if(s===2&&(m=Lt(i),m!==0&&(f=m,s=Xf(i,m))),s===1)throw l=ya,us(i,0),Lr(i,f),zn(i,G()),l;if(s===6)Lr(i,f);else{if(m=i.current.alternate,!(f&30)&&!fM(m)&&(s=nu(i,f),s===2&&(_=Lt(i),_!==0&&(f=_,s=Xf(i,_))),s===1))throw l=ya,us(i,0),Lr(i,f),zn(i,G()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:cs(i,kn,Ki);break;case 3:if(Lr(i,f),(f&130023424)===f&&(s=Gf+500-G(),10<s)){if(pi(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){In(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Zc(cs.bind(null,i,kn,Ki),s);break}cs(i,kn,Ki);break;case 4:if(Lr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var T=31-wt(f);_=1<<T,T=s[T],T>m&&(m=T),f&=~_}if(f=m,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*cM(f/1960))-f,10<f){i.timeoutHandle=Zc(cs.bind(null,i,kn,Ki),f);break}cs(i,kn,Ki);break;case 5:cs(i,kn,Ki);break;default:throw Error(t(329))}}}return zn(i,G()),i.callbackNode===l?mv.bind(null,i):null}function Xf(i,s){var l=xa;return i.current.memoizedState.isDehydrated&&(us(i,s).flags|=256),i=nu(i,s),i!==2&&(s=kn,kn=l,s!==null&&qf(s)),i}function qf(i){kn===null?kn=i:kn.push.apply(kn,i)}function fM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],_=m.getSnapshot;m=m.value;try{if(!mi(_(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Lr(i,s){for(s&=~Hf,s&=~Kl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-wt(s),f=1<<l;i[l]=-1,s&=~f}}function gv(i){if(Mt&6)throw Error(t(327));so();var s=pi(i,0);if(!(s&1))return zn(i,G()),null;var l=nu(i,s);if(i.tag!==0&&l===2){var f=Lt(i);f!==0&&(s=f,l=Xf(i,f))}if(l===1)throw l=ya,us(i,0),Lr(i,s),zn(i,G()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,cs(i,kn,Ki),zn(i,G()),null}function Yf(i,s){var l=Mt;Mt|=1;try{return i(s)}finally{Mt=l,Mt===0&&(ro=G()+500,bl&&wr())}}function ls(i){Pr!==null&&Pr.tag===0&&!(Mt&6)&&so();var s=Mt;Mt|=1;var l=oi.transition,f=vt;try{if(oi.transition=null,vt=1,i)return i()}finally{vt=f,oi.transition=l,Mt=s,!(Mt&6)&&wr()}}function $f(){Kn=io.current,kt(io)}function us(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,VE(l)),tn!==null)for(l=tn.return;l!==null;){var f=l;switch(rf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Cl();break;case 3:eo(),kt(Fn),kt(yn),vf();break;case 5:mf(f);break;case 4:eo();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:cf(f.type._context);break;case 22:case 23:$f()}l=l.return}if(cn=i,tn=i=Ir(i.current,null),mn=Kn=s,on=0,ya=null,Hf=Kl=as=0,kn=xa=null,rs!==null){for(s=0;s<rs.length;s++)if(l=rs[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,_=l.pending;if(_!==null){var T=_.next;_.next=m,f.next=T}l.pending=f}rs=null}return i}function vv(i,s){do{var l=tn;try{if(uf(),kl.current=Gl,zl){for(var f=Wt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}zl=!1}if(os=0,un=sn=Wt=null,ha=!1,pa=0,Vf.current=null,l===null||l.return===null){on=1,ya=s,tn=null;break}e:{var _=i,T=l.return,I=l,k=s;if(s=mn,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var Z=k,_e=I,Se=_e.tag;if(!(_e.mode&1)&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=Hg(T);if(Ne!==null){Ne.flags&=-257,Gg(Ne,T,I,_,s),Ne.mode&1&&Vg(_,Z,s),s=Ne,k=Z;var Ge=s.updateQueue;if(Ge===null){var We=new Set;We.add(k),s.updateQueue=We}else Ge.add(k);break e}else{if(!(s&1)){Vg(_,Z,s),Kf();break e}k=Error(t(426))}}else if(Ht&&I.mode&1){var Kt=Hg(T);if(Kt!==null){!(Kt.flags&65536)&&(Kt.flags|=256),Gg(Kt,T,I,_,s),af(to(k,I));break e}}_=k=to(k,I),on!==4&&(on=2),xa===null?xa=[_]:xa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var q=kg(_,k,s);dg(_,q);break e;case 1:I=k;var W=_.type,Y=_.stateNode;if(!(_.flags&128)&&(typeof W.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(br===null||!br.has(Y)))){_.flags|=65536,s&=-s,_.lanes|=s;var we=zg(_,I,s);dg(_,we);break e}}_=_.return}while(_!==null)}xv(l)}catch(Xe){s=Xe,tn===l&&l!==null&&(tn=l=l.return);continue}break}while(!0)}function _v(){var i=$l.current;return $l.current=Gl,i===null?Gl:i}function Kf(){(on===0||on===3||on===2)&&(on=4),cn===null||!(as&268435455)&&!(Kl&268435455)||Lr(cn,mn)}function nu(i,s){var l=Mt;Mt|=2;var f=_v();(cn!==i||mn!==s)&&(Ki=null,us(i,s));do try{dM();break}catch(m){vv(i,m)}while(!0);if(uf(),Mt=l,$l.current=f,tn!==null)throw Error(t(261));return cn=null,mn=0,on}function dM(){for(;tn!==null;)yv(tn)}function hM(){for(;tn!==null&&!J();)yv(tn)}function yv(i){var s=Mv(i.alternate,i,Kn);i.memoizedProps=i.pendingProps,s===null?xv(i):tn=s,Vf.current=null}function xv(i){var s=i;do{var l=s.alternate;if(i=s.return,s.flags&32768){if(l=oM(l,s),l!==null){l.flags&=32767,tn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{on=6,tn=null;return}}else if(l=sM(l,s,Kn),l!==null){tn=l;return}if(s=s.sibling,s!==null){tn=s;return}tn=s=i}while(s!==null);on===0&&(on=5)}function cs(i,s,l){var f=vt,m=oi.transition;try{oi.transition=null,vt=1,pM(i,s,l,f)}finally{oi.transition=m,vt=f}return null}function pM(i,s,l,f){do so();while(Pr!==null);if(Mt&6)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(_n(i,_),i===cn&&(tn=cn=null,mn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Ql||(Ql=!0,Tv(ke,function(){return so(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=oi.transition,oi.transition=null;var T=vt;vt=1;var I=Mt;Mt|=4,Vf.current=null,lM(i,l),cv(l,i),NE($c),hl=!!Yc,$c=Yc=null,i.current=l,uM(l),ee(),Mt=I,vt=T,oi.transition=_}else i.current=l;if(Ql&&(Ql=!1,Pr=i,Jl=m),_=i.pendingLanes,_===0&&(br=null),Tt(l.stateNode),zn(i,G()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Zl)throw Zl=!1,i=Wf,Wf=null,i;return Jl&1&&i.tag!==0&&so(),_=i.pendingLanes,_&1?i===jf?Sa++:(Sa=0,jf=i):Sa=0,wr(),null}function so(){if(Pr!==null){var i=lm(Jl),s=oi.transition,l=vt;try{if(oi.transition=null,vt=16>i?16:i,Pr===null)var f=!1;else{if(i=Pr,Pr=null,Jl=0,Mt&6)throw Error(t(331));var m=Mt;for(Mt|=4,ze=i.current;ze!==null;){var _=ze,T=_.child;if(ze.flags&16){var I=_.deletions;if(I!==null){for(var k=0;k<I.length;k++){var Z=I[k];for(ze=Z;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:_a(8,_e,_)}var Se=_e.child;if(Se!==null)Se.return=_e,ze=Se;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Ne=_e.return;if(sv(_e),_e===Z){ze=null;break}if(ge!==null){ge.return=Ne,ze=ge;break}ze=Ne}}}var Ge=_.alternate;if(Ge!==null){var We=Ge.child;if(We!==null){Ge.child=null;do{var Kt=We.sibling;We.sibling=null,We=Kt}while(We!==null)}}ze=_}}if(_.subtreeFlags&2064&&T!==null)T.return=_,ze=T;else e:for(;ze!==null;){if(_=ze,_.flags&2048)switch(_.tag){case 0:case 11:case 15:_a(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,ze=q;break e}ze=_.return}}var W=i.current;for(ze=W;ze!==null;){T=ze;var Y=T.child;if(T.subtreeFlags&2064&&Y!==null)Y.return=T,ze=Y;else e:for(T=W;ze!==null;){if(I=ze,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Yl(9,I)}}catch(Xe){qt(I,I.return,Xe)}if(I===T){ze=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,ze=we;break e}ze=I.return}}if(Mt=m,wr(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ye,i)}catch{}f=!0}return f}finally{vt=l,oi.transition=s}}return!1}function Sv(i,s,l){s=to(l,s),s=kg(i,s,1),i=Cr(i,s,1),s=In(),i!==null&&($t(i,1,s),zn(i,s))}function qt(i,s,l){if(i.tag===3)Sv(i,i,l);else for(;s!==null;){if(s.tag===3){Sv(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(br===null||!br.has(f))){i=to(l,i),i=zg(s,i,1),s=Cr(s,i,1),i=In(),s!==null&&($t(s,1,i),zn(s,i));break}}s=s.return}}function mM(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=In(),i.pingedLanes|=i.suspendedLanes&l,cn===i&&(mn&l)===l&&(on===4||on===3&&(mn&130023424)===mn&&500>G()-Gf?us(i,0):Hf|=l),zn(i,s)}function Ev(i,s){s===0&&(i.mode&1?(s=yt,yt<<=1,!(yt&130023424)&&(yt=4194304)):s=1);var l=In();i=qi(i,s),i!==null&&($t(i,s,l),zn(i,l))}function gM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Ev(i,l)}function vM(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Ev(i,l)}var Mv;Mv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Fn.current)Bn=!0;else{if(!(i.lanes&l)&&!(s.flags&128))return Bn=!1,rM(i,s,l);Bn=!!(i.flags&131072)}else Bn=!1,Ht&&s.flags&1048576&&ng(s,Dl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Xl(i,s),i=s.pendingProps;var m=qs(s,yn.current);Js(s,l),m=xf(null,s,f,i,m,l);var _=Sf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,On(f)?(_=!0,Rl(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,hf(s),m.updater=Wl,s.stateNode=m,m._reactInternals=s,Cf(s,f,i,l),s=Df(null,s,f,!0,_,l)):(s.tag=0,Ht&&_&&nf(s),Ln(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Xl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=yM(f),i=vi(f,i),m){case 0:s=Pf(null,s,f,i,l);break e;case 1:s=$g(null,s,f,i,l);break e;case 11:s=Wg(null,s,f,i,l);break e;case 14:s=jg(null,s,f,vi(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),Pf(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),$g(i,s,f,m,l);case 3:e:{if(Kg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,fg(i,s),Ol(s,f,null,l);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=to(Error(t(423)),s),s=Zg(i,s,f,l,m);break e}else if(f!==m){m=to(Error(t(424)),s),s=Zg(i,s,f,l,m);break e}else for($n=Er(s.stateNode.containerInfo.firstChild),Yn=s,Ht=!0,gi=null,l=ug(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ks(),f===m){s=$i(i,s,l);break e}Ln(i,s,f,l)}s=s.child}return s;case 5:return pg(s),i===null&&of(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,T=m.children,Kc(f,m)?T=null:_!==null&&Kc(f,_)&&(s.flags|=32),Yg(i,s),Ln(i,s,T,l),s.child;case 6:return i===null&&of(s),null;case 13:return Qg(i,s,l);case 4:return pf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Zs(s,null,f,l):Ln(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),Wg(i,s,f,m,l);case 7:return Ln(i,s,s.pendingProps,l),s.child;case 8:return Ln(i,s,s.pendingProps.children,l),s.child;case 12:return Ln(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,T=m.value,Ft(Nl,f._currentValue),f._currentValue=T,_!==null)if(mi(_.value,T)){if(_.children===m.children&&!Fn.current){s=$i(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){T=_.child;for(var k=I.firstContext;k!==null;){if(k.context===f){if(_.tag===1){k=Yi(-1,l&-l),k.tag=2;var Z=_.updateQueue;if(Z!==null){Z=Z.shared;var _e=Z.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),Z.pending=k}}_.lanes|=l,k=_.alternate,k!==null&&(k.lanes|=l),ff(_.return,l,s),I.lanes|=l;break}k=k.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),ff(T,l,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Ln(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Js(s,l),m=ri(m),f=f(m),s.flags|=1,Ln(i,s,f,l),s.child;case 14:return f=s.type,m=vi(f,s.pendingProps),m=vi(f.type,m),jg(i,s,f,m,l);case 15:return Xg(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),Xl(i,s),s.tag=1,On(f)?(i=!0,Rl(s)):i=!1,Js(s,l),Og(s,f,m),Cf(s,f,m,l),Df(null,s,f,!0,i,l);case 19:return ev(i,s,l);case 22:return qg(i,s,l)}throw Error(t(156,s.tag))};function Tv(i,s){return A(i,s)}function _M(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,l,f){return new _M(i,s,l,f)}function Zf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function yM(i){if(typeof i=="function")return Zf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ae)return 11;if(i===pe)return 14}return 2}function Ir(i,s){var l=i.alternate;return l===null?(l=ai(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function iu(i,s,l,f,m,_){var T=2;if(f=i,typeof i=="function")Zf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case U:return fs(l.children,m,_,s);case B:T=8,m|=8;break;case D:return i=ai(12,l,s,m|2),i.elementType=D,i.lanes=_,i;case Q:return i=ai(13,l,s,m),i.elementType=Q,i.lanes=_,i;case ce:return i=ai(19,l,s,m),i.elementType=ce,i.lanes=_,i;case ie:return ru(l,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:T=10;break e;case V:T=9;break e;case ae:T=11;break e;case pe:T=14;break e;case ue:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(T,l,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function fs(i,s,l,f){return i=ai(7,i,f,s),i.lanes=l,i}function ru(i,s,l,f){return i=ai(22,i,f,s),i.elementType=ie,i.lanes=l,i.stateNode={isHidden:!1},i}function Qf(i,s,l){return i=ai(6,i,null,s),i.lanes=l,i}function Jf(i,s,l){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function xM(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ed(i,s,l,f,m,_,T,I,k){return i=new xM(i,s,l,I,k),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(_),i}function SM(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function wv(i){if(!i)return Tr;i=i._reactInternals;e:{if(Di(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(On(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(On(l))return Jm(i,l,s)}return s}function Av(i,s,l,f,m,_,T,I,k){return i=ed(l,f,!0,i,m,_,T,I,k),i.context=wv(null),l=i.current,f=In(),m=Dr(l),_=Yi(f,m),_.callback=s??null,Cr(l,_,m),i.current.lanes=m,$t(i,m,f),zn(i,f),i}function su(i,s,l,f){var m=s.current,_=In(),T=Dr(m);return l=wv(l),s.context===null?s.context=l:s.pendingContext=l,s=Yi(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Cr(m,s,T),i!==null&&(xi(i,m,T,_),Fl(i,m,T)),T}function ou(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Cv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function td(i,s){Cv(i,s),(i=i.alternate)&&Cv(i,s)}function EM(){return null}var Rv=typeof reportError=="function"?reportError:function(i){console.error(i)};function nd(i){this._internalRoot=i}au.prototype.render=nd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));su(i,s,null,null)},au.prototype.unmount=nd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ls(function(){su(null,i,null,null)}),s[Gi]=null}};function au(i){this._internalRoot=i}au.prototype.unstable_scheduleHydration=function(i){if(i){var s=fm();i={blockedOn:null,target:i,priority:s};for(var l=0;l<yr.length&&s!==0&&s<yr[l].priority;l++);yr.splice(l,0,i),l===0&&pm(i)}};function id(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function lu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function bv(){}function MM(i,s,l,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var Z=ou(T);_.call(Z)}}var T=Av(s,f,i,0,null,!1,!1,"",bv);return i._reactRootContainer=T,i[Gi]=T.current,sa(i.nodeType===8?i.parentNode:i),ls(),T}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var I=f;f=function(){var Z=ou(k);I.call(Z)}}var k=ed(i,0,!1,null,null,!1,!1,"",bv);return i._reactRootContainer=k,i[Gi]=k.current,sa(i.nodeType===8?i.parentNode:i),ls(function(){su(s,k,l,f)}),k}function uu(i,s,l,f,m){var _=l._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var I=m;m=function(){var k=ou(T);I.call(k)}}su(s,T,i,m)}else T=MM(l,s,i,m,f);return ou(T)}um=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=hn(s.pendingLanes);l!==0&&(Jr(s,l|1),zn(s,G()),!(Mt&6)&&(ro=G()+500,wr()))}break;case 13:ls(function(){var f=qi(i,1);if(f!==null){var m=In();xi(f,i,1,m)}}),td(i,1)}},Cc=function(i){if(i.tag===13){var s=qi(i,134217728);if(s!==null){var l=In();xi(s,i,134217728,l)}td(i,134217728)}},cm=function(i){if(i.tag===13){var s=Dr(i),l=qi(i,s);if(l!==null){var f=In();xi(l,i,s,f)}td(i,s)}},fm=function(){return vt},dm=function(i,s){var l=vt;try{return vt=i,s()}finally{vt=l}},Re=function(i,s,l){switch(s){case"input":if(ht(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Al(f);if(!m)throw Error(t(90));_t(f),ht(f,m)}}}break;case"textarea":me(i,l);break;case"select":s=l.value,s!=null&&L(i,!!l.multiple,s,!1)}},Ot=Yf,rn=ls;var TM={usingClientEntryPoint:!1,Events:[la,js,Al,De,at,Yf]},Ea={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wM={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ul(i),i===null?null:i.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Ye=cu.inject(wM),lt=cu}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM,Vn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(s))throw Error(t(200));return SM(i,s,null,l)},Vn.createRoot=function(i,s){if(!id(i))throw Error(t(299));var l=!1,f="",m=Rv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=ed(i,1,!1,null,null,l,!1,f,m),i[Gi]=s.current,sa(i.nodeType===8?i.parentNode:i),new nd(s)},Vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ul(s),i=i===null?null:i.stateNode,i},Vn.flushSync=function(i){return ls(i)},Vn.hydrate=function(i,s,l){if(!lu(s))throw Error(t(200));return uu(null,i,s,!0,l)},Vn.hydrateRoot=function(i,s,l){if(!id(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,_="",T=Rv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=Av(s,null,i,1,l??null,m,!1,_,T),i[Gi]=s.current,sa(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new au(s)},Vn.render=function(i,s,l){if(!lu(s))throw Error(t(200));return uu(null,i,s,!1,l)},Vn.unmountComponentAtNode=function(i){if(!lu(i))throw Error(t(40));return i._reactRootContainer?(ls(function(){uu(null,null,i,!1,function(){i._reactRootContainer=null,i[Gi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Yf,Vn.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!lu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return uu(i,s,l,!1,f)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Ov;function IM(){if(Ov)return od.exports;Ov=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),od.exports=LM(),od.exports}var Bv;function NM(){if(Bv)return fu;Bv=1;var n=IM();return fu.createRoot=n.createRoot,fu.hydrateRoot=n.hydrateRoot,fu}var UM=NM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vy=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Ie.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...c},d)=>Ie.createElement("svg",{ref:d,...OM,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:vy("lucide",o),...c},[...u.map(([h,p])=>Ie.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=(n,e)=>{const t=Ie.forwardRef(({className:r,...o},a)=>Ie.createElement(BM,{ref:a,iconNode:e,className:vy(`lucide-${FM(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=_y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=_y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),VM=()=>xe.jsxs("div",{className:"sticky top-0 z-50 flex h-20 items-center px-10 md:px-20 bg-black",children:[xe.jsx("a",{className:"md:text-5xl text-3xl font-bold uppercase hover:opacity-70 transition-all duration-300",href:"/",children:"Vizzano"}),xe.jsxs("div",{className:"absolute right-10 flex gap-2",children:[xe.jsx("a",{href:"https://t.me/Vizzano_HR_1",children:xe.jsx("img",{src:"/tg.svg",className:"w-6 h-6 hover:opacity-70 hover:scale-110 transition-all duration-300"})}),xe.jsx("a",{href:"https://www.instagram.com/vizzano.uz/",target:"_blank",children:xe.jsx("img",{src:"/insta.svg",className:"w-6 h-6 hover:opacity-70 hover:scale-110 transition-all duration-300"})}),xe.jsx("a",{href:"tel: +998 99 512 33 66",children:xe.jsx(zM,{className:"w-6 h-6 hover:opacity-70 hover:scale-110 transition-all duration-300",strokeWidth:1})})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="171",HM=0,kv=1,GM=2,yy=1,WM=2,nr=3,jr=0,Gn=1,ir=2,Gr=0,Ro=1,zv=2,Vv=3,Hv=4,jM=5,Ms=100,XM=101,qM=102,YM=103,$M=104,KM=200,ZM=201,QM=202,JM=203,nh=204,ih=205,eT=206,tT=207,nT=208,iT=209,rT=210,sT=211,oT=212,aT=213,lT=214,rh=0,sh=1,oh=2,Do=3,ah=4,lh=5,uh=6,ch=7,xy=0,uT=1,cT=2,Wr=0,fT=1,dT=2,hT=3,pT=4,mT=5,gT=6,vT=7,Sy=300,Lo=301,Io=302,fh=303,dh=304,cc=306,hh=1e3,ws=1001,ph=1002,Ri=1003,_T=1004,du=1005,Bi=1006,ud=1007,As=1008,cr=1009,Ey=1010,My=1011,ka=1012,mp=1013,Ls=1014,rr=1015,Xa=1016,gp=1017,vp=1018,No=1020,Ty=35902,wy=1021,Ay=1022,Ci=1023,Cy=1024,Ry=1025,bo=1026,Uo=1027,by=1028,_p=1029,Py=1030,yp=1031,xp=1033,zu=33776,Vu=33777,Hu=33778,Gu=33779,mh=35840,gh=35841,vh=35842,_h=35843,yh=36196,xh=37492,Sh=37496,Eh=37808,Mh=37809,Th=37810,wh=37811,Ah=37812,Ch=37813,Rh=37814,bh=37815,Ph=37816,Dh=37817,Lh=37818,Ih=37819,Nh=37820,Uh=37821,Wu=36492,Fh=36494,Oh=36495,Dy=36283,Bh=36284,kh=36285,zh=36286,yT=3200,xT=3201,ST=0,ET=1,Hr="",fi="srgb",Fo="srgb-linear",Qu="linear",It="srgb",oo=7680,Gv=519,MT=512,TT=513,wT=514,Ly=515,AT=516,CT=517,RT=518,bT=519,Wv=35044,jv="300 es",sr=2e3,Ju=2001;class Vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Vh=180/Math.PI;function qa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function PT(n,e){return(n%e+e)%e}function fd(n,e,t){return(1-t)*n+t*e}function Ta(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,t=0){Nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*r-u*o+e.x,this.y=a*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,r,o,a,u,c,d,h){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,c,d,h)}set(e,t,r,o,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],p=r[4],g=r[7],v=r[2],S=r[5],E=r[8],M=o[0],x=o[3],y=o[6],P=o[1],R=o[4],b=o[7],N=o[2],F=o[5],U=o[8];return a[0]=u*M+c*P+d*N,a[3]=u*x+c*R+d*F,a[6]=u*y+c*b+d*U,a[1]=h*M+p*P+g*N,a[4]=h*x+p*R+g*F,a[7]=h*y+p*b+g*U,a[2]=v*M+S*P+E*N,a[5]=v*x+S*R+E*F,a[8]=v*y+S*b+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-r*a*p+r*c*d+o*a*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,v=c*d-p*a,S=h*a-u*d,E=t*g+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*h-p*r)*M,e[2]=(c*r-o*u)*M,e[3]=v*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-c*t)*M,e[6]=S*M,e[7]=(r*d-h*t)*M,e[8]=(u*t-r*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new ct;function Iy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DT(){const n=ec("canvas");return n.style.display="block",n}const Xv={};function So(n){n in Xv||(Xv[n]=!0,console.warn(n))}function LT(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}function IT(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NT(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qv=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UT(){const n={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===It&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hr?Qu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Fo]:{primaries:e,whitePoint:r,transfer:Qu,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const Ct=UT();function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ao;class FT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ao===void 0&&(ao=ec("canvas")),ao.width=e.width,ao.height=e.height;const r=ao.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ec("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ar(a[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OT=0;class Ny{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(hd(o[u].image)):a.push(hd(o[u]))}else a=hd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function hd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?FT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BT=0;class Wn extends Vo{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,r=ws,o=ws,a=Bi,u=As,c=Ci,d=cr,h=Wn.DEFAULT_ANISOTROPY,p=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=qa(),this.name="",this.source=new Ny(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case ws:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case ws:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Sy;Wn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,r=0,o=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],S=d[5],E=d[9],M=d[2],x=d[6],y=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,b=(S+1)/2,N=(y+1)/2,F=(p+v)/4,U=(g+M)/4,B=(E+x)/4;return R>b&&R>N?R<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(R),o=F/r,a=U/r):b>N?b<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),r=F/o,a=B/o):N<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),r=U/a,o=B/a),this.set(r,o,a,t),this}let P=Math.sqrt((x-E)*(x-E)+(g-M)*(g-M)+(v-p)*(v-p));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(g-M)/P,this.z=(v-p)/P,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kT extends Vo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new Wn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ny(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends kT{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Uy extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zT extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,u,c){let d=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];const v=a[u+0],S=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==v||h!==S||p!==E){let x=1-c;const y=d*v+h*S+p*E+g*M,P=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const N=Math.sqrt(R),F=Math.atan2(N,y*P);x=Math.sin(x*F)/N,c=Math.sin(c*F)/N}const b=c*P;if(d=d*x+v*b,h=h*x+S*b,p=p*x+E*b,g=g*x+M*b,x===1-c){const N=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=N,h*=N,p*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,a,u){const c=r[o],d=r[o+1],h=r[o+2],p=r[o+3],g=a[u],v=a[u+1],S=a[u+2],E=a[u+3];return e[t]=c*E+p*g+d*S-h*v,e[t+1]=d*E+p*v+h*g-c*S,e[t+2]=h*E+p*S+c*v-d*g,e[t+3]=p*E-c*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),p=c(o/2),g=c(a/2),v=d(r/2),S=d(o/2),E=d(a/2);switch(u){case"XYZ":this._x=v*p*g+h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g-v*S*E;break;case"YXZ":this._x=v*p*g+h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g+v*S*E;break;case"ZXY":this._x=v*p*g-h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g-v*S*E;break;case"ZYX":this._x=v*p*g-h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g+v*S*E;break;case"YZX":this._x=v*p*g+h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g-v*S*E;break;case"XZY":this._x=v*p*g-h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=r+c+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(u-o)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(a+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(a-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(u-o)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+u*c+o*h-a*d,this._y=o*p+u*d+a*c-r*h,this._z=a*p+u*h+r*d-o*c,this._w=u*p-r*c-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($v.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($v.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),p=2*(c*t-a*o),g=2*(a*r-u*t);return this.x=t+d*h+u*g-c*p,this.y=r+d*p+c*h-a*g,this.z=o+d*g+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-a*c,this.y=a*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new ne,$v=new Ya;class $a{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(a,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hu.copy(r.boundingBox)),hu.applyMatrix4(e.matrixWorld),this.union(hu)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),pu.subVectors(this.max,wa),lo.subVectors(e.a,wa),uo.subVectors(e.b,wa),co.subVectors(e.c,wa),Ur.subVectors(uo,lo),Fr.subVectors(co,uo),ds.subVectors(lo,co);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-ds.z,ds.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,ds.z,0,-ds.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-ds.y,ds.x,0];return!md(t,lo,uo,co,pu)||(t=[1,0,0,0,1,0,0,0,1],!md(t,lo,uo,co,pu))?!1:(mu.crossVectors(Ur,Fr),t=[mu.x,mu.y,mu.z],md(t,lo,uo,co,pu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Si=new ne,hu=new $a,lo=new ne,uo=new ne,co=new ne,Ur=new ne,Fr=new ne,ds=new ne,wa=new ne,pu=new ne,mu=new ne,hs=new ne;function md(n,e,t,r,o){for(let a=0,u=n.length-3;a<=u;a+=3){hs.fromArray(n,a);const c=o.x*Math.abs(hs.x)+o.y*Math.abs(hs.y)+o.z*Math.abs(hs.z),d=e.dot(hs),h=t.dot(hs),p=r.dot(hs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const VT=new $a,Aa=new ne,gd=new ne;class fc{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):VT.setFromPoints(e).getCenter(r);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Aa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(gd)),this.expandByPoint(Aa.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new ne,vd=new ne,gu=new ne,Or=new ne,_d=new ne,vu=new ne,yd=new ne;class Fy{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){vd.copy(e).add(t).multiplyScalar(.5),gu.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(vd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(gu),c=Or.dot(this.direction),d=-Or.dot(gu),h=Or.lengthSq(),p=Math.abs(1-u*u);let g,v,S,E;if(p>0)if(g=u*d-c,v=u*c-d,E=a*p,g>=0)if(v>=-E)if(v<=E){const M=1/p;g*=M,v*=M,S=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=a,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v=-a,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-u*a+c)),v=g>0?-a:Math.min(Math.max(-a,-d),a),S=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-a,-d),a),S=v*(v+2*d)+h):(g=Math.max(0,-(u*a+c)),v=g>0?a:Math.min(Math.max(-a,-d),a),S=-g*g+v*(v+2*d)+h);else v=u>0?-a:a,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(vd).addScaledVector(gu,v),S}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),r>u||a>o||((a>r||isNaN(r))&&(r=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,r,o,a){_d.subVectors(t,e),vu.subVectors(r,e),yd.crossVectors(_d,vu);let u=this.direction.dot(yd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Or.subVectors(this.origin,e);const d=c*this.direction.dot(vu.crossVectors(Or,vu));if(d<0)return null;const h=c*this.direction.dot(_d.cross(Or));if(h<0||d+h>u)return null;const p=-c*Or.dot(yd);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,r,o,a,u,c,d,h,p,g,v,S,E,M,x){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,c,d,h,p,g,v,S,E,M,x)}set(e,t,r,o,a,u,c,d,h,p,g,v,S,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=a,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=v,y[3]=S,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/fo.setFromMatrixColumn(e,0).length(),a=1/fo.setFromMatrixColumn(e,1).length(),u=1/fo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=v-M*h,t[9]=-c*d,t[2]=M-v*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*p,S=d*g,E=h*p,M=h*g;t[0]=v+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=M+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*p,S=d*g,E=h*p,M=h*g;t[0]=v-M*c,t[4]=-u*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=M-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=E*h-S,t[8]=v*h+M,t[1]=d*g,t[5]=M*h+v,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-v*g,t[8]=E*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+M,t[5]=u*p,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*p,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HT,e,GT)}lookAt(e,t,r){const o=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Br.crossVectors(r,Zn),Br.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Br.crossVectors(r,Zn)),Br.normalize(),_u.crossVectors(Zn,Br),o[0]=Br.x,o[4]=_u.x,o[8]=Zn.x,o[1]=Br.y,o[5]=_u.y,o[9]=Zn.y,o[2]=Br.z,o[6]=_u.z,o[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],p=r[1],g=r[5],v=r[9],S=r[13],E=r[2],M=r[6],x=r[10],y=r[14],P=r[3],R=r[7],b=r[11],N=r[15],F=o[0],U=o[4],B=o[8],D=o[12],C=o[1],V=o[5],ae=o[9],Q=o[13],ce=o[2],pe=o[6],ue=o[10],ie=o[14],z=o[3],le=o[7],re=o[11],O=o[15];return a[0]=u*F+c*C+d*ce+h*z,a[4]=u*U+c*V+d*pe+h*le,a[8]=u*B+c*ae+d*ue+h*re,a[12]=u*D+c*Q+d*ie+h*O,a[1]=p*F+g*C+v*ce+S*z,a[5]=p*U+g*V+v*pe+S*le,a[9]=p*B+g*ae+v*ue+S*re,a[13]=p*D+g*Q+v*ie+S*O,a[2]=E*F+M*C+x*ce+y*z,a[6]=E*U+M*V+x*pe+y*le,a[10]=E*B+M*ae+x*ue+y*re,a[14]=E*D+M*Q+x*ie+y*O,a[3]=P*F+R*C+b*ce+N*z,a[7]=P*U+R*V+b*pe+N*le,a[11]=P*B+R*ae+b*ue+N*re,a[15]=P*D+R*Q+b*ie+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],S=e[14],E=e[3],M=e[7],x=e[11],y=e[15];return E*(+a*d*g-o*h*g-a*c*v+r*h*v+o*c*S-r*d*S)+M*(+t*d*S-t*h*v+a*u*v-o*u*S+o*h*p-a*d*p)+x*(+t*h*g-t*c*S-a*u*g+r*u*S+a*c*p-r*h*p)+y*(-o*c*p-t*d*g+t*c*v+o*u*g-r*u*v+r*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],S=e[11],E=e[12],M=e[13],x=e[14],y=e[15],P=g*x*h-M*v*h+M*d*S-c*x*S-g*d*y+c*v*y,R=E*v*h-p*x*h-E*d*S+u*x*S+p*d*y-u*v*y,b=p*M*h-E*g*h+E*c*S-u*M*S-p*c*y+u*g*y,N=E*g*d-p*M*d-E*c*v+u*M*v+p*c*x-u*g*x,F=t*P+r*R+o*b+a*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=P*U,e[1]=(M*v*a-g*x*a-M*o*S+r*x*S+g*o*y-r*v*y)*U,e[2]=(c*x*a-M*d*a+M*o*h-r*x*h-c*o*y+r*d*y)*U,e[3]=(g*d*a-c*v*a-g*o*h+r*v*h+c*o*S-r*d*S)*U,e[4]=R*U,e[5]=(p*x*a-E*v*a+E*o*S-t*x*S-p*o*y+t*v*y)*U,e[6]=(E*d*a-u*x*a-E*o*h+t*x*h+u*o*y-t*d*y)*U,e[7]=(u*v*a-p*d*a+p*o*h-t*v*h-u*o*S+t*d*S)*U,e[8]=b*U,e[9]=(E*g*a-p*M*a-E*r*S+t*M*S+p*r*y-t*g*y)*U,e[10]=(u*M*a-E*c*a+E*r*h-t*M*h-u*r*y+t*c*y)*U,e[11]=(p*c*a-u*g*a-p*r*h+t*g*h+u*r*S-t*c*S)*U,e[12]=N*U,e[13]=(p*M*o-E*g*o+E*r*v-t*M*v-p*r*x+t*g*x)*U,e[14]=(E*c*o-u*M*o-E*r*d+t*M*d+u*r*x-t*c*x)*U,e[15]=(u*g*o-p*c*o+p*r*d-t*g*d-u*r*v+t*c*v)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+r,p*d-o*u,0,h*d-o*c,p*d+o*u,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,u){return this.set(1,r,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,g=c+c,v=a*h,S=a*p,E=a*g,M=u*p,x=u*g,y=c*g,P=d*h,R=d*p,b=d*g,N=r.x,F=r.y,U=r.z;return o[0]=(1-(M+y))*N,o[1]=(S+b)*N,o[2]=(E-R)*N,o[3]=0,o[4]=(S-b)*F,o[5]=(1-(v+y))*F,o[6]=(x+P)*F,o[7]=0,o[8]=(E+R)*U,o[9]=(x-P)*U,o[10]=(1-(v+M))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let a=fo.set(o[0],o[1],o[2]).length();const u=fo.set(o[4],o[5],o[6]).length(),c=fo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const h=1/a,p=1/u,g=1/c;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=p,Ei.elements[5]*=p,Ei.elements[6]*=p,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),r.x=a,r.y=u,r.z=c,this}makePerspective(e,t,r,o,a,u,c=sr){const d=this.elements,h=2*a/(t-e),p=2*a/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let S,E;if(c===sr)S=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Ju)S=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,a,u,c=sr){const d=this.elements,h=1/(t-e),p=1/(r-o),g=1/(u-a),v=(t+e)*h,S=(r+o)*p;let E,M;if(c===sr)E=(u+a)*g,M=-2*g;else if(c===Ju)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const fo=new ne,Ei=new Jt,HT=new ne(0,0,0),GT=new ne(1,1,1),Br=new ne,_u=new ne,Zn=new ne,Kv=new Jt,Zv=new Ya;class fr{constructor(e=0,t=0,r=0,o=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zv.setFromEuler(this),this.setFromQuaternion(Zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Oy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WT=0;const Qv=new ne,ho=new Ya,Ji=new Jt,yu=new ne,Ca=new ne,jT=new ne,XT=new Ya,Jv=new ne(1,0,0),e0=new ne(0,1,0),t0=new ne(0,0,1),n0={type:"added"},qT={type:"removed"},po={type:"childadded",child:null},xd={type:"childremoved",child:null};class jn extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new ne,t=new fr,r=new Ya,o=new ne(1,1,1);function a(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ct}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(Jv,e)}rotateY(e){return this.rotateOnAxis(e0,e)}rotateZ(e){return this.rotateOnAxis(t0,e)}translateOnAxis(e,t){return Qv.copy(e).applyQuaternion(this.quaternion),this.position.add(Qv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jv,e)}translateY(e){return this.translateOnAxis(e0,e)}translateZ(e){return this.translateOnAxis(t0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yu.copy(e):yu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ca,yu,this.up):Ji.lookAt(yu,Ca,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),ho.setFromRotationMatrix(Ji),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n0),po.child=e,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qT),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n0),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,jT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,XT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}jn.DEFAULT_UP=new ne(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new ne,er=new ne,Sd=new ne,tr=new ne,mo=new ne,go=new ne,i0=new ne,Ed=new ne,Md=new ne,Td=new ne,wd=new Qt,Ad=new Qt,Cd=new Qt;class Ai{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Mi.subVectors(o,t),er.subVectors(r,t),Sd.subVectors(e,t);const u=Mi.dot(Mi),c=Mi.dot(er),d=Mi.dot(Sd),h=er.dot(er),p=er.dot(Sd),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const v=1/g,S=(h*d-c*p)*v,E=(u*p-c*d)*v;return a.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,a,u,c,d){return this.getBarycoord(e,t,r,o,tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,tr.x),d.addScaledVector(u,tr.y),d.addScaledVector(c,tr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,u){return wd.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),wd.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,r),Cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(wd,a.x),u.addScaledVector(Ad,a.y),u.addScaledVector(Cd,a.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),er.subVectors(e,t),Mi.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Mi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Ai.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let u,c;mo.subVectors(o,r),go.subVectors(a,r),Ed.subVectors(e,r);const d=mo.dot(Ed),h=go.dot(Ed);if(d<=0&&h<=0)return t.copy(r);Md.subVectors(e,o);const p=mo.dot(Md),g=go.dot(Md);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(r).addScaledVector(mo,u);Td.subVectors(e,a);const S=mo.dot(Td),E=go.dot(Td);if(E>=0&&S<=E)return t.copy(a);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(r).addScaledVector(go,c);const x=p*E-S*g;if(x<=0&&g-p>=0&&S-E>=0)return i0.subVectors(a,o),c=(g-p)/(g-p+(S-E)),t.copy(o).addScaledVector(i0,c);const y=1/(x+M+v);return u=M*y,c=v*y,t.copy(r).addScaledVector(mo,u).addScaledVector(go,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const By={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Rd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=PT(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,u=2*r-a;this.r=Rd(u,a,e+1/3),this.g=Rd(u,a,e),this.b=Rd(u,a,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=fi){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=By[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ct.fromWorkingColorSpace(Tn.copy(this),e),Math.round(xt(Tn.r*255,0,255))*65536+Math.round(xt(Tn.g*255,0,255))*256+Math.round(xt(Tn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,a=Tn.b,u=Math.max(r,o,a),c=Math.min(r,o,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-r)/g+2;break;case a:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=fi){Ct.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(xu);const r=fd(kr.h,xu.h,t),o=fd(kr.s,xu.s,t),a=fd(kr.l,xu.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Pt;Pt.NAMES=By;let YT=0;class Ka extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ro,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nh&&(r.blendSrc=this.blendSrc),this.blendDst!==ih&&(r.blendDst=this.blendDst),this.blendEquation!==Ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(r.textures=a),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ky extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new ne,Su=new Nt;class bi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wv,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Su.fromBufferAttribute(this,t),Su.applyMatrix3(e),this.setXY(t,Su.x,Su.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ta(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wv&&(e.usage=this.usage),e}}class zy extends bi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Vy extends bi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class bs extends bi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let $T=0;const li=new Jt,bd=new jn,vo=new ne,Qn=new $a,Ra=new $a,dn=new ne;class hr extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iy(e)?Vy:zy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ct().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new bs(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qn.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Ra.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Qn.min,Ra.min),Qn.expandByPoint(dn),dn.addVectors(Qn.max,Ra.max),Qn.expandByPoint(dn)):(Qn.expandByPoint(Ra.min),Qn.expandByPoint(Ra.max))}Qn.getCenter(r);let o=0;for(let a=0,u=e.count;a<u;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(dn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)dn.fromBufferAttribute(c,h),d&&(vo.fromBufferAttribute(e,h),dn.add(vo)),o=Math.max(o,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let B=0;B<r.count;B++)c[B]=new ne,d[B]=new ne;const h=new ne,p=new ne,g=new ne,v=new Nt,S=new Nt,E=new Nt,M=new ne,x=new ne;function y(B,D,C){h.fromBufferAttribute(r,B),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),v.fromBufferAttribute(a,B),S.fromBufferAttribute(a,D),E.fromBufferAttribute(a,C),p.sub(h),g.sub(h),S.sub(v),E.sub(v);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(V),x.copy(g).multiplyScalar(S.x).addScaledVector(p,-E.x).multiplyScalar(V),c[B].add(M),c[D].add(M),c[C].add(M),d[B].add(x),d[D].add(x),d[C].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let B=0,D=P.length;B<D;++B){const C=P[B],V=C.start,ae=C.count;for(let Q=V,ce=V+ae;Q<ce;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const R=new ne,b=new ne,N=new ne,F=new ne;function U(B){N.fromBufferAttribute(o,B),F.copy(N);const D=c[B];R.copy(D),R.sub(N.multiplyScalar(N.dot(D))).normalize(),b.crossVectors(F,D);const V=b.dot(d[B])<0?-1:1;u.setXYZW(B,R.x,R.y,R.z,V)}for(let B=0,D=P.length;B<D;++B){const C=P[B],V=C.start,ae=C.count;for(let Q=V,ce=V+ae;Q<ce;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ne,a=new ne,u=new ne,c=new ne,d=new ne,h=new ne,p=new ne,g=new ne;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),c.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,x),c.add(p),d.add(p),h.add(p),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,v=new h.constructor(d.length*p);let S=0,E=0;for(let M=0,x=d.length;M<x;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*p;for(let y=0;y<p;y++)v[E++]=h[S++]}return new bi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,g=h.length;p<g;p++){const v=h[p],S=e(v,r);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let v=0,S=g.length;v<S;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new Jt,ps=new Fy,Eu=new fc,s0=new ne,Mu=new ne,Tu=new ne,wu=new ne,Pd=new ne,Au=new ne,o0=new ne,Cu=new ne;class or extends jn{constructor(e=new hr,t=new ky){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Au.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],g=a[d];p!==0&&(Pd.fromBufferAttribute(g,e),u?Au.addScaledVector(Pd,p):Au.addScaledVector(Pd.sub(t),p))}t.add(Au)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(a),ps.copy(e.ray).recast(e.near),!(Eu.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Eu,s0)===null||ps.origin.distanceToSquared(s0)>(e.far-e.near)**2))&&(r0.copy(a).invert(),ps.copy(e.ray).applyMatrix4(r0),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,r){let o;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],P=Math.max(x.start,S.start),R=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let b=P,N=R;b<N;b+=3){const F=c.getX(b),U=c.getX(b+1),B=c.getX(b+2);o=Ru(this,y,e,r,h,p,g,F,U,B),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const P=c.getX(x),R=c.getX(x+1),b=c.getX(x+2);o=Ru(this,u,e,r,h,p,g,P,R,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],P=Math.max(x.start,S.start),R=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let b=P,N=R;b<N;b+=3){const F=b,U=b+1,B=b+2;o=Ru(this,y,e,r,h,p,g,F,U,B),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const P=x,R=x+1,b=x+2;o=Ru(this,u,e,r,h,p,g,P,R,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function KT(n,e,t,r,o,a,u,c){let d;if(e.side===Gn?d=r.intersectTriangle(u,a,o,!0,c):d=r.intersectTriangle(o,a,u,e.side===jr,c),d===null)return null;Cu.copy(c),Cu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Cu);return h<t.near||h>t.far?null:{distance:h,point:Cu.clone(),object:n}}function Ru(n,e,t,r,o,a,u,c,d,h){n.getVertexPosition(c,Mu),n.getVertexPosition(d,Tu),n.getVertexPosition(h,wu);const p=KT(n,e,t,r,Mu,Tu,wu,o0);if(p){const g=new ne;Ai.getBarycoord(o0,Mu,Tu,wu,g),o&&(p.uv=Ai.getInterpolatedAttribute(o,c,d,h,g,new Nt)),a&&(p.uv1=Ai.getInterpolatedAttribute(a,c,d,h,g,new Nt)),u&&(p.normal=Ai.getInterpolatedAttribute(u,c,d,h,g,new ne),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new ne,materialIndex:0};Ai.getNormal(Mu,Tu,wu,v.normal),p.face=v,p.barycoord=g}return p}class Za extends hr{constructor(e=1,t=1,r=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,r,t,e,u,a,0),E("z","y","x",1,-1,r,t,-e,u,a,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,a,4),E("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new bs(h,3)),this.setAttribute("normal",new bs(p,3)),this.setAttribute("uv",new bs(g,2));function E(M,x,y,P,R,b,N,F,U,B,D){const C=b/U,V=N/B,ae=b/2,Q=N/2,ce=F/2,pe=U+1,ue=B+1;let ie=0,z=0;const le=new ne;for(let re=0;re<ue;re++){const O=re*V-Q;for(let te=0;te<pe;te++){const Fe=te*C-ae;le[M]=Fe*P,le[x]=O*R,le[y]=ce,h.push(le.x,le.y,le.z),le[M]=0,le[x]=0,le[y]=F>0?1:-1,p.push(le.x,le.y,le.z),g.push(te/U),g.push(1-re/B),ie+=1}}for(let re=0;re<B;re++)for(let O=0;O<U;O++){const te=v+O+pe*re,Fe=v+O+pe*(re+1),K=v+(O+1)+pe*(re+1),fe=v+(O+1)+pe*re;d.push(te,Fe,fe),d.push(Fe,K,fe),z+=6}c.addGroup(S,z,D),S+=z,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const r=Oo(n[t]);for(const o in r)e[o]=r[o]}return e}function ZT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const QT={clone:Oo,merge:Nn};var JT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JT,this.fragmentShader=ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=ZT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Gy extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new ne,a0=new Nt,l0=new Nt;class di extends Gy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,a0,l0),t.subVectors(l0,a0)}setViewOffset(e,t,r,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _o=-90,yo=1;class tw extends jn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(_o,yo,e,t);o.layers=this.layers,this.add(o);const a=new di(_o,yo,e,t);a.layers=this.layers,this.add(a);const u=new di(_o,yo,e,t);u.layers=this.layers,this.add(u);const c=new di(_o,yo,e,t);c.layers=this.layers,this.add(c);const d=new di(_o,yo,e,t);d.layers=this.layers,this.add(d);const h=new di(_o,yo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,a),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Wy extends Wn{constructor(e,t,r,o,a,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,r,o,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nw extends Is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Wy(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Za(5,5,5),a=new Xr({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Gr});a.uniforms.tEquirect.value=t;const u=new or(o,a),c=t.minFilter;return t.minFilter===As&&(t.minFilter=Bi),new tw(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(a)}}class iw extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dd=new ne,rw=new ne,sw=new ct;class ys{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Dd.subVectors(r,t).cross(rw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||sw.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new fc,bu=new ne;class jy{constructor(e=new ys,t=new ys,r=new ys,o=new ys,a=new ys,u=new ys){this.planes=[e,t,r,o,a,u]}set(e,t,r,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr){const r=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],v=o[7],S=o[8],E=o[9],M=o[10],x=o[11],y=o[12],P=o[13],R=o[14],b=o[15];if(r[0].setComponents(d-a,v-h,x-S,b-y).normalize(),r[1].setComponents(d+a,v+h,x+S,b+y).normalize(),r[2].setComponents(d+u,v+p,x+E,b+P).normalize(),r[3].setComponents(d-u,v-p,x-E,b-P).normalize(),r[4].setComponents(d-c,v-g,x-M,b-R).normalize(),t===sr)r[5].setComponents(d+c,v+g,x+M,b+R).normalize();else if(t===Ju)r[5].setComponents(c,g,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(bu.x=o.normal.x>0?e.max.x:e.min.x,bu.y=o.normal.y>0?e.max.y:e.min.y,bu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xy extends Ka{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const u0=new Jt,Hh=new Fy,Pu=new fc,Du=new ne;class ow extends jn{constructor(e=new hr,t=new Xy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pu.copy(r.boundingSphere),Pu.applyMatrix4(o),Pu.radius+=a,e.ray.intersectsSphere(Pu)===!1)return;u0.copy(o).invert(),Hh.copy(e.ray).applyMatrix4(u0);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=r.index,g=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let E=v,M=S;E<M;E++){const x=h.getX(E);Du.fromBufferAttribute(g,x),c0(Du,x,d,o,e,t,this)}}else{const v=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let E=v,M=S;E<M;E++)Du.fromBufferAttribute(g,E),c0(Du,E,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function c0(n,e,t,r,o,a,u){const c=Hh.distanceSqToPoint(n);if(c<t){const d=new ne;Hh.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Lu extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qy extends Wn{constructor(e,t,r,o,a,u,c,d,h,p=bo){if(p!==bo&&p!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===bo&&(r=Ls),r===void 0&&p===Uo&&(r=No),super(null,o,a,u,c,d,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ri,this.minFilter=d!==void 0?d:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dc extends hr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,p=d+1,g=e/c,v=t/d,S=[],E=[],M=[],x=[];for(let y=0;y<p;y++){const P=y*v-u;for(let R=0;R<h;R++){const b=R*g-a;E.push(b,-P,0),M.push(0,0,1),x.push(R/c),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<c;P++){const R=P+h*y,b=P+h*(y+1),N=P+1+h*(y+1),F=P+1+h*y;S.push(R,b,F),S.push(b,N,F)}this.setIndex(S),this.setAttribute("position",new bs(E,3)),this.setAttribute("normal",new bs(M,3)),this.setAttribute("uv",new bs(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class aw extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lw extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uw extends Gy{constructor(e=-1,t=1,r=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cw extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function f0(n,e,t,r){const o=fw(r);switch(t){case wy:return n*e;case Cy:return n*e;case Ry:return n*e*2;case by:return n*e/o.components*o.byteLength;case _p:return n*e/o.components*o.byteLength;case Py:return n*e*2/o.components*o.byteLength;case yp:return n*e*2/o.components*o.byteLength;case Ay:return n*e*3/o.components*o.byteLength;case Ci:return n*e*4/o.components*o.byteLength;case xp:return n*e*4/o.components*o.byteLength;case zu:case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:case _h:return Math.max(n,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(n,8)*Math.max(e,8)/2;case yh:case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wu:case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dy:case Bh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kh:case zh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fw(n){switch(n){case cr:case Ey:return{byteLength:1,components:1};case ka:case My:case Xa:return{byteLength:2,components:1};case gp:case vp:return{byteLength:2,components:4};case Ls:case mp:case rr:return{byteLength:4,components:1};case Ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yy(){let n=null,e=!1,t=null,r=null;function o(a,u){t(a,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function dw(n){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const p=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,p);else{g.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<g.length;S++){const E=g[v],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];n.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:u}}var hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_w=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ww=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Aw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ow=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ww=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:hw,alphahash_pars_fragment:pw,alphamap_fragment:mw,alphamap_pars_fragment:gw,alphatest_fragment:vw,alphatest_pars_fragment:_w,aomap_fragment:yw,aomap_pars_fragment:xw,batching_pars_vertex:Sw,batching_vertex:Ew,begin_vertex:Mw,beginnormal_vertex:Tw,bsdfs:ww,iridescence_fragment:Aw,bumpmap_pars_fragment:Cw,clipping_planes_fragment:Rw,clipping_planes_pars_fragment:bw,clipping_planes_pars_vertex:Pw,clipping_planes_vertex:Dw,color_fragment:Lw,color_pars_fragment:Iw,color_pars_vertex:Nw,color_vertex:Uw,common:Fw,cube_uv_reflection_fragment:Ow,defaultnormal_vertex:Bw,displacementmap_pars_vertex:kw,displacementmap_vertex:zw,emissivemap_fragment:Vw,emissivemap_pars_fragment:Hw,colorspace_fragment:Gw,colorspace_pars_fragment:Ww,envmap_fragment:jw,envmap_common_pars_fragment:Xw,envmap_pars_fragment:qw,envmap_pars_vertex:Yw,envmap_physical_pars_fragment:s1,envmap_vertex:$w,fog_vertex:Kw,fog_pars_vertex:Zw,fog_fragment:Qw,fog_pars_fragment:Jw,gradientmap_pars_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:r1,lights_toon_fragment:o1,lights_toon_pars_fragment:a1,lights_phong_fragment:l1,lights_phong_pars_fragment:u1,lights_physical_fragment:c1,lights_physical_pars_fragment:f1,lights_fragment_begin:d1,lights_fragment_maps:h1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:_1,map_fragment:y1,map_pars_fragment:x1,map_particle_fragment:S1,map_particle_pars_fragment:E1,metalnessmap_fragment:M1,metalnessmap_pars_fragment:T1,morphinstance_vertex:w1,morphcolor_vertex:A1,morphnormal_vertex:C1,morphtarget_pars_vertex:R1,morphtarget_vertex:b1,normal_fragment_begin:P1,normal_fragment_maps:D1,normal_pars_fragment:L1,normal_pars_vertex:I1,normal_vertex:N1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:F1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:k1,opaque_fragment:z1,packing:V1,premultiplied_alpha_fragment:H1,project_vertex:G1,dithering_fragment:W1,dithering_pars_fragment:j1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:$1,shadowmap_vertex:K1,shadowmask_pars_fragment:Z1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:eA,skinnormal_vertex:tA,specularmap_fragment:nA,specularmap_pars_fragment:iA,tonemapping_fragment:rA,tonemapping_pars_fragment:sA,transmission_fragment:oA,transmission_pars_fragment:aA,uv_pars_fragment:lA,uv_pars_vertex:uA,uv_vertex:cA,worldpos_vertex:fA,background_vert:dA,background_frag:hA,backgroundCube_vert:pA,backgroundCube_frag:mA,cube_vert:gA,cube_frag:vA,depth_vert:_A,depth_frag:yA,distanceRGBA_vert:xA,distanceRGBA_frag:SA,equirect_vert:EA,equirect_frag:MA,linedashed_vert:TA,linedashed_frag:wA,meshbasic_vert:AA,meshbasic_frag:CA,meshlambert_vert:RA,meshlambert_frag:bA,meshmatcap_vert:PA,meshmatcap_frag:DA,meshnormal_vert:LA,meshnormal_frag:IA,meshphong_vert:NA,meshphong_frag:UA,meshphysical_vert:FA,meshphysical_frag:OA,meshtoon_vert:BA,meshtoon_frag:kA,points_vert:zA,points_frag:VA,shadow_vert:HA,shadow_frag:GA,sprite_vert:WA,sprite_frag:jA},Pe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Oi={basic:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Nn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Nn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Nn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Nn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Nn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Nn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Nn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Nn([Pe.lights,Pe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Oi.physical={uniforms:Nn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Iu={r:0,b:0,g:0},gs=new fr,XA=new Jt;function qA(n,e,t,r,o,a,u){const c=new Pt(0);let d=a===!0?0:1,h,p,g=null,v=0,S=null;function E(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function M(R){let b=!1;const N=E(R);N===null?y(c,d):N&&N.isColor&&(y(N,1),b=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(R,b){const N=E(b);N&&(N.isCubeTexture||N.mapping===cc)?(p===void 0&&(p=new or(new Za(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Oo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),gs.copy(b.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(gs)),p.material.toneMapped=Ct.getTransfer(N.colorSpace)!==It,(g!==N||v!==N.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,g=N,v=N.version,S=n.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new or(new dc(2,2),new Xr({name:"BackgroundMaterial",uniforms:Oo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,g=N,v=N.version,S=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,b){R.getRGB(Iu,Hy(n)),r.buffers.color.setClear(Iu.r,Iu.g,Iu.b,b,u)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(R,b=1){c.set(R),d=b,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(c,d)},render:M,addToRenderList:x,dispose:P}}function YA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let a=o,u=!1;function c(C,V,ae,Q,ce){let pe=!1;const ue=g(Q,ae,V);a!==ue&&(a=ue,h(a.object)),pe=S(C,Q,ae,ce),pe&&E(C,Q,ae,ce),ce!==null&&e.update(ce,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,b(C,V,ae,Q),ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function p(C){return n.deleteVertexArray(C)}function g(C,V,ae){const Q=ae.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let pe=ce[V.id];pe===void 0&&(pe={},ce[V.id]=pe);let ue=pe[Q];return ue===void 0&&(ue=v(d()),pe[Q]=ue),ue}function v(C){const V=[],ae=[],Q=[];for(let ce=0;ce<t;ce++)V[ce]=0,ae[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,V,ae,Q){const ce=a.attributes,pe=V.attributes;let ue=0;const ie=ae.getAttributes();for(const z in ie)if(ie[z].location>=0){const re=ce[z];let O=pe[z];if(O===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;ue++}return a.attributesNum!==ue||a.index!==Q}function E(C,V,ae,Q){const ce={},pe=V.attributes;let ue=0;const ie=ae.getAttributes();for(const z in ie)if(ie[z].location>=0){let re=pe[z];re===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),ce[z]=O,ue++}a.attributes=ce,a.attributesNum=ue,a.index=Q}function M(){const C=a.newAttributes;for(let V=0,ae=C.length;V<ae;V++)C[V]=0}function x(C){y(C,0)}function y(C,V){const ae=a.newAttributes,Q=a.enabledAttributes,ce=a.attributeDivisors;ae[C]=1,Q[C]===0&&(n.enableVertexAttribArray(C),Q[C]=1),ce[C]!==V&&(n.vertexAttribDivisor(C,V),ce[C]=V)}function P(){const C=a.newAttributes,V=a.enabledAttributes;for(let ae=0,Q=V.length;ae<Q;ae++)V[ae]!==C[ae]&&(n.disableVertexAttribArray(ae),V[ae]=0)}function R(C,V,ae,Q,ce,pe,ue){ue===!0?n.vertexAttribIPointer(C,V,ae,ce,pe):n.vertexAttribPointer(C,V,ae,Q,ce,pe)}function b(C,V,ae,Q){M();const ce=Q.attributes,pe=ae.getAttributes(),ue=V.defaultAttributeValues;for(const ie in pe){const z=pe[ie];if(z.location>=0){let le=ce[ie];if(le===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,O=le.itemSize,te=e.get(le);if(te===void 0)continue;const Fe=te.buffer,K=te.type,fe=te.bytesPerElement,Te=K===n.INT||K===n.UNSIGNED_INT||le.gpuType===mp;if(le.isInterleavedBufferAttribute){const ye=le.data,Ae=ye.stride,Oe=le.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<z.locationSize;et++)y(z.location+et,ye.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<z.locationSize;et++)x(z.location+et);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let et=0;et<z.locationSize;et++)R(z.location+et,O/z.locationSize,K,re,Ae*fe,(Oe+O/z.locationSize*et)*fe,Te)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<z.locationSize;ye++)y(z.location+ye,le.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<z.locationSize;ye++)x(z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ye=0;ye<z.locationSize;ye++)R(z.location+ye,O/z.locationSize,K,re,O*fe,O/z.locationSize*ye*fe,Te)}}else if(ue!==void 0){const re=ue[ie];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(z.location,re);break;case 3:n.vertexAttrib3fv(z.location,re);break;case 4:n.vertexAttrib4fv(z.location,re);break;default:n.vertexAttrib1fv(z.location,re)}}}}P()}function N(){B();for(const C in r){const V=r[C];for(const ae in V){const Q=V[ae];for(const ce in Q)p(Q[ce].object),delete Q[ce];delete V[ae]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ae in V){const Q=V[ae];for(const ce in Q)p(Q[ce].object),delete Q[ce];delete V[ae]}delete r[C.id]}function U(C){for(const V in r){const ae=r[V];if(ae[C.id]===void 0)continue;const Q=ae[C.id];for(const ce in Q)p(Q[ce].object),delete Q[ce];delete ae[C.id]}}function B(){D(),u=!0,a!==o&&(a=o,h(a.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:B,resetDefaultState:D,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:x,disableUnusedAttributes:P}}function $A(n,e,t){let r;function o(h){r=h}function a(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,g){g!==0&&(n.drawArraysInstanced(r,h,p,g),t.update(p,r,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,g);let S=0;for(let E=0;E<g;E++)S+=p[E];t.update(S,r,1)}function d(h,p,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)u(h[E],p[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,p,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M]*v[M];t.update(E,r,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function KA(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ci&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const B=U===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==cr&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==rr&&!B)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:N,maxSamples:F}}function ZA(n){const e=this;let t=null,r=0,o=!1,a=!1;const u=new ys,c=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||r!==0||o;return o=v,r=g.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,y=n.get(g);if(!o||E===null||E.length===0||a&&!x)a?p(null):h();else{const P=a?0:r,R=P*4;let b=y.clippingState||null;d.value=b,b=p(E,v,R,S);for(let N=0;N!==R;++N)b[N]=t[N];y.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,S,E){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=d.value,E!==!0||x===null){const y=S+M*4,P=v.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<y)&&(x=new Float32Array(y));for(let R=0,b=S;R!==M;++R,b+=4)u.copy(g[R]).applyMatrix4(P,c),u.normal.toArray(x,b),x[b+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function QA(n){let e=new WeakMap;function t(u,c){return c===fh?u.mapping=Lo:c===dh&&(u.mapping=Io),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===fh||c===dh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new nw(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}const Eo=4,d0=[.125,.215,.35,.446,.526,.582],Ts=20,Ld=new uw,h0=new Pt;let Id=null,Nd=0,Ud=0,Fd=!1;const xs=(1+Math.sqrt(5))/2,xo=1/xs,p0=[new ne(-xs,xo,0),new ne(xs,xo,0),new ne(-xo,0,xs),new ne(xo,0,xs),new ne(0,xs,-xo),new ne(0,xs,xo),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Id=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Nd,Ud),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Nu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Xa,format:Ci,colorSpace:Fo,depthBuffer:!1},o=g0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JA(a)),this._blurMaterial=eC(a,e,t)}return o}_compileMaterial(e){const t=new or(this._lodPlanes[0],e);this._renderer.compile(t,Ld)}_sceneToCubeUV(e,t,r,o){const c=new di(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(h0),p.toneMapping=Wr,p.autoClear=!1;const S=new ky({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),E=new or(new Za,S);let M=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,M=!0):(S.color.copy(h0),M=!0);for(let y=0;y<6;y++){const P=y%3;P===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):P===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const R=this._cubeSize;Nu(o,P*R,y>2?R:0,R,R),p.setRenderTarget(o),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Lo||e.mapping===Io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new or(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Nu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ld)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=p0[(o-a-1)%p0.length];this._blur(e,a-1,a,u,c)}t.autoClear=r}_blur(e,t,r,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",a),this._halfBlur(u,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new or(this._lodPlanes[o],h),v=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Ts-1),M=a/E,x=isFinite(a)?1+Math.floor(p*M):Ts;x>Ts&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);const y=[];let P=0;for(let U=0;U<Ts;++U){const B=U/M,D=Math.exp(-B*B/2);y.push(D),U===0?P+=D:U<x&&(P+=2*D)}for(let U=0;U<y.length;U++)y[U]=y[U]/P;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-r;const b=this._sizeLods[o],N=3*b*(o>R-Eo?o-R+Eo:0),F=4*(this._cubeSize-b);Nu(t,N,F,3*b,2*b),d.setRenderTarget(t),d.render(g,Ld)}}function JA(n){const e=[],t=[],r=[];let o=n;const a=n-Eo+1+d0.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-Eo?d=d0[u-n+Eo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,E=6,M=3,x=2,y=1,P=new Float32Array(M*E*S),R=new Float32Array(x*E*S),b=new Float32Array(y*E*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,B=F>2?0:-1,D=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];P.set(D,M*E*F),R.set(v,x*E*F);const C=[F,F,F,F,F,F];b.set(C,y*E*F)}const N=new hr;N.setAttribute("position",new bi(P,M)),N.setAttribute("uv",new bi(R,x)),N.setAttribute("faceIndex",new bi(b,y)),e.push(N),o>Eo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function g0(n,e,t){const r=new Is(n,e,t);return r.texture.mapping=cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function eC(n,e,t){const r=new Float32Array(Ts),o=new ne(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function v0(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function _0(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tC(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===fh||d===dh,p=d===Lo||d===Io;if(h||p){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new m0(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&o(S)?(t===null&&(t=new m0(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function nC(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&So("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function iC(n,e,t,r){const o={},a=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=a.get(v);S&&(e.remove(S),a.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const S in v)e.update(v[S],n.ARRAY_BUFFER)}function h(g){const v=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const P=S.array;M=S.version;for(let R=0,b=P.length;R<b;R+=3){const N=P[R+0],F=P[R+1],U=P[R+2];v.push(N,F,F,U,U,N)}}else if(E!==void 0){const P=E.array;M=E.version;for(let R=0,b=P.length/3-1;R<b;R+=3){const N=R+0,F=R+1,U=R+2;v.push(N,F,F,U,U,N)}}else return;const x=new(Iy(v)?Vy:zy)(v,1);x.version=M;const y=a.get(g);y&&e.remove(y),a.set(g,x)}function p(g){const v=a.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function rC(n,e,t){let r;function o(v){r=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function d(v,S){n.drawElements(r,S,a,v*u),t.update(S,r,1)}function h(v,S,E){E!==0&&(n.drawElementsInstanced(r,S,a,v*u,E),t.update(S,r,E))}function p(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,a,v,0,E);let x=0;for(let y=0;y<E;y++)x+=S[y];t.update(x,r,1)}function g(v,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)h(v[y]/u,S[y],M[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,a,v,0,M,0,E);let y=0;for(let P=0;P<E;P++)y+=S[P]*M[P];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function sC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(a/3);break;case n.LINES:t.lines+=c*(a/2);break;case n.LINE_STRIP:t.lines+=c*(a-1);break;case n.LINE_LOOP:t.lines+=c*a;break;case n.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function oC(n,e,t){const r=new WeakMap,o=new Qt;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let C=function(){B.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),x===!0&&(b=3);let N=c.attributes.position.count*b,F=1;N>e.maxTextureSize&&(F=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const U=new Float32Array(N*F*4*g),B=new Uy(U,N,F,g);B.type=rr,B.needsUpdate=!0;const D=b*4;for(let V=0;V<g;V++){const ae=y[V],Q=P[V],ce=R[V],pe=N*F*4*V;for(let ue=0;ue<ae.count;ue++){const ie=ue*D;E===!0&&(o.fromBufferAttribute(ae,ue),U[pe+ie+0]=o.x,U[pe+ie+1]=o.y,U[pe+ie+2]=o.z,U[pe+ie+3]=0),M===!0&&(o.fromBufferAttribute(Q,ue),U[pe+ie+4]=o.x,U[pe+ie+5]=o.y,U[pe+ie+6]=o.z,U[pe+ie+7]=0),x===!0&&(o.fromBufferAttribute(ce,ue),U[pe+ie+8]=o.x,U[pe+ie+9]=o.y,U[pe+ie+10]=o.z,U[pe+ie+11]=ce.itemSize===4?o.w:1)}}v={count:g,texture:B,size:new Nt(N,F)},r.set(c,v),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:a}}function aC(n,e,t,r){let o=new WeakMap;function a(d){const h=r.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const $y=new Wn,y0=new qy(1,1),Ky=new Uy,Zy=new zT,Qy=new Wy,x0=[],S0=[],E0=new Float32Array(16),M0=new Float32Array(9),T0=new Float32Array(4);function Ho(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=x0[o];if(a===void 0&&(a=new Float32Array(o),x0[o]=a),e!==0){r.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(a,c)}return a}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function hc(n,e){let t=S0[e];t===void 0&&(t=new Int32Array(e),S0[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function lC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function cC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function fC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function dC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;T0.set(r),n.uniformMatrix2fv(this.addr,!1,T0),ln(t,r)}}function hC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;M0.set(r),n.uniformMatrix3fv(this.addr,!1,M0),ln(t,r)}}function pC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;E0.set(r),n.uniformMatrix4fv(this.addr,!1,E0),ln(t,r)}}function mC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function vC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function yC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function SC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function EC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function MC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(y0.compareFunction=Ly,a=y0):a=$y,t.setTexture2D(e||a,o)}function TC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Zy,o)}function wC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Qy,o)}function AC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ky,o)}function CC(n){switch(n){case 5126:return lC;case 35664:return uC;case 35665:return cC;case 35666:return fC;case 35674:return dC;case 35675:return hC;case 35676:return pC;case 5124:case 35670:return mC;case 35667:case 35671:return gC;case 35668:case 35672:return vC;case 35669:case 35673:return _C;case 5125:return yC;case 36294:return xC;case 36295:return SC;case 36296:return EC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return TC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return AC}}function RC(n,e){n.uniform1fv(this.addr,e)}function bC(n,e){const t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function PC(n,e){const t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function DC(n,e){const t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function LC(n,e){const t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IC(n,e){const t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NC(n,e){const t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UC(n,e){n.uniform1iv(this.addr,e)}function FC(n,e){n.uniform2iv(this.addr,e)}function OC(n,e){n.uniform3iv(this.addr,e)}function BC(n,e){n.uniform4iv(this.addr,e)}function kC(n,e){n.uniform1uiv(this.addr,e)}function zC(n,e){n.uniform2uiv(this.addr,e)}function VC(n,e){n.uniform3uiv(this.addr,e)}function HC(n,e){n.uniform4uiv(this.addr,e)}function GC(n,e,t){const r=this.cache,o=e.length,a=hc(t,o);an(r,a)||(n.uniform1iv(this.addr,a),ln(r,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||$y,a[u])}function WC(n,e,t){const r=this.cache,o=e.length,a=hc(t,o);an(r,a)||(n.uniform1iv(this.addr,a),ln(r,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Zy,a[u])}function jC(n,e,t){const r=this.cache,o=e.length,a=hc(t,o);an(r,a)||(n.uniform1iv(this.addr,a),ln(r,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Qy,a[u])}function XC(n,e,t){const r=this.cache,o=e.length,a=hc(t,o);an(r,a)||(n.uniform1iv(this.addr,a),ln(r,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Ky,a[u])}function qC(n){switch(n){case 5126:return RC;case 35664:return bC;case 35665:return PC;case 35666:return DC;case 35674:return LC;case 35675:return IC;case 35676:return NC;case 5124:case 35670:return UC;case 35667:case 35671:return FC;case 35668:case 35672:return OC;case 35669:case 35673:return BC;case 5125:return kC;case 36294:return zC;case 36295:return VC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return GC;case 35679:case 36299:case 36307:return WC;case 35680:case 36300:case 36308:case 36293:return jC;case 36289:case 36303:case 36311:case 36292:return XC}}class YC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=CC(t.type)}}class $C{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qC(t.type)}}class KC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function w0(n,e){n.seq.push(e),n.map[e.id]=e}function ZC(n,e,t){const r=n.name,o=r.length;for(Od.lastIndex=0;;){const a=Od.exec(r),u=Od.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){w0(t,h===void 0?new YC(c,n,e):new $C(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new KC(c),w0(t,g)),t=g}}}class ju{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);ZC(a,u,this)}}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function A0(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const QC=37297;let JC=0;function eR(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const C0=new ct;function tR(n){Ct._getMatrix(C0,Ct.workingColorSpace,n);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Qu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function R0(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+eR(n.getShaderSource(e),u)}else return o}function nR(n,e){const t=tR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iR(n,e){let t;switch(e){case fT:t="Linear";break;case dT:t="Reinhard";break;case hT:t="Cineon";break;case pT:t="ACESFilmic";break;case gT:t="AgX";break;case vT:t="Neutral";break;case mT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uu=new ne;function rR(){Ct.getLuminanceCoefficients(Uu);const n=Uu.x.toFixed(4),e=Uu.y.toFixed(4),t=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function oR(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aR(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),u=a.name;let c=1;a.type===n.FLOAT_MAT2&&(c=2),a.type===n.FLOAT_MAT3&&(c=3),a.type===n.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Da(n){return n!==""}function b0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(lR,cR)}const uR=new Map;function cR(n,e){let t=ft[e];if(t===void 0){const r=uR.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const fR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(n){return n.replace(fR,dR)}function dR(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function L0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===WM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function pR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lo:case Io:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function gR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xy:e="ENVMAP_BLENDING_MULTIPLY";break;case uT:e="ENVMAP_BLENDING_MIX";break;case cT:e="ENVMAP_BLENDING_ADD";break}return e}function vR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function _R(n,e,t,r){const o=n.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=hR(t),h=pR(t),p=mR(t),g=gR(t),v=vR(t),S=sR(t),E=oR(a),M=o.createProgram();let x,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Da).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Da).join(`
`),y.length>0&&(y+=`
`)):(x=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),y=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Wr?iR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,nR("linearToOutputTexel",t.outputColorSpace),rR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),u=Gh(u),u=b0(u,t),u=P0(u,t),c=Gh(c),c=b0(c,t),c=P0(c,t),u=D0(u),c=D0(c),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=P+x+u,b=P+y+c,N=A0(o,o.VERTEX_SHADER,R),F=A0(o,o.FRAGMENT_SHADER,b);o.attachShader(M,N),o.attachShader(M,F),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function U(V){if(n.debug.checkShaderErrors){const ae=o.getProgramInfoLog(M).trim(),Q=o.getShaderInfoLog(N).trim(),ce=o.getShaderInfoLog(F).trim();let pe=!0,ue=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,N,F);else{const ie=R0(o,N,"vertex"),z=R0(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+ie+`
`+z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(Q===""||ce==="")&&(ue=!1);ue&&(V.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:Q,prefix:x},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(N),o.deleteShader(F),B=new ju(o,M),D=aR(o,M)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(M,QC)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=F,this}let yR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new SR(e),t.set(e,r)),r}}class SR{constructor(e){this.id=yR++,this.code=e,this.usedTimes=0}}function ER(n,e,t,r,o,a,u){const c=new Oy,d=new xR,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(D){return h.add(D),D===0?"uv":`uv${D}`}function x(D,C,V,ae,Q){const ce=ae.fog,pe=Q.geometry,ue=D.isMeshStandardMaterial?ae.environment:null,ie=(D.isMeshStandardMaterial?t:e).get(D.envMap||ue),z=ie&&ie.mapping===cc?ie.image.height:null,le=E[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,O=re!==void 0?re.length:0;let te=0;pe.morphAttributes.position!==void 0&&(te=1),pe.morphAttributes.normal!==void 0&&(te=2),pe.morphAttributes.color!==void 0&&(te=3);let Fe,K,fe,Te;if(le){const Et=Oi[le];Fe=Et.vertexShader,K=Et.fragmentShader}else Fe=D.vertexShader,K=D.fragmentShader,d.update(D),fe=d.getVertexShaderID(D),Te=d.getFragmentShaderID(D);const ye=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Oe=Q.isInstancedMesh===!0,et=Q.isBatchedMesh===!0,Dt=!!D.map,_t=!!D.matcap,Ut=!!ie,H=!!D.aoMap,Rn=!!D.lightMap,gt=!!D.bumpMap,ht=!!D.normalMap,$e=!!D.displacementMap,bt=!!D.emissiveMap,qe=!!D.metalnessMap,L=!!D.roughnessMap,w=D.anisotropy>0,$=D.clearcoat>0,me=D.dispersion>0,ve=D.iridescence>0,de=D.sheen>0,je=D.transmission>0,Ce=w&&!!D.anisotropyMap,Be=$&&!!D.clearcoatMap,dt=$&&!!D.clearcoatNormalMap,Me=$&&!!D.clearcoatRoughnessMap,Ve=ve&&!!D.iridescenceMap,Ze=ve&&!!D.iridescenceThicknessMap,nt=de&&!!D.sheenColorMap,He=de&&!!D.sheenRoughnessMap,pt=!!D.specularMap,ot=!!D.specularColorMap,Rt=!!D.specularIntensityMap,j=je&&!!D.transmissionMap,Re=je&&!!D.thicknessMap,se=!!D.gradientMap,he=!!D.alphaMap,Le=D.alphaTest>0,De=!!D.alphaHash,at=!!D.extensions;let Ot=Wr;D.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const rn={shaderID:le,shaderType:D.type,shaderName:D.name,vertexShader:Fe,fragmentShader:K,defines:D.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:et,batchingColor:et&&Q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Q.instanceColor!==null,instancingMorph:Oe&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Fo,alphaToCoverage:!!D.alphaToCoverage,map:Dt,matcap:_t,envMap:Ut,envMapMode:Ut&&ie.mapping,envMapCubeUVHeight:z,aoMap:H,lightMap:Rn,bumpMap:gt,normalMap:ht,displacementMap:v&&$e,emissiveMap:bt,normalMapObjectSpace:ht&&D.normalMapType===ET,normalMapTangentSpace:ht&&D.normalMapType===ST,metalnessMap:qe,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:$,clearcoatMap:Be,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Ve,iridescenceThicknessMap:Ze,sheen:de,sheenColorMap:nt,sheenRoughnessMap:He,specularMap:pt,specularColorMap:ot,specularIntensityMap:Rt,transmission:je,transmissionMap:j,thicknessMap:Re,gradientMap:se,opaque:D.transparent===!1&&D.blending===Ro&&D.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:De,combine:D.combine,mapUv:Dt&&M(D.map.channel),aoMapUv:H&&M(D.aoMap.channel),lightMapUv:Rn&&M(D.lightMap.channel),bumpMapUv:gt&&M(D.bumpMap.channel),normalMapUv:ht&&M(D.normalMap.channel),displacementMapUv:$e&&M(D.displacementMap.channel),emissiveMapUv:bt&&M(D.emissiveMap.channel),metalnessMapUv:qe&&M(D.metalnessMap.channel),roughnessMapUv:L&&M(D.roughnessMap.channel),anisotropyMapUv:Ce&&M(D.anisotropyMap.channel),clearcoatMapUv:Be&&M(D.clearcoatMap.channel),clearcoatNormalMapUv:dt&&M(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&M(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&M(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&M(D.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&M(D.sheenColorMap.channel),sheenRoughnessMapUv:He&&M(D.sheenRoughnessMap.channel),specularMapUv:pt&&M(D.specularMap.channel),specularColorMapUv:ot&&M(D.specularColorMap.channel),specularIntensityMapUv:Rt&&M(D.specularIntensityMap.channel),transmissionMapUv:j&&M(D.transmissionMap.channel),thicknessMapUv:Re&&M(D.thicknessMap.channel),alphaMapUv:he&&M(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ht||w),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!pe.attributes.uv&&(Dt||he),fog:!!ce,useFog:D.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&D.map.isVideoTexture===!0&&Ct.getTransfer(D.map.colorSpace)===It,decodeVideoTextureEmissive:bt&&D.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(D.emissiveMap.colorSpace)===It,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ir,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:at&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&D.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return rn.vertexUv1s=h.has(1),rn.vertexUv2s=h.has(2),rn.vertexUv3s=h.has(3),h.clear(),rn}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(C,D),R(C,D),C.push(n.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function R(D,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),D.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),D.push(c.mask)}function b(D){const C=E[D.type];let V;if(C){const ae=Oi[C];V=QT.clone(ae.uniforms)}else V=D.uniforms;return V}function N(D,C){let V;for(let ae=0,Q=p.length;ae<Q;ae++){const ce=p[ae];if(ce.cacheKey===C){V=ce,++V.usedTimes;break}}return V===void 0&&(V=new _R(n,C,D,a),p.push(V)),V}function F(D){if(--D.usedTimes===0){const C=p.indexOf(D);p[C]=p[p.length-1],p.pop(),D.destroy()}}function U(D){d.remove(D)}function B(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:b,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:p,dispose:B}}function MR(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function TR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function I0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function N0(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,S,E,M,x){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:x},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=x),e++,y}function c(g,v,S,E,M,x){const y=u(g,v,S,E,M,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(g,v,S,E,M,x){const y=u(g,v,S,E,M,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||TR),r.length>1&&r.sort(v||I0),o.length>1&&o.sort(v||I0)}function p(){for(let g=e,v=n.length;g<v;g++){const S=n[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:c,unshift:d,finish:p,sort:h}}function wR(){let n=new WeakMap;function e(r,o){const a=n.get(r);let u;return a===void 0?(u=new N0,n.set(r,[u])):o>=a.length?(u=new N0,a.push(u)):u=a[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function AR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Pt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function CR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RR=0;function bR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PR(n){const e=new AR,t=CR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,a=new Jt,u=new Jt;function c(h){let p=0,g=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,M=0,x=0,y=0,P=0,R=0,b=0,N=0,F=0,U=0;h.sort(bR);for(let D=0,C=h.length;D<C;D++){const V=h[D],ae=V.color,Q=V.intensity,ce=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=ae.r*Q,g+=ae.g*Q,v+=ae.b*Q;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(V.sh.coefficients[ue],Q);U++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ie=V.shadow,z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=ue,S++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(ae).multiplyScalar(Q),ue.distance=ce,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,r.spot[M]=ue;const ie=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,ie.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[M]=ie.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,r.spotShadow[M]=z,r.spotShadowMap[M]=pe,b++}M++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(ae).multiplyScalar(Q),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=ue,x++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const ie=V.shadow,z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,z.shadowCameraNear=ie.camera.near,z.shadowCameraFar=ie.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=V.shadow.matrix,R++}r.point[E]=ue,E++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(Q),ue.groundColor.copy(V.groundColor).multiplyScalar(Q),r.hemi[y]=ue,y++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==y||B.numDirectionalShadows!==P||B.numPointShadows!==R||B.numSpotShadows!==b||B.numSpotMaps!==N||B.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+N-F,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,B.directionalLength=S,B.pointLength=E,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=y,B.numDirectionalShadows=P,B.numPointShadows=R,B.numSpotShadows=b,B.numSpotMaps=N,B.numLightProbes=U,r.version=RR++)}function d(h,p){let g=0,v=0,S=0,E=0,M=0;const x=p.matrixWorldInverse;for(let y=0,P=h.length;y<P;y++){const R=h[y];if(R.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),g++}else if(R.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),S++}else if(R.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(x),u.identity(),a.copy(R.matrixWorld),a.premultiply(x),u.extractRotation(a),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(x),v++}else if(R.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(x),M++}}}return{setup:c,setupView:d,state:r}}function U0(n){const e=new PR(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function a(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function DR(n){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new U0(n),e.set(o,[c])):a>=u.length?(c=new U0(n),u.push(c)):c=u[a],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const LR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NR(n,e,t){let r=new jy;const o=new Nt,a=new Nt,u=new Qt,c=new aw({depthPacking:xT}),d=new lw,h={},p=t.maxTextureSize,g={[jr]:Gn,[Gn]:jr,[ir]:ir},v=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:LR,fragmentShader:IR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new hr;E.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new or(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yy;let y=this.type;this.render=function(F,U,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const D=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Gr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const Q=y!==nr&&this.type===nr,ce=y===nr&&this.type!==nr;for(let pe=0,ue=F.length;pe<ue;pe++){const ie=F[pe],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const le=z.getFrameExtents();if(o.multiply(le),a.copy(z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/le.x),o.x=a.x*le.x,z.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/le.y),o.y=a.y*le.y,z.mapSize.y=a.y)),z.map===null||Q===!0||ce===!0){const O=this.type!==nr?{minFilter:Ri,magFilter:Ri}:{};z.map!==null&&z.map.dispose(),z.map=new Is(o.x,o.y,O),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const re=z.getViewportCount();for(let O=0;O<re;O++){const te=z.getViewport(O);u.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),ae.viewport(u),z.updateMatrices(ie,O),r=z.getFrustum(),b(U,B,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===nr&&P(z,B),z.needsUpdate=!1}y=this.type,x.needsUpdate=!1,n.setRenderTarget(D,C,V)};function P(F,U){const B=e.update(M);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Is(o.x,o.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(U,null,B,v,M,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(U,null,B,S,M,null)}function R(F,U,B,D){let C=null;const V=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)C=V;else if(C=B.isPointLight===!0?d:c,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ae=C.uuid,Q=U.uuid;let ce=h[ae];ce===void 0&&(ce={},h[ae]=ce);let pe=ce[Q];pe===void 0&&(pe=C.clone(),ce[Q]=pe,U.addEventListener("dispose",N)),C=pe}if(C.visible=U.visible,C.wireframe=U.wireframe,D===nr?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=n.properties.get(C);ae.light=B}return C}function b(F,U,B,D,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===nr)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),ce=F.material;if(Array.isArray(ce)){const pe=Q.groups;for(let ue=0,ie=pe.length;ue<ie;ue++){const z=pe[ue],le=ce[z.materialIndex];if(le&&le.visible){const re=R(F,le,D,C);F.onBeforeShadow(n,F,U,B,Q,re,z),n.renderBufferDirect(B,null,Q,re,F,z),F.onAfterShadow(n,F,U,B,Q,re,z)}}}else if(ce.visible){const pe=R(F,ce,D,C);F.onBeforeShadow(n,F,U,B,Q,pe,null),n.renderBufferDirect(B,null,Q,pe,F,null),F.onAfterShadow(n,F,U,B,Q,pe,null)}}const ae=F.children;for(let Q=0,ce=ae.length;Q<ce;Q++)b(ae[Q],U,B,D,C)}function N(F){F.target.removeEventListener("dispose",N);for(const B in h){const D=h[B],C=F.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const UR={[rh]:sh,[oh]:uh,[ah]:ch,[Do]:lh,[sh]:rh,[uh]:oh,[ch]:ah,[lh]:Do};function FR(n,e){function t(){let j=!1;const Re=new Qt;let se=null;const he=new Qt(0,0,0,0);return{setMask:function(Le){se!==Le&&!j&&(n.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){j=Le},setClear:function(Le,De,at,Ot,rn){rn===!0&&(Le*=Ot,De*=Ot,at*=Ot),Re.set(Le,De,at,Ot),he.equals(Re)===!1&&(n.clearColor(Le,De,at,Ot),he.copy(Re))},reset:function(){j=!1,se=null,he.set(-1,0,0,0)}}}function r(){let j=!1,Re=!1,se=null,he=null,Le=null;return{setReversed:function(De){if(Re!==De){const at=e.get("EXT_clip_control");Re?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Le;Le=null,this.setClear(Ot)}Re=De},getReversed:function(){return Re},setTest:function(De){De?ye(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){se!==De&&!j&&(n.depthMask(De),se=De)},setFunc:function(De){if(Re&&(De=UR[De]),he!==De){switch(De){case rh:n.depthFunc(n.NEVER);break;case sh:n.depthFunc(n.ALWAYS);break;case oh:n.depthFunc(n.LESS);break;case Do:n.depthFunc(n.LEQUAL);break;case ah:n.depthFunc(n.EQUAL);break;case lh:n.depthFunc(n.GEQUAL);break;case uh:n.depthFunc(n.GREATER);break;case ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=De}},setLocked:function(De){j=De},setClear:function(De){Le!==De&&(Re&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){j=!1,se=null,he=null,Le=null,Re=!1}}}function o(){let j=!1,Re=null,se=null,he=null,Le=null,De=null,at=null,Ot=null,rn=null;return{setTest:function(Et){j||(Et?ye(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!j&&(n.stencilMask(Et),Re=Et)},setFunc:function(Et,Un,bn){(se!==Et||he!==Un||Le!==bn)&&(n.stencilFunc(Et,Un,bn),se=Et,he=Un,Le=bn)},setOp:function(Et,Un,bn){(De!==Et||at!==Un||Ot!==bn)&&(n.stencilOp(Et,Un,bn),De=Et,at=Un,Ot=bn)},setLocked:function(Et){j=Et},setClear:function(Et){rn!==Et&&(n.clearStencil(Et),rn=Et)},reset:function(){j=!1,Re=null,se=null,he=null,Le=null,De=null,at=null,Ot=null,rn=null}}}const a=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let p={},g={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,P=null,R=null,b=null,N=null,F=null,U=new Pt(0,0,0),B=0,D=!1,C=null,V=null,ae=null,Q=null,ce=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,ie=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(z)[1]),ue=ie>=1):z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ue=ie>=2);let le=null,re={};const O=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Fe=new Qt().fromArray(O),K=new Qt().fromArray(te);function fe(j,Re,se,he){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(j,De),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<se;at++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Re+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const Te={};Te[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ye(n.DEPTH_TEST),u.setFunc(Do),gt(!1),ht(kv),ye(n.CULL_FACE),H(Gr);function ye(j){p[j]!==!0&&(n.enable(j),p[j]=!0)}function Ae(j){p[j]!==!1&&(n.disable(j),p[j]=!1)}function Oe(j,Re){return g[j]!==Re?(n.bindFramebuffer(j,Re),g[j]=Re,j===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Re),j===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(j,Re){let se=S,he=!1;if(j){se=v.get(Re),se===void 0&&(se=[],v.set(Re,se));const Le=j.textures;if(se.length!==Le.length||se[0]!==n.COLOR_ATTACHMENT0){for(let De=0,at=Le.length;De<at;De++)se[De]=n.COLOR_ATTACHMENT0+De;se.length=Le.length,he=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,he=!0);he&&n.drawBuffers(se)}function Dt(j){return E!==j?(n.useProgram(j),E=j,!0):!1}const _t={[Ms]:n.FUNC_ADD,[XM]:n.FUNC_SUBTRACT,[qM]:n.FUNC_REVERSE_SUBTRACT};_t[YM]=n.MIN,_t[$M]=n.MAX;const Ut={[KM]:n.ZERO,[ZM]:n.ONE,[QM]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[rT]:n.SRC_ALPHA_SATURATE,[nT]:n.DST_COLOR,[eT]:n.DST_ALPHA,[JM]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[iT]:n.ONE_MINUS_DST_COLOR,[tT]:n.ONE_MINUS_DST_ALPHA,[sT]:n.CONSTANT_COLOR,[oT]:n.ONE_MINUS_CONSTANT_COLOR,[aT]:n.CONSTANT_ALPHA,[lT]:n.ONE_MINUS_CONSTANT_ALPHA};function H(j,Re,se,he,Le,De,at,Ot,rn,Et){if(j===Gr){M===!0&&(Ae(n.BLEND),M=!1);return}if(M===!1&&(ye(n.BLEND),M=!0),j!==jM){if(j!==x||Et!==D){if((y!==Ms||b!==Ms)&&(n.blendEquation(n.FUNC_ADD),y=Ms,b=Ms),Et)switch(j){case Ro:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zv:n.blendFunc(n.ONE,n.ONE);break;case Vv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}P=null,R=null,N=null,F=null,U.set(0,0,0),B=0,x=j,D=Et}return}Le=Le||Re,De=De||se,at=at||he,(Re!==y||Le!==b)&&(n.blendEquationSeparate(_t[Re],_t[Le]),y=Re,b=Le),(se!==P||he!==R||De!==N||at!==F)&&(n.blendFuncSeparate(Ut[se],Ut[he],Ut[De],Ut[at]),P=se,R=he,N=De,F=at),(Ot.equals(U)===!1||rn!==B)&&(n.blendColor(Ot.r,Ot.g,Ot.b,rn),U.copy(Ot),B=rn),x=j,D=!1}function Rn(j,Re){j.side===ir?Ae(n.CULL_FACE):ye(n.CULL_FACE);let se=j.side===Gn;Re&&(se=!se),gt(se),j.blending===Ro&&j.transparent===!1?H(Gr):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),a.setMask(j.colorWrite);const he=j.stencilWrite;c.setTest(he),he&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),bt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(j){C!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),C=j)}function ht(j){j!==HM?(ye(n.CULL_FACE),j!==V&&(j===kv?n.cullFace(n.BACK):j===GM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),V=j}function $e(j){j!==ae&&(ue&&n.lineWidth(j),ae=j)}function bt(j,Re,se){j?(ye(n.POLYGON_OFFSET_FILL),(Q!==Re||ce!==se)&&(n.polygonOffset(Re,se),Q=Re,ce=se)):Ae(n.POLYGON_OFFSET_FILL)}function qe(j){j?ye(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function L(j){j===void 0&&(j=n.TEXTURE0+pe-1),le!==j&&(n.activeTexture(j),le=j)}function w(j,Re,se){se===void 0&&(le===null?se=n.TEXTURE0+pe-1:se=le);let he=re[se];he===void 0&&(he={type:void 0,texture:void 0},re[se]=he),(he.type!==j||he.texture!==Re)&&(le!==se&&(n.activeTexture(se),le=se),n.bindTexture(j,Re||Te[j]),he.type=j,he.texture=Re)}function $(){const j=re[le];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{n.texSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function je(){try{n.texSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(){try{n.texImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{n.texImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function nt(j){Fe.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),Fe.copy(j))}function He(j){K.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),K.copy(j))}function pt(j,Re){let se=h.get(Re);se===void 0&&(se=new WeakMap,h.set(Re,se));let he=se.get(j);he===void 0&&(he=n.getUniformBlockIndex(Re,j.name),se.set(j,he))}function ot(j,Re){const he=h.get(Re).get(j);d.get(Re)!==he&&(n.uniformBlockBinding(Re,he,j.__bindingPointIndex),d.set(Re,he))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},le=null,re={},g={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,P=null,R=null,b=null,N=null,F=null,U=new Pt(0,0,0),B=0,D=!1,C=null,V=null,ae=null,Q=null,ce=null,Fe.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ye,disable:Ae,bindFramebuffer:Oe,drawBuffers:et,useProgram:Dt,setBlending:H,setMaterial:Rn,setFlipSided:gt,setCullFace:ht,setLineWidth:$e,setPolygonOffset:bt,setScissorTest:qe,activeTexture:L,bindTexture:w,unbindTexture:$,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Ve,texImage3D:Ze,updateUBOMapping:pt,uniformBlockBinding:ot,texStorage2D:dt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:je,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Be,scissor:nt,viewport:He,reset:Rt}}function OR(n,e,t,r,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,p=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return S?new OffscreenCanvas(L,w):ec("canvas")}function M(L,w,$){let me=1;const ve=qe(L);if((ve.width>$||ve.height>$)&&(me=$/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(me*ve.width),je=Math.floor(me*ve.height);g===void 0&&(g=E(de,je));const Ce=w?E(de,je):g;return Ce.width=de,Ce.height=je,Ce.getContext("2d").drawImage(L,0,0,de,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+je+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function x(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(L,w,$,me,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=w;if(w===n.RED&&($===n.FLOAT&&(de=n.R32F),$===n.HALF_FLOAT&&(de=n.R16F),$===n.UNSIGNED_BYTE&&(de=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.R8UI),$===n.UNSIGNED_SHORT&&(de=n.R16UI),$===n.UNSIGNED_INT&&(de=n.R32UI),$===n.BYTE&&(de=n.R8I),$===n.SHORT&&(de=n.R16I),$===n.INT&&(de=n.R32I)),w===n.RG&&($===n.FLOAT&&(de=n.RG32F),$===n.HALF_FLOAT&&(de=n.RG16F),$===n.UNSIGNED_BYTE&&(de=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RG8UI),$===n.UNSIGNED_SHORT&&(de=n.RG16UI),$===n.UNSIGNED_INT&&(de=n.RG32UI),$===n.BYTE&&(de=n.RG8I),$===n.SHORT&&(de=n.RG16I),$===n.INT&&(de=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGB8UI),$===n.UNSIGNED_SHORT&&(de=n.RGB16UI),$===n.UNSIGNED_INT&&(de=n.RGB32UI),$===n.BYTE&&(de=n.RGB8I),$===n.SHORT&&(de=n.RGB16I),$===n.INT&&(de=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),$===n.UNSIGNED_INT&&(de=n.RGBA32UI),$===n.BYTE&&(de=n.RGBA8I),$===n.SHORT&&(de=n.RGBA16I),$===n.INT&&(de=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),w===n.RGBA){const je=ve?Qu:Ct.getTransfer(me);$===n.FLOAT&&(de=n.RGBA32F),$===n.HALF_FLOAT&&(de=n.RGBA16F),$===n.UNSIGNED_BYTE&&(de=je===It?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(L,w){let $;return L?w===null||w===Ls||w===No?$=n.DEPTH24_STENCIL8:w===rr?$=n.DEPTH32F_STENCIL8:w===ka&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ls||w===No?$=n.DEPTH_COMPONENT24:w===rr?$=n.DEPTH_COMPONENT32F:w===ka&&($=n.DEPTH_COMPONENT16),$}function N(L,w){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ri&&L.minFilter!==Bi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){const w=L.target;w.removeEventListener("dispose",F),B(w),w.isVideoTexture&&p.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),C(w)}function B(L){const w=r.get(L);if(w.__webglInit===void 0)return;const $=L.source,me=v.get($);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(L),Object.keys(me).length===0&&v.delete($)}r.remove(L)}function D(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const $=L.source,me=v.get($);delete me[w.__cacheKey],u.memory.textures--}function C(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)n.deleteFramebuffer(w.__webglFramebuffer[me]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=L.textures;for(let me=0,ve=$.length;me<ve;me++){const de=r.get($[me]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove($[me])}r.remove(L)}let V=0;function ae(){V=0}function Q(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function ce(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function pe(L,w){const $=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,L,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function ue(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){K($,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function ie(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){K($,L,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function z(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){fe($,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const le={[hh]:n.REPEAT,[ws]:n.CLAMP_TO_EDGE,[ph]:n.MIRRORED_REPEAT},re={[Ri]:n.NEAREST,[_T]:n.NEAREST_MIPMAP_NEAREST,[du]:n.NEAREST_MIPMAP_LINEAR,[Bi]:n.LINEAR,[ud]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},O={[MT]:n.NEVER,[bT]:n.ALWAYS,[TT]:n.LESS,[Ly]:n.LEQUAL,[wT]:n.EQUAL,[RT]:n.GEQUAL,[AT]:n.GREATER,[CT]:n.NOTEQUAL};function te(L,w){if(w.type===rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bi||w.magFilter===ud||w.magFilter===du||w.magFilter===As||w.minFilter===Bi||w.minFilter===ud||w.minFilter===du||w.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,le[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,le[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,le[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ri||w.minFilter!==du&&w.minFilter!==As||w.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const de=ce(w);if(de!==L.__cacheKey){ve[de]===void 0&&(ve[de]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ve[de].usedTimes++;const je=ve[L.__cacheKey];je!==void 0&&(ve[L.__cacheKey].usedTimes--,je.usedTimes===0&&D(w)),L.__cacheKey=de,L.__webglTexture=ve[de].texture}return $}function K(L,w,$){let me=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=n.TEXTURE_3D);const ve=Fe(L,w),de=w.source;t.bindTexture(me,L.__webglTexture,n.TEXTURE0+$);const je=r.get(de);if(de.version!==je.__version||ve===!0){t.activeTexture(n.TEXTURE0+$);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Be=w.colorSpace===Hr?null:Ct.getPrimaries(w.colorSpace),dt=w.colorSpace===Hr||Ce===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=M(w.image,!1,o.maxTextureSize);Me=bt(w,Me);const Ve=a.convert(w.format,w.colorSpace),Ze=a.convert(w.type);let nt=R(w.internalFormat,Ve,Ze,w.colorSpace,w.isVideoTexture);te(me,w);let He;const pt=w.mipmaps,ot=w.isVideoTexture!==!0,Rt=je.__version===void 0||ve===!0,j=de.dataReady,Re=N(w,Me);if(w.isDepthTexture)nt=b(w.format===Uo,w.type),Rt&&(ot?t.texStorage2D(n.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,nt,Me.width,Me.height,0,Ve,Ze,null));else if(w.isDataTexture)if(pt.length>0){ot&&Rt&&t.texStorage2D(n.TEXTURE_2D,Re,nt,pt[0].width,pt[0].height);for(let se=0,he=pt.length;se<he;se++)He=pt[se],ot?j&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,He.width,He.height,Ve,Ze,He.data):t.texImage2D(n.TEXTURE_2D,se,nt,He.width,He.height,0,Ve,Ze,He.data);w.generateMipmaps=!1}else ot?(Rt&&t.texStorage2D(n.TEXTURE_2D,Re,nt,Me.width,Me.height),j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Ve,Ze,Me.data)):t.texImage2D(n.TEXTURE_2D,0,nt,Me.width,Me.height,0,Ve,Ze,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,nt,pt[0].width,pt[0].height,Me.depth);for(let se=0,he=pt.length;se<he;se++)if(He=pt[se],w.format!==Ci)if(Ve!==null)if(ot){if(j)if(w.layerUpdates.size>0){const Le=f0(He.width,He.height,w.format,w.type);for(const De of w.layerUpdates){const at=He.data.subarray(De*Le/He.data.BYTES_PER_ELEMENT,(De+1)*Le/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,De,He.width,He.height,1,Ve,at)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,He.width,He.height,Me.depth,Ve,He.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,nt,He.width,He.height,Me.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?j&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,He.width,He.height,Me.depth,Ve,Ze,He.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,nt,He.width,He.height,Me.depth,0,Ve,Ze,He.data)}else{ot&&Rt&&t.texStorage2D(n.TEXTURE_2D,Re,nt,pt[0].width,pt[0].height);for(let se=0,he=pt.length;se<he;se++)He=pt[se],w.format!==Ci?Ve!==null?ot?j&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,He.width,He.height,Ve,He.data):t.compressedTexImage2D(n.TEXTURE_2D,se,nt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?j&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,He.width,He.height,Ve,Ze,He.data):t.texImage2D(n.TEXTURE_2D,se,nt,He.width,He.height,0,Ve,Ze,He.data)}else if(w.isDataArrayTexture)if(ot){if(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),j)if(w.layerUpdates.size>0){const se=f0(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const Le=Me.data.subarray(he*se/Me.data.BYTES_PER_ELEMENT,(he+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Ve,Ze,Le)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Ze,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Ve,Ze,Me.data);else if(w.isData3DTexture)ot?(Rt&&t.texStorage3D(n.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),j&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Ze,Me.data)):t.texImage3D(n.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Ve,Ze,Me.data);else if(w.isFramebufferTexture){if(Rt)if(ot)t.texStorage2D(n.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let se=Me.width,he=Me.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,nt,se,he,0,Ve,Ze,null),se>>=1,he>>=1}}else if(pt.length>0){if(ot&&Rt){const se=qe(pt[0]);t.texStorage2D(n.TEXTURE_2D,Re,nt,se.width,se.height)}for(let se=0,he=pt.length;se<he;se++)He=pt[se],ot?j&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ve,Ze,He):t.texImage2D(n.TEXTURE_2D,se,nt,Ve,Ze,He);w.generateMipmaps=!1}else if(ot){if(Rt){const se=qe(Me);t.texStorage2D(n.TEXTURE_2D,Re,nt,se.width,se.height)}j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,Ze,Me)}else t.texImage2D(n.TEXTURE_2D,0,nt,Ve,Ze,Me);x(w)&&y(me),je.__version=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,$){if(w.image.length!==6)return;const me=Fe(L,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const de=r.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(n.TEXTURE0+$);const je=Ct.getPrimaries(Ct.workingColorSpace),Ce=w.colorSpace===Hr?null:Ct.getPrimaries(w.colorSpace),Be=w.colorSpace===Hr||je===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const dt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ve=[];for(let he=0;he<6;he++)!dt&&!Me?Ve[he]=M(w.image[he],!0,o.maxCubemapSize):Ve[he]=Me?w.image[he].image:w.image[he],Ve[he]=bt(w,Ve[he]);const Ze=Ve[0],nt=a.convert(w.format,w.colorSpace),He=a.convert(w.type),pt=R(w.internalFormat,nt,He,w.colorSpace),ot=w.isVideoTexture!==!0,Rt=de.__version===void 0||me===!0,j=ve.dataReady;let Re=N(w,Ze);te(n.TEXTURE_CUBE_MAP,w);let se;if(dt){ot&&Rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,pt,Ze.width,Ze.height);for(let he=0;he<6;he++){se=Ve[he].mipmaps;for(let Le=0;Le<se.length;Le++){const De=se[Le];w.format!==Ci?nt!==null?ot?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,De.width,De.height,nt,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,pt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,De.width,De.height,nt,He,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,pt,De.width,De.height,0,nt,He,De.data)}}}else{if(se=w.mipmaps,ot&&Rt){se.length>0&&Re++;const he=qe(Ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,pt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){ot?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ve[he].width,Ve[he].height,nt,He,Ve[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pt,Ve[he].width,Ve[he].height,0,nt,He,Ve[he].data);for(let Le=0;Le<se.length;Le++){const at=se[Le].image[he].image;ot?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,at.width,at.height,nt,He,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,pt,at.width,at.height,0,nt,He,at.data)}}else{ot?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,nt,He,Ve[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pt,nt,He,Ve[he]);for(let Le=0;Le<se.length;Le++){const De=se[Le];ot?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,nt,He,De.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,pt,nt,He,De.image[he])}}}x(w)&&y(n.TEXTURE_CUBE_MAP),de.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Te(L,w,$,me,ve,de){const je=a.convert($.format,$.colorSpace),Ce=a.convert($.type),Be=R($.internalFormat,je,Ce,$.colorSpace),dt=r.get(w),Me=r.get($);if(Me.__renderTarget=w,!dt.__hasExternalTextures){const Ve=Math.max(1,w.width>>de),Ze=Math.max(1,w.height>>de);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Be,Ve,Ze,w.depth,0,je,Ce,null):t.texImage2D(ve,de,Be,Ve,Ze,0,je,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ht(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ve,Me.__webglTexture,0,gt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ve,Me.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(L,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=b(w.stencilBuffer,ve),je=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=gt(w);ht(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,de,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,je,n.RENDERBUFFER,L)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],je=a.convert(de.format,de.colorSpace),Ce=a.convert(de.type),Be=R(de.internalFormat,je,Ce,de.colorSpace),dt=gt(w);$&&ht(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Be,w.width,w.height):ht(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Be,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Be,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ve=me.__webglTexture,de=gt(w);if(w.depthTexture.format===bo)ht(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Uo)ht(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const w=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if($){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=n.createRenderbuffer(),ye(w.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,de)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ye(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(L,w,$){const me=r.get(L);w!==void 0&&Te(me.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Oe(L)}function Dt(L){const w=L.texture,$=r.get(L),me=r.get(w);L.addEventListener("dispose",U);const ve=L.textures,de=L.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=w.version,u.memory.textures++),de){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let Be=0;Be<w.mipmaps.length;Be++)$.__webglFramebuffer[Ce][Be]=n.createFramebuffer()}else $.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(je)for(let Ce=0,Be=ve.length;Ce<Be;Ce++){const dt=r.get(ve[Ce]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&ht(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Be=ve[Ce];$.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const dt=a.convert(Be.format,Be.colorSpace),Me=a.convert(Be.type),Ve=R(Be.internalFormat,dt,Me,Be.colorSpace,L.isXRRenderTarget===!0),Ze=gt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Ve,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ye($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),te(n.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Te($.__webglFramebuffer[Ce][Be],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Be);else Te($.__webglFramebuffer[Ce],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ce=0,Be=ve.length;Ce<Be;Ce++){const dt=ve[Ce],Me=r.get(dt);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),te(n.TEXTURE_2D,dt),Te($.__webglFramebuffer,L,dt,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),x(dt)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),te(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Te($.__webglFramebuffer[Be],L,w,n.COLOR_ATTACHMENT0,Ce,Be);else Te($.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ce,0);x(w)&&y(Ce),t.unbindTexture()}L.depthBuffer&&Oe(L)}function _t(L){const w=L.textures;for(let $=0,me=w.length;$<me;$++){const ve=w[$];if(x(ve)){const de=P(L),je=r.get(ve).__webglTexture;t.bindTexture(de,je),y(de),t.unbindTexture()}}}const Ut=[],H=[];function Rn(L){if(L.samples>0){if(ht(L)===!1){const w=L.textures,$=L.width,me=L.height;let ve=n.COLOR_BUFFER_BIT;const de=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,je=r.get(L),Ce=w.length>1;if(Ce)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,je.__webglColorRenderbuffer[Be]);const dt=r.get(w[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,dt,0)}n.blitFramebuffer(0,0,$,me,0,0,$,me,ve,n.NEAREST),d===!0&&(Ut.length=0,H.length=0,Ut.push(n.COLOR_ATTACHMENT0+Be),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ut.push(de),H.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,je.__webglColorRenderbuffer[Be]);const dt=r.get(w[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,dt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function gt(L){return Math.min(o.maxSamples,L.samples)}function ht(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(L){const w=u.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function bt(L,w){const $=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Fo&&$!==Hr&&(Ct.getTransfer($)===It?(me!==Ci||ve!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=ue,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ht}function BR(n,e){function t(r,o=Hr){let a;const u=Ct.getTransfer(o);if(r===cr)return n.UNSIGNED_BYTE;if(r===gp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ty)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Ey)return n.BYTE;if(r===My)return n.SHORT;if(r===ka)return n.UNSIGNED_SHORT;if(r===mp)return n.INT;if(r===Ls)return n.UNSIGNED_INT;if(r===rr)return n.FLOAT;if(r===Xa)return n.HALF_FLOAT;if(r===wy)return n.ALPHA;if(r===Ay)return n.RGB;if(r===Ci)return n.RGBA;if(r===Cy)return n.LUMINANCE;if(r===Ry)return n.LUMINANCE_ALPHA;if(r===bo)return n.DEPTH_COMPONENT;if(r===Uo)return n.DEPTH_STENCIL;if(r===by)return n.RED;if(r===_p)return n.RED_INTEGER;if(r===Py)return n.RG;if(r===yp)return n.RG_INTEGER;if(r===xp)return n.RGBA_INTEGER;if(r===zu||r===Vu||r===Hu||r===Gu)if(u===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===gh||r===vh||r===_h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh||r===xh||r===Sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yh||r===xh)return u===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Sh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Eh||r===Mh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===bh||r===Ph||r===Dh||r===Lh||r===Ih||r===Nh||r===Uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Eh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Th)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ch)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ph)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wu||r===Fh||r===Oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wu)return u===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dy||r===Bh||r===kh||r===zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const kR={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,r),y=this._getHandJoint(h,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kR)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Lu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Wn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Xr({vertexShader:zR,fragmentShader:VR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new or(new dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GR extends Vo{constructor(e,t){super();const r=this;let o=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,v=null,S=null,E=null;const M=new HR,x=t.getContextAttributes();let y=null,P=null;const R=[],b=[],N=new Nt;let F=null;const U=new di;U.viewport=new Qt;const B=new di;B.viewport=new Qt;const D=[U,B],C=new cw;let V=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=R[K];return fe===void 0&&(fe=new Bd,R[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=R[K];return fe===void 0&&(fe=new Bd,R[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=R[K];return fe===void 0&&(fe=new Bd,R[K]=fe),fe.getHandSpace()};function Q(K){const fe=b.indexOf(K.inputSource);if(fe===-1)return;const Te=R[fe];Te!==void 0&&(Te.update(K.inputSource,K.frame,h||u),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function ce(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",pe);for(let K=0;K<R.length;K++){const fe=b[K];fe!==null&&(b[K]=null,R[K].disconnect(fe))}V=null,ae=null,M.reset(),e.setRenderTarget(y),S=null,v=null,g=null,o=null,P=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",pe),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),o.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Is(S.framebufferWidth,S.framebufferHeight,{format:Ci,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,Te=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Uo:bo,Te=x.stencil?No:Ls);const Ae={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Is(v.textureWidth,v.textureHeight,{format:Ci,type:cr,depthTexture:new qy(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function pe(K){for(let fe=0;fe<K.removed.length;fe++){const Te=K.removed[fe],ye=b.indexOf(Te);ye>=0&&(b[ye]=null,R[ye].disconnect(Te))}for(let fe=0;fe<K.added.length;fe++){const Te=K.added[fe];let ye=b.indexOf(Te);if(ye===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=b.length){b.push(Te),ye=Oe;break}else if(b[Oe]===null){b[Oe]=Te,ye=Oe;break}if(ye===-1)break}const Ae=R[ye];Ae&&Ae.connect(Te)}}const ue=new ne,ie=new ne;function z(K,fe,Te){ue.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);const ye=ue.distanceTo(ie),Ae=fe.projectionMatrix.elements,Oe=Te.projectionMatrix.elements,et=Ae[14]/(Ae[10]-1),Dt=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],Ut=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],Rn=(Oe[8]+1)/Oe[0],gt=et*H,ht=et*Rn,$e=ye/(-H+Rn),bt=$e*-H;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(bt),K.translateZ($e),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=et+$e,L=Dt+$e,w=gt-bt,$=ht+(ye-bt),me=_t*Dt/L*qe,ve=Ut*Dt/L*qe;K.projectionMatrix.makePerspective(w,$,me,ve,qe,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let fe=K.near,Te=K.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),C.near=B.near=U.near=fe,C.far=B.far=U.far=Te,(V!==C.near||ae!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ae=C.far),U.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,C.layers.mask=U.layers.mask|B.layers.mask;const ye=K.parent,Ae=C.cameras;le(C,ye);for(let Oe=0;Oe<Ae.length;Oe++)le(Ae[Oe],ye);Ae.length===2?z(C,U,B):C.projectionMatrix.copy(U.projectionMatrix),re(K,C,ye)};function re(K,fe,Te){Te===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(K){d=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let O=null;function te(K,fe){if(p=fe.getViewerPose(h||u),E=fe,p!==null){const Te=p.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let ye=!1;Te.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Oe=0;Oe<Te.length;Oe++){const et=Te[Oe];let Dt=null;if(S!==null)Dt=S.getViewport(et);else{const Ut=g.getViewSubImage(v,et);Dt=Ut.viewport,Oe===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,v.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(P))}let _t=D[Oe];_t===void 0&&(_t=new di,_t.layers.enable(Oe),_t.viewport=new Qt,D[Oe]=_t),_t.matrix.fromArray(et.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(et.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Oe===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(_t)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Oe=g.getDepthInformation(Te[0]);Oe&&Oe.isValid&&Oe.texture&&M.init(e,Oe,o.renderState)}}for(let Te=0;Te<R.length;Te++){const ye=b[Te],Ae=R[Te];ye!==null&&Ae!==void 0&&Ae.update(ye,fe,h||u)}O&&O(K,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Fe=new Yy;Fe.setAnimationLoop(te),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}}const vs=new fr,WR=new Jt;function jR(n,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Hy(n)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,P,R,b){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(x,y):y.isMeshToonMaterial?(a(x,y),g(x,y)):y.isMeshPhongMaterial?(a(x,y),p(x,y)):y.isMeshStandardMaterial?(a(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,b)):y.isMeshMatcapMaterial?(a(x,y),E(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),M(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?d(x,y,P,R):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Gn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Gn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const P=e.get(y),R=P.envMap,b=P.envMapRotation;R&&(x.envMap.value=R,vs.copy(b),vs.x*=-1,vs.y*=-1,vs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),x.envMapRotation.value.setFromMatrix4(WR.makeRotationFromEuler(vs)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,P,R){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*P,x.scale.value=R*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,P){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Gn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const P=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function XR(n,e,t,r){let o={},a={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,R){const b=R.program;r.uniformBlockBinding(P,b)}function h(P,R){let b=o[P.id];b===void 0&&(E(P),b=p(P),o[P.id]=b,P.addEventListener("dispose",x));const N=R.program;r.updateUBOMapping(P,N);const F=e.render.frame;a[P.id]!==F&&(v(P),a[P.id]=F)}function p(P){const R=g();P.__bindingPointIndex=R;const b=n.createBuffer(),N=P.__size,F=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,b),b}function g(){for(let P=0;P<c;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const R=o[P.id],b=P.uniforms,N=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let F=0,U=b.length;F<U;F++){const B=Array.isArray(b[F])?b[F]:[b[F]];for(let D=0,C=B.length;D<C;D++){const V=B[D];if(S(V,F,D,N)===!0){const ae=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let ce=0;for(let pe=0;pe<Q.length;pe++){const ue=Q[pe],ie=M(ue);typeof ue=="number"||typeof ue=="boolean"?(V.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,ae+ce,V.__data)):ue.isMatrix3?(V.__data[0]=ue.elements[0],V.__data[1]=ue.elements[1],V.__data[2]=ue.elements[2],V.__data[3]=0,V.__data[4]=ue.elements[3],V.__data[5]=ue.elements[4],V.__data[6]=ue.elements[5],V.__data[7]=0,V.__data[8]=ue.elements[6],V.__data[9]=ue.elements[7],V.__data[10]=ue.elements[8],V.__data[11]=0):(ue.toArray(V.__data,ce),ce+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(P,R,b,N){const F=P.value,U=R+"_"+b;if(N[U]===void 0)return typeof F=="number"||typeof F=="boolean"?N[U]=F:N[U]=F.clone(),!0;{const B=N[U];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return N[U]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function E(P){const R=P.uniforms;let b=0;const N=16;for(let U=0,B=R.length;U<B;U++){const D=Array.isArray(R[U])?R[U]:[R[U]];for(let C=0,V=D.length;C<V;C++){const ae=D[C],Q=Array.isArray(ae.value)?ae.value:[ae.value];for(let ce=0,pe=Q.length;ce<pe;ce++){const ue=Q[ce],ie=M(ue),z=b%N,le=z%ie.boundary,re=z+le;b+=le,re!==0&&N-re<ie.storage&&(b+=N-re),ae.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=b,b+=ie.storage}}}const F=b%N;return F>0&&(b+=N-F),P.__size=b,P.__cache={},this}function M(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function x(P){const R=P.target;R.removeEventListener("dispose",x);const b=u.indexOf(R.__bindingPointIndex);u.splice(b,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete a[R.id]}function y(){for(const P in o)n.deleteBuffer(o[P]);u=[],o={},a={}}return{bind:d,update:h,dispose:y}}class qR{constructor(e={}){const{canvas:t=DT(),context:r=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,y=null;const P=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Wr,this.toneMappingExposure=1;const b=this;let N=!1,F=0,U=0,B=null,D=-1,C=null;const V=new Qt,ae=new Qt;let Q=null;const ce=new Pt(0);let pe=0,ue=t.width,ie=t.height,z=1,le=null,re=null;const O=new Qt(0,0,ue,ie),te=new Qt(0,0,ue,ie);let Fe=!1;const K=new jy;let fe=!1,Te=!1;const ye=new Jt,Ae=new Jt,Oe=new ne,et=new Qt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ut(){return B===null?z:1}let H=r;function Rn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pp}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const X="webgl2";if(H=Rn(X,A),H===null)throw Rn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,ht,$e,bt,qe,L,w,$,me,ve,de,je,Ce,Be,dt,Me,Ve,Ze,nt,He,pt,ot,Rt,j;function Re(){gt=new nC(H),gt.init(),ot=new BR(H,gt),ht=new KA(H,gt,e,ot),$e=new FR(H,gt),ht.reverseDepthBuffer&&v&&$e.buffers.depth.setReversed(!0),bt=new sC(H),qe=new MR,L=new OR(H,gt,$e,qe,ht,ot,bt),w=new QA(b),$=new tC(b),me=new dw(H),Rt=new YA(H,me),ve=new iC(H,me,bt,Rt),de=new aC(H,ve,me,bt),nt=new oC(H,ht,L),Me=new ZA(qe),je=new ER(b,w,$,gt,ht,Rt,Me),Ce=new jR(b,qe),Be=new wR,dt=new DR(gt),Ze=new qA(b,w,$,$e,de,S,d),Ve=new NR(b,de,ht),j=new XR(H,bt,ht,$e),He=new $A(H,gt,bt),pt=new rC(H,gt,bt),bt.programs=je.programs,b.capabilities=ht,b.extensions=gt,b.properties=qe,b.renderLists=Be,b.shadowMap=Ve,b.state=$e,b.info=bt}Re();const se=new GR(b,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(ue,ie,!1))},this.getSize=function(A){return A.set(ue,ie)},this.setSize=function(A,X,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,ie=X,t.width=Math.floor(A*z),t.height=Math.floor(X*z),J===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ue*z,ie*z).floor()},this.setDrawingBufferSize=function(A,X,J){ue=A,ie=X,z=J,t.width=Math.floor(A*J),t.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,X,J,ee){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,X,J,ee),$e.viewport(V.copy(O).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,X,J,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,X,J,ee),$e.scissor(ae.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){$e.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,X=!0,J=!0){let ee=0;if(A){let G=!1;if(B!==null){const Ee=B.texture.format;G=Ee===xp||Ee===yp||Ee===_p}if(G){const Ee=B.texture.type,be=Ee===cr||Ee===Ls||Ee===ka||Ee===No||Ee===gp||Ee===vp,Ue=Ze.getClearColor(),ke=Ze.getClearAlpha(),it=Ue.r,rt=Ue.g,Ye=Ue.b;be?(E[0]=it,E[1]=rt,E[2]=Ye,E[3]=ke,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=it,M[1]=rt,M[2]=Ye,M[3]=ke,H.clearBufferiv(H.COLOR,0,M))}else ee|=H.COLOR_BUFFER_BIT}X&&(ee|=H.DEPTH_BUFFER_BIT),J&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ze.dispose(),Be.dispose(),dt.dispose(),qe.dispose(),w.dispose(),$.dispose(),de.dispose(),Rt.dispose(),j.dispose(),je.dispose(),se.dispose(),se.removeEventListener("sessionstart",Fs),se.removeEventListener("sessionend",pr),Vi.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=bt.autoReset,X=Ve.enabled,J=Ve.autoUpdate,ee=Ve.needsUpdate,G=Ve.type;Re(),bt.autoReset=A,Ve.enabled=X,Ve.autoUpdate=J,Ve.needsUpdate=ee,Ve.type=G}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const X=A.target;X.removeEventListener("dispose",at),Ot(X)}function Ot(A){rn(A),qe.remove(A)}function rn(A){const X=qe.get(A).programs;X!==void 0&&(X.forEach(function(J){je.releaseProgram(J)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,ee,G,Ee){X===null&&(X=Dt);const be=G.isMesh&&G.matrixWorld.determinant()<0,Ue=al(A,X,J,ee,G);$e.setMaterial(ee,be);let ke=J.index,it=1;if(ee.wireframe===!0){if(ke=ve.getWireframeAttribute(J),ke===void 0)return;it=2}const rt=J.drawRange,Ye=J.attributes.position;let lt=rt.start*it,Tt=(rt.start+rt.count)*it;Ee!==null&&(lt=Math.max(lt,Ee.start*it),Tt=Math.min(Tt,(Ee.start+Ee.count)*it)),ke!==null?(lt=Math.max(lt,0),Tt=Math.min(Tt,ke.count)):Ye!=null&&(lt=Math.max(lt,0),Tt=Math.min(Tt,Ye.count));const wt=Tt-lt;if(wt<0||wt===1/0)return;Rt.setup(G,ee,Ue,J,ke);let Vt,St=He;if(ke!==null&&(Vt=me.get(ke),St=pt,St.setIndex(Vt)),G.isMesh)ee.wireframe===!0?($e.setLineWidth(ee.wireframeLinewidth*Ut()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(G.isLine){let Ke=ee.linewidth;Ke===void 0&&(Ke=1),$e.setLineWidth(Ke*Ut()),G.isLineSegments?St.setMode(H.LINES):G.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else G.isPoints?St.setMode(H.POINTS):G.isSprite&&St.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ke=G._multiDrawStarts,Xt=G._multiDrawCounts,yt=G._multiDrawCount,hn=ke?me.get(ke).bytesPerElement:1,pi=qe.get(ee).currentProgram.getUniforms();for(let Pn=0;Pn<yt;Pn++)pi.setValue(H,"_gl_DrawID",Pn),St.render(Ke[Pn]/hn,Xt[Pn])}else if(G.isInstancedMesh)St.renderInstances(lt,wt,G.count);else if(J.isInstancedBufferGeometry){const Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Ke);St.renderInstances(lt,wt,Xt)}else St.render(lt,wt)};function Et(A,X,J){A.transparent===!0&&A.side===ir&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Os(A,X,J),A.side=jr,A.needsUpdate=!0,Os(A,X,J),A.side=ir):Os(A,X,J)}this.compile=function(A,X,J=null){J===null&&(J=A),y=dt.get(J),y.init(X),R.push(y),J.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Ue=Ee[be];Et(Ue,J,G),ee.add(Ue)}else Et(Ee,J,G),ee.add(Ee)}),R.pop(),y=null,ee},this.compileAsync=function(A,X,J=null){const ee=this.compile(A,X,J);return new Promise(G=>{function Ee(){if(ee.forEach(function(be){qe.get(be).currentProgram.isReady()&&ee.delete(be)}),ee.size===0){G(A);return}setTimeout(Ee,10)}gt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Un=null;function bn(A){Un&&Un(A)}function Fs(){Vi.stop()}function pr(){Vi.start()}const Vi=new Yy;Vi.setAnimationLoop(bn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){Un=A,se.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},se.addEventListener("sessionstart",Fs),se.addEventListener("sessionend",pr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,X,B),y=dt.get(A,R.length),y.init(X),R.push(y),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Te),x=Be.get(A,P.length),x.init(),P.push(x),se.enabled===!0&&se.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Hi(Ee,X,-1/0,b.sortObjects)}Hi(A,X,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(le,re),_t=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,_t&&Ze.addToRenderList(x,A),this.info.render.frame++,fe===!0&&Me.beginShadows();const J=y.state.shadowsArray;Ve.render(J,A,X),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=x.opaque,G=x.transmissive;if(y.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(G.length>0)for(let be=0,Ue=Ee.length;be<Ue;be++){const ke=Ee[be];Zr(ee,G,A,ke)}_t&&Ze.render(A);for(let be=0,Ue=Ee.length;be<Ue;be++){const ke=Ee[be];Kr(x,A,ke,ke.viewport)}}else G.length>0&&Zr(ee,G,A,X),_t&&Ze.render(A),Kr(x,A,X);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(b,A,X),Rt.resetDefaultState(),D=-1,C=null,R.pop(),R.length>0?(y=R[R.length-1],fe===!0&&Me.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function Hi(A,X,J,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){ee&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const be=de.update(A),Ue=A.material;Ue.visible&&x.push(A,be,Ue,J,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const be=de.update(A),Ue=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),et.copy(be.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ue)){const ke=be.groups;for(let it=0,rt=ke.length;it<rt;it++){const Ye=ke[it],lt=Ue[Ye.materialIndex];lt&&lt.visible&&x.push(A,be,lt,J,et.z,Ye)}}else Ue.visible&&x.push(A,be,Ue,J,et.z,null)}}const Ee=A.children;for(let be=0,Ue=Ee.length;be<Ue;be++)Hi(Ee[be],X,J,ee)}function Kr(A,X,J,ee){const G=A.opaque,Ee=A.transmissive,be=A.transparent;y.setupLightsView(J),fe===!0&&Me.setGlobalState(b.clippingPlanes,J),ee&&$e.viewport(V.copy(ee)),G.length>0&&mr(G,X,J),Ee.length>0&&mr(Ee,X,J),be.length>0&&mr(be,X,J),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Zr(A,X,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new Is(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Xa:cr,minFilter:As,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ee=y.state.transmissionRenderTarget[ee.id],be=ee.viewport||V;Ee.setSize(be.z,be.w);const Ue=b.getRenderTarget();b.setRenderTarget(Ee),b.getClearColor(ce),pe=b.getClearAlpha(),pe<1&&b.setClearColor(16777215,.5),b.clear(),_t&&Ze.render(J);const ke=b.toneMapping;b.toneMapping=Wr;const it=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),fe===!0&&Me.setGlobalState(b.clippingPlanes,ee),mr(A,J,ee),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),gt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ye=0,lt=X.length;Ye<lt;Ye++){const Tt=X[Ye],wt=Tt.object,Vt=Tt.geometry,St=Tt.material,Ke=Tt.group;if(St.side===ir&&wt.layers.test(ee.layers)){const Xt=St.side;St.side=Gn,St.needsUpdate=!0,sl(wt,J,ee,Vt,St,Ke),St.side=Xt,St.needsUpdate=!0,rt=!0}}rt===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}b.setRenderTarget(Ue),b.setClearColor(ce,pe),it!==void 0&&(ee.viewport=it),b.toneMapping=ke}function mr(A,X,J){const ee=X.isScene===!0?X.overrideMaterial:null;for(let G=0,Ee=A.length;G<Ee;G++){const be=A[G],Ue=be.object,ke=be.geometry,it=ee===null?be.material:ee,rt=be.group;Ue.layers.test(J.layers)&&sl(Ue,X,J,ke,it,rt)}}function sl(A,X,J,ee,G,Ee){A.onBeforeRender(b,X,J,ee,G,Ee),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(b,X,J,ee,A,Ee),G.transparent===!0&&G.side===ir&&G.forceSinglePass===!1?(G.side=Gn,G.needsUpdate=!0,b.renderBufferDirect(J,X,ee,G,A,Ee),G.side=jr,G.needsUpdate=!0,b.renderBufferDirect(J,X,ee,G,A,Ee),G.side=ir):b.renderBufferDirect(J,X,ee,G,A,Ee),A.onAfterRender(b,X,J,ee,G,Ee)}function Os(A,X,J){X.isScene!==!0&&(X=Dt);const ee=qe.get(A),G=y.state.lights,Ee=y.state.shadowsArray,be=G.state.version,Ue=je.getParameters(A,G.state,Ee,X,J),ke=je.getProgramCacheKey(Ue);let it=ee.programs;ee.environment=A.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",at),it=new Map,ee.programs=it);let rt=it.get(ke);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===be)return Di(A,Ue),rt}else Ue.uniforms=je.getUniforms(A),A.onBeforeCompile(Ue,b),rt=je.acquireProgram(Ue,ke),it.set(ke,rt),ee.uniforms=Ue.uniforms;const Ye=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Me.uniform),Di(A,Ue),ee.needsLights=Ac(A),ee.lightsStateVersion=be,ee.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=rt,ee.uniformsList=null,rt}function ol(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=ju.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Di(A,X){const J=qe.get(A);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function al(A,X,J,ee,G){X.isScene!==!0&&(X=Dt),L.resetTextureUnits();const Ee=X.fog,be=ee.isMeshStandardMaterial?X.environment:null,Ue=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Fo,ke=(ee.isMeshStandardMaterial?$:w).get(ee.envMap||be),it=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,rt=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ye=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,Tt=!!J.morphAttributes.color;let wt=Wr;ee.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(wt=b.toneMapping);const Vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Vt!==void 0?Vt.length:0,Ke=qe.get(ee),Xt=y.state.lights;if(fe===!0&&(Te===!0||A!==C)){const $t=A===C&&ee.id===D;Me.setState(ee,A,$t)}let yt=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xt.state.version||Ke.outputColorSpace!==Ue||G.isBatchedMesh&&Ke.batching===!1||!G.isBatchedMesh&&Ke.batching===!0||G.isBatchedMesh&&Ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ke.instancing===!1||!G.isInstancedMesh&&Ke.instancing===!0||G.isSkinnedMesh&&Ke.skinning===!1||!G.isSkinnedMesh&&Ke.skinning===!0||G.isInstancedMesh&&Ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ke.instancingMorph===!1&&G.morphTexture!==null||Ke.envMap!==ke||ee.fog===!0&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Me.numPlanes||Ke.numIntersection!==Me.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==rt||Ke.morphTargets!==Ye||Ke.morphNormals!==lt||Ke.morphColors!==Tt||Ke.toneMapping!==wt||Ke.morphTargetsCount!==St)&&(yt=!0):(yt=!0,Ke.__version=ee.version);let hn=Ke.currentProgram;yt===!0&&(hn=Os(ee,X,G));let pi=!1,Pn=!1,Qr=!1;const Lt=hn.getUniforms(),Dn=Ke.uniforms;if($e.useProgram(hn.program)&&(pi=!0,Pn=!0,Qr=!0),ee.id!==D&&(D=ee.id,Pn=!0),pi||C!==A){$e.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),IT(ye),NT(ye),Lt.setValue(H,"projectionMatrix",ye)):Lt.setValue(H,"projectionMatrix",A.projectionMatrix),Lt.setValue(H,"viewMatrix",A.matrixWorldInverse);const _n=Lt.map.cameraPosition;_n!==void 0&&_n.setValue(H,Oe.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Pn=!0,Qr=!0)}if(G.isSkinnedMesh){Lt.setOptional(H,G,"bindMatrix"),Lt.setOptional(H,G,"bindMatrixInverse");const $t=G.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Lt.setValue(H,"boneTexture",$t.boneTexture,L))}G.isBatchedMesh&&(Lt.setOptional(H,G,"batchingTexture"),Lt.setValue(H,"batchingTexture",G._matricesTexture,L),Lt.setOptional(H,G,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",G._indirectTexture,L),Lt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",G._colorsTexture,L));const vn=J.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&nt.update(G,J,hn),(Pn||Ke.receiveShadow!==G.receiveShadow)&&(Ke.receiveShadow=G.receiveShadow,Lt.setValue(H,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Dn.envMap.value=ke,Dn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(Dn.envMapIntensity.value=X.environmentIntensity),Pn&&(Lt.setValue(H,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&ll(Dn,Qr),Ee&&ee.fog===!0&&Ce.refreshFogUniforms(Dn,Ee),Ce.refreshMaterialUniforms(Dn,ee,z,ie,y.state.transmissionRenderTarget[A.id]),ju.upload(H,ol(Ke),Dn,L)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ju.upload(H,ol(Ke),Dn,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Lt.setValue(H,"center",G.center),Lt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(H,"normalMatrix",G.normalMatrix),Lt.setValue(H,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const $t=ee.uniformsGroups;for(let _n=0,Jr=$t.length;_n<Jr;_n++){const vt=$t[_n];j.update(vt,hn),j.bind(vt,hn)}}return hn}function ll(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ac(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,X,J){qe.get(A.texture).__webglTexture=X,qe.get(A.depthTexture).__webglTexture=J;const ee=qe.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const J=qe.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,J=0){B=A,F=X,U=J;let ee=!0,G=null,Ee=!1,be=!1;if(A){const ke=qe.get(A);if(ke.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(ke.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(ke.__hasExternalTextures)L.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(ke.__boundDepthTexture!==Ye){if(Ye!==null&&qe.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(be=!0);const rt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?G=rt[X][J]:G=rt[X],Ee=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?G=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?G=rt[J]:G=rt,V.copy(A.viewport),ae.copy(A.scissor),Q=A.scissorTest}else V.copy(O).multiplyScalar(z).floor(),ae.copy(te).multiplyScalar(z).floor(),Q=Fe;if($e.bindFramebuffer(H.FRAMEBUFFER,G)&&ee&&$e.drawBuffers(A,G),$e.viewport(V),$e.scissor(ae),$e.setScissorTest(Q),Ee){const ke=qe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,J)}else if(be){const ke=qe.get(A.texture),it=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,J||0,it)}D=-1},this.readRenderTargetPixels=function(A,X,J,ee,G,Ee,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){$e.bindFramebuffer(H.FRAMEBUFFER,Ue);try{const ke=A.texture,it=ke.format,rt=ke.type;if(!ht.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&J>=0&&J<=A.height-G&&H.readPixels(X,J,ee,G,ot.convert(it),ot.convert(rt),Ee)}finally{const ke=B!==null?qe.get(B).__webglFramebuffer:null;$e.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,J,ee,G,Ee,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){const ke=A.texture,it=ke.format,rt=ke.type;if(!ht.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ee&&J>=0&&J<=A.height-G){$e.bindFramebuffer(H.FRAMEBUFFER,Ue);const Ye=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(X,J,ee,G,ot.convert(it),ot.convert(rt),0);const lt=B!==null?qe.get(B).__webglFramebuffer:null;$e.bindFramebuffer(H.FRAMEBUFFER,lt);const Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await LT(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.deleteBuffer(Ye),H.deleteSync(Tt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,J=0){A.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-J),G=Math.floor(A.image.width*ee),Ee=Math.floor(A.image.height*ee),be=X!==null?X.x:0,Ue=X!==null?X.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,be,Ue,G,Ee),$e.unbindTexture()};const ul=H.createFramebuffer(),cl=H.createFramebuffer();this.copyTextureToTexture=function(A,X,J=null,ee=null,G=0,Ee=null){A.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],X=arguments[2],Ee=arguments[3]||0,J=null),Ee===null&&(G!==0?(So("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=G,G=0):Ee=0);let be,Ue,ke,it,rt,Ye,lt,Tt,wt;const Vt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(J!==null)be=J.max.x-J.min.x,Ue=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,it=J.min.x,rt=J.min.y,Ye=J.isBox3?J.min.z:0;else{const vn=Math.pow(2,-G);be=Math.floor(Vt.width*vn),Ue=Math.floor(Vt.height*vn),A.isDataArrayTexture?ke=Vt.depth:A.isData3DTexture?ke=Math.floor(Vt.depth*vn):ke=1,it=0,rt=0,Ye=0}ee!==null?(lt=ee.x,Tt=ee.y,wt=ee.z):(lt=0,Tt=0,wt=0);const St=ot.convert(X.format),Ke=ot.convert(X.type);let Xt;X.isData3DTexture?(L.setTexture3D(X,0),Xt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Xt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const yt=H.getParameter(H.UNPACK_ROW_LENGTH),hn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pi=H.getParameter(H.UNPACK_SKIP_PIXELS),Pn=H.getParameter(H.UNPACK_SKIP_ROWS),Qr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,it),H.pixelStorei(H.UNPACK_SKIP_ROWS,rt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ye);const Lt=A.isDataArrayTexture||A.isData3DTexture,Dn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const vn=qe.get(A),$t=qe.get(X),_n=qe.get(vn.__renderTarget),Jr=qe.get($t.__renderTarget);$e.bindFramebuffer(H.READ_FRAMEBUFFER,_n.__webglFramebuffer),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let vt=0;vt<ke;vt++)Lt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,G,Ye+vt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(X).__webglTexture,Ee,wt+vt)),H.blitFramebuffer(it,rt,be,Ue,lt,Tt,be,Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);$e.bindFramebuffer(H.READ_FRAMEBUFFER,null),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||qe.has(A)){const vn=qe.get(A),$t=qe.get(X);$e.bindFramebuffer(H.READ_FRAMEBUFFER,ul),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,cl);for(let _n=0;_n<ke;_n++)Lt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vn.__webglTexture,G,Ye+_n):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vn.__webglTexture,G),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.__webglTexture,Ee,wt+_n):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$t.__webglTexture,Ee),G!==0?H.blitFramebuffer(it,rt,be,Ue,lt,Tt,be,Ue,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Xt,Ee,lt,Tt,wt+_n,it,rt,be,Ue):H.copyTexSubImage2D(Xt,Ee,lt,Tt,it,rt,be,Ue);$e.bindFramebuffer(H.READ_FRAMEBUFFER,null),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Xt,Ee,lt,Tt,wt,be,Ue,ke,St,Ke,Vt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Ee,lt,Tt,wt,be,Ue,ke,St,Vt.data):H.texSubImage3D(Xt,Ee,lt,Tt,wt,be,Ue,ke,St,Ke,Vt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,lt,Tt,be,Ue,St,Ke,Vt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,lt,Tt,Vt.width,Vt.height,St,Vt.data):H.texSubImage2D(H.TEXTURE_2D,Ee,lt,Tt,be,Ue,St,Ke,Vt);H.pixelStorei(H.UNPACK_ROW_LENGTH,yt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,hn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qr),Ee===0&&X.generateMipmaps&&H.generateMipmap(Xt),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J=null,ee=null,G=0){return A.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],X=arguments[3],G=arguments[4]||0),So('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,J,ee,G)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){F=0,U=0,B=null,$e.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const YR="/assets/ish-CIdm2fTC.mp4",$R=()=>xe.jsx("div",{className:"relative min-h-screen py-20",children:xe.jsx("div",{className:"container mx-auto px-4",children:xe.jsx("div",{className:"max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-white/10",children:xe.jsx("video",{className:"w-full h-full object-cover",src:YR,controls:!0,autoPlay:!0,muted:!0,loop:!0})})})});function KR(){return xe.jsx("div",{className:"bg-transparent relative text-white p-8",children:xe.jsxs("div",{className:"max-w-4xl mx-auto",children:[xe.jsxs("div",{className:"text-center mb-16",children:[xe.jsx("h1",{className:"text-4xl font-bold mb-4",children:"BIZ HAQIMIZDA"}),xe.jsx("p",{className:"text-yellow-400",children:"🤝 Diqqat, diqqat! Yaxshi kayfiyatda, quvnoq muhitda ishlashga tayyormisiz? Vizzano-ga qo'shiling va kunlaringizni biz bilan zavqli o'tkazing! 🤝"})]}),xe.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[xe.jsxs("div",{className:"bg-sky-900 bg-opacity-30  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out",children:[xe.jsx("h2",{className:"text-2xl font-bold mb-2 gap-2",children:"👥 Do‘stona Jamoa"}),xe.jsx("h3",{className:"text-xl mb-2",children:"Birga ishlaymiz, birga kulamiz!"}),xe.jsx("p",{className:"text-gray-300",children:"Har kuni birga ishlash, birga o‘sish va yangi cho‘qqilarni zabt etish imkoniyati. Qulay ish joyi, zamonaviy texnika va do‘stona muhit – bizda bor!"})]}),xe.jsxs("div",{className:"bg-sky-900 bg-opacity-30  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out",children:[xe.jsx("h2",{className:"text-2xl font-bold mb-2 gap-2",children:"💼 Ish Sharoitlari"}),xe.jsx("h3",{className:"text-xl mb-2",children:"Barqaror va o‘z vaqtida to‘lovlar!"}),xe.jsx("p",{className:"text-gray-300",children:"📅 Yil bo‘yi ish bilan ta'minlanasiz va oylik ish haqi har oy o‘z vaqtida to‘lanadi. Qobiliyatingiz va mehnatingizga yarasha 2,500,000 dan 5,000,000 so‘mgacha maosh olish imkoniyati!"})]}),xe.jsxs("div",{className:"bg-sky-900 bg-opacity-30  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out",children:[xe.jsx("h2",{className:"text-2xl font-bold mb-2 gap-2",children:"📞 Aloqada Bo‘ling"}),xe.jsx("h3",{className:"text-xl mb-2",children:"Bizni tanlang!"}),xe.jsxs("p",{className:"text-gray-300",children:["Telefon: ",xe.jsx("a",{href:"tel: +998 99 512 33 66",children:"+998 99 512 33 66"}),xe.jsx("br",{})," Telegram:"," ",xe.jsx("a",{href:"https://www.t.me/Vizzano_HR_1",target:"_blank",children:"@Vizzano_HR_1"})," ",xe.jsx("br",{})," 📍 Manzil: Namangan shahar, Promzona, So‘lim Oshxonasi ortida."]})]})]})]})})}const ZR=()=>xe.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.7607478818616!2d71.6393844889193!3d41.01259491671092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b0eccf0455d%3A0xd9fc82d2acb2c3f4!2s%C2%ABSAODAT%20SANOAT%20SERVIS%C2%BB%20LLC%2C%20Vizzano%20uz!5e1!3m2!1sen!2s!4v1733921749133!5m2!1sen!2s",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-[90vw] h-[50vh] rounded-md shadow-2xl shadow-white/10 relative mx-auto my-10"});function Jy(n,e){return function(){return n.apply(e,arguments)}}const{toString:QR}=Object.prototype,{getPrototypeOf:Ep}=Object,pc=(n=>e=>{const t=QR.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Pi=n=>(n=n.toLowerCase(),e=>pc(e)===n),mc=n=>e=>typeof e===n,{isArray:Go}=Array,za=mc("undefined");function JR(n){return n!==null&&!za(n)&&n.constructor!==null&&!za(n.constructor)&&Jn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const ex=Pi("ArrayBuffer");function eb(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&ex(n.buffer),e}const tb=mc("string"),Jn=mc("function"),tx=mc("number"),gc=n=>n!==null&&typeof n=="object",nb=n=>n===!0||n===!1,Xu=n=>{if(pc(n)!=="object")return!1;const e=Ep(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},ib=Pi("Date"),rb=Pi("File"),sb=Pi("Blob"),ob=Pi("FileList"),ab=n=>gc(n)&&Jn(n.pipe),lb=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Jn(n.append)&&((e=pc(n))==="formdata"||e==="object"&&Jn(n.toString)&&n.toString()==="[object FormData]"))},ub=Pi("URLSearchParams"),[cb,fb,db,hb]=["ReadableStream","Request","Response","Headers"].map(Pi),pb=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qa(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,o;if(typeof n!="object"&&(n=[n]),Go(n))for(r=0,o=n.length;r<o;r++)e.call(null,n[r],r,n);else{const a=t?Object.getOwnPropertyNames(n):Object.keys(n),u=a.length;let c;for(r=0;r<u;r++)c=a[r],e.call(null,n[c],c,n)}}function nx(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,o;for(;r-- >0;)if(o=t[r],e===o.toLowerCase())return o;return null}const Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ix=n=>!za(n)&&n!==Cs;function Wh(){const{caseless:n}=ix(this)&&this||{},e={},t=(r,o)=>{const a=n&&nx(e,o)||o;Xu(e[a])&&Xu(r)?e[a]=Wh(e[a],r):Xu(r)?e[a]=Wh({},r):Go(r)?e[a]=r.slice():e[a]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Qa(arguments[r],t);return e}const mb=(n,e,t,{allOwnKeys:r}={})=>(Qa(e,(o,a)=>{t&&Jn(o)?n[a]=Jy(o,t):n[a]=o},{allOwnKeys:r}),n),gb=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),vb=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},_b=(n,e,t,r)=>{let o,a,u;const c={};if(e=e||{},n==null)return e;do{for(o=Object.getOwnPropertyNames(n),a=o.length;a-- >0;)u=o[a],(!r||r(u,n,e))&&!c[u]&&(e[u]=n[u],c[u]=!0);n=t!==!1&&Ep(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},yb=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},xb=n=>{if(!n)return null;if(Go(n))return n;let e=n.length;if(!tx(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Sb=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Ep(Uint8Array)),Eb=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let o;for(;(o=r.next())&&!o.done;){const a=o.value;e.call(n,a[0],a[1])}},Mb=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},Tb=Pi("HTMLFormElement"),wb=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,o){return r.toUpperCase()+o}),F0=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Ab=Pi("RegExp"),rx=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Qa(t,(o,a)=>{let u;(u=e(o,a,n))!==!1&&(r[a]=u||o)}),Object.defineProperties(n,r)},Cb=n=>{rx(n,(e,t)=>{if(Jn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Jn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Rb=(n,e)=>{const t={},r=o=>{o.forEach(a=>{t[a]=!0})};return Go(n)?r(n):r(String(n).split(e)),t},bb=()=>{},Pb=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e,kd="abcdefghijklmnopqrstuvwxyz",O0="0123456789",sx={DIGIT:O0,ALPHA:kd,ALPHA_DIGIT:kd+kd.toUpperCase()+O0},Db=(n=16,e=sx.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function Lb(n){return!!(n&&Jn(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Ib=n=>{const e=new Array(10),t=(r,o)=>{if(gc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[o]=r;const a=Go(r)?[]:{};return Qa(r,(u,c)=>{const d=t(u,o+1);!za(d)&&(a[c]=d)}),e[o]=void 0,a}}return r};return t(n,0)},Nb=Pi("AsyncFunction"),Ub=n=>n&&(gc(n)||Jn(n))&&Jn(n.then)&&Jn(n.catch),ox=((n,e)=>n?setImmediate:e?((t,r)=>(Cs.addEventListener("message",({source:o,data:a})=>{o===Cs&&a===t&&r.length&&r.shift()()},!1),o=>{r.push(o),Cs.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Jn(Cs.postMessage)),Fb=typeof queueMicrotask<"u"?queueMicrotask.bind(Cs):typeof process<"u"&&process.nextTick||ox,oe={isArray:Go,isArrayBuffer:ex,isBuffer:JR,isFormData:lb,isArrayBufferView:eb,isString:tb,isNumber:tx,isBoolean:nb,isObject:gc,isPlainObject:Xu,isReadableStream:cb,isRequest:fb,isResponse:db,isHeaders:hb,isUndefined:za,isDate:ib,isFile:rb,isBlob:sb,isRegExp:Ab,isFunction:Jn,isStream:ab,isURLSearchParams:ub,isTypedArray:Sb,isFileList:ob,forEach:Qa,merge:Wh,extend:mb,trim:pb,stripBOM:gb,inherits:vb,toFlatObject:_b,kindOf:pc,kindOfTest:Pi,endsWith:yb,toArray:xb,forEachEntry:Eb,matchAll:Mb,isHTMLForm:Tb,hasOwnProperty:F0,hasOwnProp:F0,reduceDescriptors:rx,freezeMethods:Cb,toObjectSet:Rb,toCamelCase:wb,noop:bb,toFiniteNumber:Pb,findKey:nx,global:Cs,isContextDefined:ix,ALPHABET:sx,generateString:Db,isSpecCompliantForm:Lb,toJSONObject:Ib,isAsyncFn:Nb,isThenable:Ub,setImmediate:ox,asap:Fb};function ut(n,e,t,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}oe.inherits(ut,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:oe.toJSONObject(this.config),code:this.code,status:this.status}}});const ax=ut.prototype,lx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{lx[n]={value:n}});Object.defineProperties(ut,lx);Object.defineProperty(ax,"isAxiosError",{value:!0});ut.from=(n,e,t,r,o,a)=>{const u=Object.create(ax);return oe.toFlatObject(n,u,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),ut.call(u,n.message,e,t,r,o),u.cause=n,u.name=n.name,a&&Object.assign(u,a),u};const Ob=null;function jh(n){return oe.isPlainObject(n)||oe.isArray(n)}function ux(n){return oe.endsWith(n,"[]")?n.slice(0,-2):n}function B0(n,e,t){return n?n.concat(e).map(function(o,a){return o=ux(o),!t&&a?"["+o+"]":o}).join(t?".":""):e}function Bb(n){return oe.isArray(n)&&!n.some(jh)}const kb=oe.toFlatObject(oe,{},null,function(e){return/^is[A-Z]/.test(e)});function vc(n,e,t){if(!oe.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=oe.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,x){return!oe.isUndefined(x[M])});const r=t.metaTokens,o=t.visitor||p,a=t.dots,u=t.indexes,d=(t.Blob||typeof Blob<"u"&&Blob)&&oe.isSpecCompliantForm(e);if(!oe.isFunction(o))throw new TypeError("visitor must be a function");function h(E){if(E===null)return"";if(oe.isDate(E))return E.toISOString();if(!d&&oe.isBlob(E))throw new ut("Blob is not supported. Use a Buffer instead.");return oe.isArrayBuffer(E)||oe.isTypedArray(E)?d&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function p(E,M,x){let y=E;if(E&&!x&&typeof E=="object"){if(oe.endsWith(M,"{}"))M=r?M:M.slice(0,-2),E=JSON.stringify(E);else if(oe.isArray(E)&&Bb(E)||(oe.isFileList(E)||oe.endsWith(M,"[]"))&&(y=oe.toArray(E)))return M=ux(M),y.forEach(function(R,b){!(oe.isUndefined(R)||R===null)&&e.append(u===!0?B0([M],b,a):u===null?M:M+"[]",h(R))}),!1}return jh(E)?!0:(e.append(B0(x,M,a),h(E)),!1)}const g=[],v=Object.assign(kb,{defaultVisitor:p,convertValue:h,isVisitable:jh});function S(E,M){if(!oe.isUndefined(E)){if(g.indexOf(E)!==-1)throw Error("Circular reference detected in "+M.join("."));g.push(E),oe.forEach(E,function(y,P){(!(oe.isUndefined(y)||y===null)&&o.call(e,y,oe.isString(P)?P.trim():P,M,v))===!0&&S(y,M?M.concat(P):[P])}),g.pop()}}if(!oe.isObject(n))throw new TypeError("data must be an object");return S(n),e}function k0(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Mp(n,e){this._pairs=[],n&&vc(n,this,e)}const cx=Mp.prototype;cx.append=function(e,t){this._pairs.push([e,t])};cx.toString=function(e){const t=e?function(r){return e.call(this,r,k0)}:k0;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function zb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fx(n,e,t){if(!e)return n;const r=t&&t.encode||zb;oe.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let a;if(o?a=o(e,t):a=oe.isURLSearchParams(e)?e.toString():new Mp(e,t).toString(r),a){const u=n.indexOf("#");u!==-1&&(n=n.slice(0,u)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class z0{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){oe.forEach(this.handlers,function(r){r!==null&&e(r)})}}const dx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vb=typeof URLSearchParams<"u"?URLSearchParams:Mp,Hb=typeof FormData<"u"?FormData:null,Gb=typeof Blob<"u"?Blob:null,Wb={isBrowser:!0,classes:{URLSearchParams:Vb,FormData:Hb,Blob:Gb},protocols:["http","https","file","blob","url","data"]},Tp=typeof window<"u"&&typeof document<"u",Xh=typeof navigator=="object"&&navigator||void 0,jb=Tp&&(!Xh||["ReactNative","NativeScript","NS"].indexOf(Xh.product)<0),Xb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qb=Tp&&window.location.href||"http://localhost",Yb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Tp,hasStandardBrowserEnv:jb,hasStandardBrowserWebWorkerEnv:Xb,navigator:Xh,origin:qb},Symbol.toStringTag,{value:"Module"})),An={...Yb,...Wb};function $b(n,e){return vc(n,new An.classes.URLSearchParams,Object.assign({visitor:function(t,r,o,a){return An.isNode&&oe.isBuffer(t)?(this.append(r,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function Kb(n){return oe.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Zb(n){const e={},t=Object.keys(n);let r;const o=t.length;let a;for(r=0;r<o;r++)a=t[r],e[a]=n[a];return e}function hx(n){function e(t,r,o,a){let u=t[a++];if(u==="__proto__")return!0;const c=Number.isFinite(+u),d=a>=t.length;return u=!u&&oe.isArray(o)?o.length:u,d?(oe.hasOwnProp(o,u)?o[u]=[o[u],r]:o[u]=r,!c):((!o[u]||!oe.isObject(o[u]))&&(o[u]=[]),e(t,r,o[u],a)&&oe.isArray(o[u])&&(o[u]=Zb(o[u])),!c)}if(oe.isFormData(n)&&oe.isFunction(n.entries)){const t={};return oe.forEachEntry(n,(r,o)=>{e(Kb(r),o,t,0)}),t}return null}function Qb(n,e,t){if(oe.isString(n))try{return(e||JSON.parse)(n),oe.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(n)}const Ja={transitional:dx,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",o=r.indexOf("application/json")>-1,a=oe.isObject(e);if(a&&oe.isHTMLForm(e)&&(e=new FormData(e)),oe.isFormData(e))return o?JSON.stringify(hx(e)):e;if(oe.isArrayBuffer(e)||oe.isBuffer(e)||oe.isStream(e)||oe.isFile(e)||oe.isBlob(e)||oe.isReadableStream(e))return e;if(oe.isArrayBufferView(e))return e.buffer;if(oe.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $b(e,this.formSerializer).toString();if((c=oe.isFileList(e))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return vc(c?{"files[]":e}:e,d&&new d,this.formSerializer)}}return a||o?(t.setContentType("application/json",!1),Qb(e)):e}],transformResponse:[function(e){const t=this.transitional||Ja.transitional,r=t&&t.forcedJSONParsing,o=this.responseType==="json";if(oe.isResponse(e)||oe.isReadableStream(e))return e;if(e&&oe.isString(e)&&(r&&!this.responseType||o)){const u=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(c){if(u)throw c.name==="SyntaxError"?ut.from(c,ut.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:An.classes.FormData,Blob:An.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};oe.forEach(["delete","get","head","post","put","patch"],n=>{Ja.headers[n]={}});const Jb=oe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),eP=n=>{const e={};let t,r,o;return n&&n.split(`
`).forEach(function(u){o=u.indexOf(":"),t=u.substring(0,o).trim().toLowerCase(),r=u.substring(o+1).trim(),!(!t||e[t]&&Jb[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},V0=Symbol("internals");function ba(n){return n&&String(n).trim().toLowerCase()}function qu(n){return n===!1||n==null?n:oe.isArray(n)?n.map(qu):String(n)}function tP(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const nP=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function zd(n,e,t,r,o){if(oe.isFunction(r))return r.call(this,e,t);if(o&&(e=t),!!oe.isString(e)){if(oe.isString(r))return e.indexOf(r)!==-1;if(oe.isRegExp(r))return r.test(e)}}function iP(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function rP(n,e){const t=oe.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(o,a,u){return this[r].call(this,e,o,a,u)},configurable:!0})})}class Xn{constructor(e){e&&this.set(e)}set(e,t,r){const o=this;function a(c,d,h){const p=ba(d);if(!p)throw new Error("header name must be a non-empty string");const g=oe.findKey(o,p);(!g||o[g]===void 0||h===!0||h===void 0&&o[g]!==!1)&&(o[g||d]=qu(c))}const u=(c,d)=>oe.forEach(c,(h,p)=>a(h,p,d));if(oe.isPlainObject(e)||e instanceof this.constructor)u(e,t);else if(oe.isString(e)&&(e=e.trim())&&!nP(e))u(eP(e),t);else if(oe.isHeaders(e))for(const[c,d]of e.entries())a(d,c,r);else e!=null&&a(t,e,r);return this}get(e,t){if(e=ba(e),e){const r=oe.findKey(this,e);if(r){const o=this[r];if(!t)return o;if(t===!0)return tP(o);if(oe.isFunction(t))return t.call(this,o,r);if(oe.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ba(e),e){const r=oe.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||zd(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let o=!1;function a(u){if(u=ba(u),u){const c=oe.findKey(r,u);c&&(!t||zd(r,r[c],c,t))&&(delete r[c],o=!0)}}return oe.isArray(e)?e.forEach(a):a(e),o}clear(e){const t=Object.keys(this);let r=t.length,o=!1;for(;r--;){const a=t[r];(!e||zd(this,this[a],a,e,!0))&&(delete this[a],o=!0)}return o}normalize(e){const t=this,r={};return oe.forEach(this,(o,a)=>{const u=oe.findKey(r,a);if(u){t[u]=qu(o),delete t[a];return}const c=e?iP(a):String(a).trim();c!==a&&delete t[a],t[c]=qu(o),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return oe.forEach(this,(r,o)=>{r!=null&&r!==!1&&(t[o]=e&&oe.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[V0]=this[V0]={accessors:{}}).accessors,o=this.prototype;function a(u){const c=ba(u);r[c]||(rP(o,u),r[c]=!0)}return oe.isArray(e)?e.forEach(a):a(e),this}}Xn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);oe.reduceDescriptors(Xn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});oe.freezeMethods(Xn);function Vd(n,e){const t=this||Ja,r=e||t,o=Xn.from(r.headers);let a=r.data;return oe.forEach(n,function(c){a=c.call(t,a,o.normalize(),e?e.status:void 0)}),o.normalize(),a}function px(n){return!!(n&&n.__CANCEL__)}function Wo(n,e,t){ut.call(this,n??"canceled",ut.ERR_CANCELED,e,t),this.name="CanceledError"}oe.inherits(Wo,ut,{__CANCEL__:!0});function mx(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new ut("Request failed with status code "+t.status,[ut.ERR_BAD_REQUEST,ut.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function sP(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function oP(n,e){n=n||10;const t=new Array(n),r=new Array(n);let o=0,a=0,u;return e=e!==void 0?e:1e3,function(d){const h=Date.now(),p=r[a];u||(u=h),t[o]=d,r[o]=h;let g=a,v=0;for(;g!==o;)v+=t[g++],g=g%n;if(o=(o+1)%n,o===a&&(a=(a+1)%n),h-u<e)return;const S=p&&h-p;return S?Math.round(v*1e3/S):void 0}}function aP(n,e){let t=0,r=1e3/e,o,a;const u=(h,p=Date.now())=>{t=p,o=null,a&&(clearTimeout(a),a=null),n.apply(null,h)};return[(...h)=>{const p=Date.now(),g=p-t;g>=r?u(h,p):(o=h,a||(a=setTimeout(()=>{a=null,u(o)},r-g)))},()=>o&&u(o)]}const tc=(n,e,t=3)=>{let r=0;const o=oP(50,250);return aP(a=>{const u=a.loaded,c=a.lengthComputable?a.total:void 0,d=u-r,h=o(d),p=u<=c;r=u;const g={loaded:u,total:c,progress:c?u/c:void 0,bytes:d,rate:h||void 0,estimated:h&&c&&p?(c-u)/h:void 0,event:a,lengthComputable:c!=null,[e?"download":"upload"]:!0};n(g)},t)},H0=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},G0=n=>(...e)=>oe.asap(()=>n(...e)),lP=An.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,An.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(An.origin),An.navigator&&/(msie|trident)/i.test(An.navigator.userAgent)):()=>!0,uP=An.hasStandardBrowserEnv?{write(n,e,t,r,o,a){const u=[n+"="+encodeURIComponent(e)];oe.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),oe.isString(r)&&u.push("path="+r),oe.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cP(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function fP(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function gx(n,e){return n&&!cP(e)?fP(n,e):e}const W0=n=>n instanceof Xn?{...n}:n;function Ns(n,e){e=e||{};const t={};function r(h,p,g,v){return oe.isPlainObject(h)&&oe.isPlainObject(p)?oe.merge.call({caseless:v},h,p):oe.isPlainObject(p)?oe.merge({},p):oe.isArray(p)?p.slice():p}function o(h,p,g,v){if(oe.isUndefined(p)){if(!oe.isUndefined(h))return r(void 0,h,g,v)}else return r(h,p,g,v)}function a(h,p){if(!oe.isUndefined(p))return r(void 0,p)}function u(h,p){if(oe.isUndefined(p)){if(!oe.isUndefined(h))return r(void 0,h)}else return r(void 0,p)}function c(h,p,g){if(g in e)return r(h,p);if(g in n)return r(void 0,h)}const d={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:(h,p,g)=>o(W0(h),W0(p),g,!0)};return oe.forEach(Object.keys(Object.assign({},n,e)),function(p){const g=d[p]||o,v=g(n[p],e[p],p);oe.isUndefined(v)&&g!==c||(t[p]=v)}),t}const vx=n=>{const e=Ns({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:a,headers:u,auth:c}=e;e.headers=u=Xn.from(u),e.url=fx(gx(e.baseURL,e.url),n.params,n.paramsSerializer),c&&u.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(oe.isFormData(t)){if(An.hasStandardBrowserEnv||An.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((d=u.getContentType())!==!1){const[h,...p]=d?d.split(";").map(g=>g.trim()).filter(Boolean):[];u.setContentType([h||"multipart/form-data",...p].join("; "))}}if(An.hasStandardBrowserEnv&&(r&&oe.isFunction(r)&&(r=r(e)),r||r!==!1&&lP(e.url))){const h=o&&a&&uP.read(a);h&&u.set(o,h)}return e},dP=typeof XMLHttpRequest<"u",hP=dP&&function(n){return new Promise(function(t,r){const o=vx(n);let a=o.data;const u=Xn.from(o.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:h}=o,p,g,v,S,E;function M(){S&&S(),E&&E(),o.cancelToken&&o.cancelToken.unsubscribe(p),o.signal&&o.signal.removeEventListener("abort",p)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function y(){if(!x)return;const R=Xn.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),N={data:!c||c==="text"||c==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:R,config:n,request:x};mx(function(U){t(U),M()},function(U){r(U),M()},N),x=null}"onloadend"in x?x.onloadend=y:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(y)},x.onabort=function(){x&&(r(new ut("Request aborted",ut.ECONNABORTED,n,x)),x=null)},x.onerror=function(){r(new ut("Network Error",ut.ERR_NETWORK,n,x)),x=null},x.ontimeout=function(){let b=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||dx;o.timeoutErrorMessage&&(b=o.timeoutErrorMessage),r(new ut(b,N.clarifyTimeoutError?ut.ETIMEDOUT:ut.ECONNABORTED,n,x)),x=null},a===void 0&&u.setContentType(null),"setRequestHeader"in x&&oe.forEach(u.toJSON(),function(b,N){x.setRequestHeader(N,b)}),oe.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),c&&c!=="json"&&(x.responseType=o.responseType),h&&([v,E]=tc(h,!0),x.addEventListener("progress",v)),d&&x.upload&&([g,S]=tc(d),x.upload.addEventListener("progress",g),x.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(p=R=>{x&&(r(!R||R.type?new Wo(null,n,x):R),x.abort(),x=null)},o.cancelToken&&o.cancelToken.subscribe(p),o.signal&&(o.signal.aborted?p():o.signal.addEventListener("abort",p)));const P=sP(o.url);if(P&&An.protocols.indexOf(P)===-1){r(new ut("Unsupported protocol "+P+":",ut.ERR_BAD_REQUEST,n));return}x.send(a||null)})},pP=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,o;const a=function(h){if(!o){o=!0,c();const p=h instanceof Error?h:this.reason;r.abort(p instanceof ut?p:new Wo(p instanceof Error?p.message:p))}};let u=e&&setTimeout(()=>{u=null,a(new ut(`timeout ${e} of ms exceeded`,ut.ETIMEDOUT))},e);const c=()=>{n&&(u&&clearTimeout(u),u=null,n.forEach(h=>{h.unsubscribe?h.unsubscribe(a):h.removeEventListener("abort",a)}),n=null)};n.forEach(h=>h.addEventListener("abort",a));const{signal:d}=r;return d.unsubscribe=()=>oe.asap(c),d}},mP=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,o;for(;r<t;)o=r+e,yield n.slice(r,o),r=o},gP=async function*(n,e){for await(const t of vP(n))yield*mP(t,e)},vP=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},j0=(n,e,t,r)=>{const o=gP(n,e);let a=0,u,c=d=>{u||(u=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:h,value:p}=await o.next();if(h){c(),d.close();return}let g=p.byteLength;if(t){let v=a+=g;t(v)}d.enqueue(new Uint8Array(p))}catch(h){throw c(h),h}},cancel(d){return c(d),o.return()}},{highWaterMark:2})},_c=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_x=_c&&typeof ReadableStream=="function",_P=_c&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),yx=(n,...e)=>{try{return!!n(...e)}catch{return!1}},yP=_x&&yx(()=>{let n=!1;const e=new Request(An.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),X0=64*1024,qh=_x&&yx(()=>oe.isReadableStream(new Response("").body)),nc={stream:qh&&(n=>n.body)};_c&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!nc[e]&&(nc[e]=oe.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new ut(`Response type '${e}' is not supported`,ut.ERR_NOT_SUPPORT,r)})})})(new Response);const xP=async n=>{if(n==null)return 0;if(oe.isBlob(n))return n.size;if(oe.isSpecCompliantForm(n))return(await new Request(An.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(oe.isArrayBufferView(n)||oe.isArrayBuffer(n))return n.byteLength;if(oe.isURLSearchParams(n)&&(n=n+""),oe.isString(n))return(await _P(n)).byteLength},SP=async(n,e)=>{const t=oe.toFiniteNumber(n.getContentLength());return t??xP(e)},EP=_c&&(async n=>{let{url:e,method:t,data:r,signal:o,cancelToken:a,timeout:u,onDownloadProgress:c,onUploadProgress:d,responseType:h,headers:p,withCredentials:g="same-origin",fetchOptions:v}=vx(n);h=h?(h+"").toLowerCase():"text";let S=pP([o,a&&a.toAbortSignal()],u),E;const M=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let x;try{if(d&&yP&&t!=="get"&&t!=="head"&&(x=await SP(p,r))!==0){let N=new Request(e,{method:"POST",body:r,duplex:"half"}),F;if(oe.isFormData(r)&&(F=N.headers.get("content-type"))&&p.setContentType(F),N.body){const[U,B]=H0(x,tc(G0(d)));r=j0(N.body,X0,U,B)}}oe.isString(g)||(g=g?"include":"omit");const y="credentials"in Request.prototype;E=new Request(e,{...v,signal:S,method:t.toUpperCase(),headers:p.normalize().toJSON(),body:r,duplex:"half",credentials:y?g:void 0});let P=await fetch(E);const R=qh&&(h==="stream"||h==="response");if(qh&&(c||R&&M)){const N={};["status","statusText","headers"].forEach(D=>{N[D]=P[D]});const F=oe.toFiniteNumber(P.headers.get("content-length")),[U,B]=c&&H0(F,tc(G0(c),!0))||[];P=new Response(j0(P.body,X0,U,()=>{B&&B(),M&&M()}),N)}h=h||"text";let b=await nc[oe.findKey(nc,h)||"text"](P,n);return!R&&M&&M(),await new Promise((N,F)=>{mx(N,F,{data:b,headers:Xn.from(P.headers),status:P.status,statusText:P.statusText,config:n,request:E})})}catch(y){throw M&&M(),y&&y.name==="TypeError"&&/fetch/i.test(y.message)?Object.assign(new ut("Network Error",ut.ERR_NETWORK,n,E),{cause:y.cause||y}):ut.from(y,y&&y.code,n,E)}}),Yh={http:Ob,xhr:hP,fetch:EP};oe.forEach(Yh,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const q0=n=>`- ${n}`,MP=n=>oe.isFunction(n)||n===null||n===!1,xx={getAdapter:n=>{n=oe.isArray(n)?n:[n];const{length:e}=n;let t,r;const o={};for(let a=0;a<e;a++){t=n[a];let u;if(r=t,!MP(t)&&(r=Yh[(u=String(t)).toLowerCase()],r===void 0))throw new ut(`Unknown adapter '${u}'`);if(r)break;o[u||"#"+a]=r}if(!r){const a=Object.entries(o).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let u=e?a.length>1?`since :
`+a.map(q0).join(`
`):" "+q0(a[0]):"as no adapter specified";throw new ut("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return r},adapters:Yh};function Hd(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Wo(null,n)}function Y0(n){return Hd(n),n.headers=Xn.from(n.headers),n.data=Vd.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),xx.getAdapter(n.adapter||Ja.adapter)(n).then(function(r){return Hd(n),r.data=Vd.call(n,n.transformResponse,r),r.headers=Xn.from(r.headers),r},function(r){return px(r)||(Hd(n),r&&r.response&&(r.response.data=Vd.call(n,n.transformResponse,r.response),r.response.headers=Xn.from(r.response.headers))),Promise.reject(r)})}const Sx="1.7.9",yc={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{yc[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const $0={};yc.transitional=function(e,t,r){function o(a,u){return"[Axios v"+Sx+"] Transitional option '"+a+"'"+u+(r?". "+r:"")}return(a,u,c)=>{if(e===!1)throw new ut(o(u," has been removed"+(t?" in "+t:"")),ut.ERR_DEPRECATED);return t&&!$0[u]&&($0[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,u,c):!0}};yc.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function TP(n,e,t){if(typeof n!="object")throw new ut("options must be an object",ut.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let o=r.length;for(;o-- >0;){const a=r[o],u=e[a];if(u){const c=n[a],d=c===void 0||u(c,a,n);if(d!==!0)throw new ut("option "+a+" must be "+d,ut.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ut("Unknown option "+a,ut.ERR_BAD_OPTION)}}const Yu={assertOptions:TP,validators:yc},Fi=Yu.validators;class Ps{constructor(e){this.defaults=e,this.interceptors={request:new z0,response:new z0}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ns(this.defaults,t);const{transitional:r,paramsSerializer:o,headers:a}=t;r!==void 0&&Yu.assertOptions(r,{silentJSONParsing:Fi.transitional(Fi.boolean),forcedJSONParsing:Fi.transitional(Fi.boolean),clarifyTimeoutError:Fi.transitional(Fi.boolean)},!1),o!=null&&(oe.isFunction(o)?t.paramsSerializer={serialize:o}:Yu.assertOptions(o,{encode:Fi.function,serialize:Fi.function},!0)),Yu.assertOptions(t,{baseUrl:Fi.spelling("baseURL"),withXsrfToken:Fi.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let u=a&&oe.merge(a.common,a[t.method]);a&&oe.forEach(["delete","get","head","post","put","patch","common"],E=>{delete a[E]}),t.headers=Xn.concat(u,a);const c=[];let d=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(t)===!1||(d=d&&M.synchronous,c.unshift(M.fulfilled,M.rejected))});const h=[];this.interceptors.response.forEach(function(M){h.push(M.fulfilled,M.rejected)});let p,g=0,v;if(!d){const E=[Y0.bind(this),void 0];for(E.unshift.apply(E,c),E.push.apply(E,h),v=E.length,p=Promise.resolve(t);g<v;)p=p.then(E[g++],E[g++]);return p}v=c.length;let S=t;for(g=0;g<v;){const E=c[g++],M=c[g++];try{S=E(S)}catch(x){M.call(this,x);break}}try{p=Y0.call(this,S)}catch(E){return Promise.reject(E)}for(g=0,v=h.length;g<v;)p=p.then(h[g++],h[g++]);return p}getUri(e){e=Ns(this.defaults,e);const t=gx(e.baseURL,e.url);return fx(t,e.params,e.paramsSerializer)}}oe.forEach(["delete","get","head","options"],function(e){Ps.prototype[e]=function(t,r){return this.request(Ns(r||{},{method:e,url:t,data:(r||{}).data}))}});oe.forEach(["post","put","patch"],function(e){function t(r){return function(a,u,c){return this.request(Ns(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:u}))}}Ps.prototype[e]=t(),Ps.prototype[e+"Form"]=t(!0)});class wp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(a){t=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const u=new Promise(c=>{r.subscribe(c),a=c}).then(o);return u.cancel=function(){r.unsubscribe(a)},u},e(function(a,u,c){r.reason||(r.reason=new Wo(a,u,c),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new wp(function(o){e=o}),cancel:e}}}function wP(n){return function(t){return n.apply(null,t)}}function AP(n){return oe.isObject(n)&&n.isAxiosError===!0}const $h={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($h).forEach(([n,e])=>{$h[e]=n});function Ex(n){const e=new Ps(n),t=Jy(Ps.prototype.request,e);return oe.extend(t,Ps.prototype,e,{allOwnKeys:!0}),oe.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return Ex(Ns(n,o))},t}const en=Ex(Ja);en.Axios=Ps;en.CanceledError=Wo;en.CancelToken=wp;en.isCancel=px;en.VERSION=Sx;en.toFormData=vc;en.AxiosError=ut;en.Cancel=en.CanceledError;en.all=function(e){return Promise.all(e)};en.spread=wP;en.isAxiosError=AP;en.mergeConfig=Ns;en.AxiosHeaders=Xn;en.formToJSON=n=>hx(oe.isHTMLForm(n)?new FormData(n):n);en.getAdapter=xx.getAdapter;en.HttpStatusCode=$h;en.default=en;function CP(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}function xc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Kh=n=>Array.isArray(n);function Mx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function Va(n){return typeof n=="string"||Array.isArray(n)}function K0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Ap(n,e,t,r){if(typeof e=="function"){const[o,a]=K0(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=K0(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Sc(n,e,t){const r=n.getProps();return Ap(r,e,t!==void 0?t:r.custom,n)}const Cp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rp=["initial",...Cp],el=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Us=new Set(el),lr=n=>n*1e3,ur=n=>n/1e3,RP={type:"spring",stiffness:500,damping:25,restSpeed:10},bP=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),PP={type:"keyframes",duration:.8},DP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LP=(n,{keyframes:e})=>e.length>2?PP:Us.has(n)?n.startsWith("scale")?bP(e[1]):RP:DP;function bp(n,e){return n?n[e]||n.default||n:void 0}const IP={skipAnimations:!1,useManualTiming:!1},NP=n=>n!==null;function Ec(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(NP),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const ei=n=>n;let Zh=ei;function UP(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){a.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,p=!1,g=!1)=>{const S=g&&r?e:t;return p&&a.add(h),S.has(h)||S.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const Fu=["read","resolveKeyframes","update","preRender","render","postRender"],FP=40;function Tx(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,u=Fu.reduce((y,P)=>(y[P]=UP(a),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:p,render:g,postRender:v}=u,S=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,FP),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),p.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(S))},E=()=>{t=!0,r=!0,o.isProcessing||n(S)};return{schedule:Fu.reduce((y,P)=>{const R=u[P];return y[P]=(b,N=!1,F=!1)=>(t||E(),R.schedule(b,N,F)),y},{}),cancel:y=>{for(let P=0;P<Fu.length;P++)u[Fu[P]].cancel(y)},state:o,steps:u}}const{schedule:zt,cancel:qr,state:gn,steps:Gd}=Tx(typeof requestAnimationFrame<"u"?requestAnimationFrame:ei,!0),wx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,OP=1e-7,BP=12;function kP(n,e,t,r,o){let a,u,c=0;do u=e+(t-e)/2,a=wx(u,r,o)-n,a>0?t=u:e=u;while(Math.abs(a)>OP&&++c<BP);return u}function tl(n,e,t,r){if(n===e&&t===r)return ei;const o=a=>kP(a,0,1,n,t);return a=>a===0||a===1?a:wx(o(a),e,r)}const Ax=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Cx=n=>e=>1-n(1-e),Rx=tl(.33,1.53,.69,.99),Pp=Cx(Rx),bx=Ax(Pp),Px=n=>(n*=2)<1?.5*Pp(n):.5*(2-Math.pow(2,-10*(n-1))),Dp=n=>1-Math.sin(Math.acos(n)),Dx=Cx(Dp),Lx=Ax(Dp),Ix=n=>/^0[^.\s]+$/u.test(n);function zP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ix(n):!0}const Nx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Ux=n=>e=>typeof e=="string"&&e.startsWith(n),Fx=Ux("--"),VP=Ux("var(--"),Lp=n=>VP(n)?HP.test(n.split("/*")[0].trim()):!1,HP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,GP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function WP(n){const e=GP.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Ox(n,e,t=1){const[r,o]=WP(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const u=a.trim();return Nx(u)?parseFloat(u):u}return Lp(o)?Ox(o,e,t+1):o}const dr=(n,e,t)=>t>e?e:t<n?n:t,jo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ha={...jo,transform:n=>dr(0,1,n)},Ou={...jo,default:1},nl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Vr=nl("deg"),ki=nl("%"),tt=nl("px"),jP=nl("vh"),XP=nl("vw"),Z0={...ki,parse:n=>ki.parse(n)/100,transform:n=>ki.transform(n*100)},qP=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Q0=n=>n===jo||n===tt,J0=(n,e)=>parseFloat(n.split(", ")[e]),e_=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return J0(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?J0(a[1],n):0}},YP=new Set(["x","y","z"]),$P=el.filter(n=>!YP.has(n));function KP(n){const e=[];return $P.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Bo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:e_(4,13),y:e_(5,14)};Bo.translateX=Bo.x;Bo.translateY=Bo.y;const Bx=n=>e=>e.test(n),ZP={test:n=>n==="auto",parse:n=>n},kx=[jo,tt,ki,Vr,XP,jP,ZP],t_=n=>kx.find(Bx(n)),Ds=new Set;let Qh=!1,Jh=!1;function zx(){if(Jh){const n=Array.from(Ds).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=KP(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,u])=>{var c;(c=r.getValue(a))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Jh=!1,Qh=!1,Ds.forEach(n=>n.complete()),Ds.clear()}function Vx(){Ds.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Jh=!0)})}function QP(){Vx(),zx()}class Ip{constructor(e,t,r,o,a,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ds.add(this),Qh||(Qh=!0,zt.read(Vx),zt.resolveKeyframes(zx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ds.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ds.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ua=n=>Math.round(n*1e5)/1e5,Np=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function JP(n){return n==null}const e2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Up=(n,e)=>t=>!!(typeof t=="string"&&e2.test(t)&&t.startsWith(n)||e&&!JP(t)&&Object.prototype.hasOwnProperty.call(t,e)),Hx=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,u,c]=r.match(Np);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},t2=n=>dr(0,255,n),Wd={...jo,transform:n=>Math.round(t2(n))},Rs={test:Up("rgb","red"),parse:Hx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Wd.transform(n)+", "+Wd.transform(e)+", "+Wd.transform(t)+", "+Ua(Ha.transform(r))+")"};function n2(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ep={test:Up("#"),parse:n2,transform:Rs.transform},Mo={test:Up("hsl","hue"),parse:Hx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+ki.transform(Ua(e))+", "+ki.transform(Ua(t))+", "+Ua(Ha.transform(r))+")"},wn={test:n=>Rs.test(n)||ep.test(n)||Mo.test(n),parse:n=>Rs.test(n)?Rs.parse(n):Mo.test(n)?Mo.parse(n):ep.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Rs.transform(n):Mo.transform(n)},i2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function r2(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Np))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(i2))===null||t===void 0?void 0:t.length)||0)>0}const Gx="number",Wx="color",s2="var",o2="var(",n_="${}",a2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ga(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const c=e.replace(a2,d=>(wn.test(d)?(r.color.push(a),o.push(Wx),t.push(wn.parse(d))):d.startsWith(o2)?(r.var.push(a),o.push(s2),t.push(d)):(r.number.push(a),o.push(Gx),t.push(parseFloat(d))),++a,n_)).split(n_);return{values:t,split:c,indexes:r,types:o}}function jx(n){return Ga(n).values}function Xx(n){const{split:e,types:t}=Ga(n),r=e.length;return o=>{let a="";for(let u=0;u<r;u++)if(a+=e[u],o[u]!==void 0){const c=t[u];c===Gx?a+=Ua(o[u]):c===Wx?a+=wn.transform(o[u]):a+=o[u]}return a}}const l2=n=>typeof n=="number"?0:n;function u2(n){const e=jx(n);return Xx(n)(e.map(l2))}const Yr={test:r2,parse:jx,createTransformer:Xx,getAnimatableNone:u2},c2=new Set(["brightness","contrast","saturate","opacity"]);function f2(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Np)||[];if(!r)return n;const o=t.replace(r,"");let a=c2.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const d2=/\b([a-z-]*)\(.*?\)/gu,tp={...Yr,getAnimatableNone:n=>{const e=n.match(d2);return e?e.map(f2).join(" "):n}},h2={borderWidth:tt,borderTopWidth:tt,borderRightWidth:tt,borderBottomWidth:tt,borderLeftWidth:tt,borderRadius:tt,radius:tt,borderTopLeftRadius:tt,borderTopRightRadius:tt,borderBottomRightRadius:tt,borderBottomLeftRadius:tt,width:tt,maxWidth:tt,height:tt,maxHeight:tt,top:tt,right:tt,bottom:tt,left:tt,padding:tt,paddingTop:tt,paddingRight:tt,paddingBottom:tt,paddingLeft:tt,margin:tt,marginTop:tt,marginRight:tt,marginBottom:tt,marginLeft:tt,backgroundPositionX:tt,backgroundPositionY:tt},p2={rotate:Vr,rotateX:Vr,rotateY:Vr,rotateZ:Vr,scale:Ou,scaleX:Ou,scaleY:Ou,scaleZ:Ou,skew:Vr,skewX:Vr,skewY:Vr,distance:tt,translateX:tt,translateY:tt,translateZ:tt,x:tt,y:tt,z:tt,perspective:tt,transformPerspective:tt,opacity:Ha,originX:Z0,originY:Z0,originZ:tt},i_={...jo,transform:Math.round},Fp={...h2,...p2,zIndex:i_,size:tt,fillOpacity:Ha,strokeOpacity:Ha,numOctaves:i_},m2={...Fp,color:wn,backgroundColor:wn,outlineColor:wn,fill:wn,stroke:wn,borderColor:wn,borderTopColor:wn,borderRightColor:wn,borderBottomColor:wn,borderLeftColor:wn,filter:tp,WebkitFilter:tp},Op=n=>m2[n];function qx(n,e){let t=Op(n);return t!==tp&&(t=Yr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const g2=new Set(["auto","none","0"]);function v2(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!g2.has(a)&&Ga(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=qx(t,o)}class Yx extends Ip{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Lp(h))){const p=Ox(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!qP.has(r)||e.length!==2)return;const[o,a]=e,u=t_(o),c=t_(a);if(u!==c)if(Q0(u)&&Q0(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)zP(e[o])&&r.push(o);r.length&&v2(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Bo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function Bp(n){return typeof n=="function"}let $u;function _2(){$u=void 0}const zi={now:()=>($u===void 0&&zi.set(gn.isProcessing||IP.useManualTiming?gn.timestamp:performance.now()),$u),set:n=>{$u=n,queueMicrotask(_2)}},r_=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Yr.test(n)||n==="0")&&!n.startsWith("url("));function y2(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function x2(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],u=r_(o,e),c=r_(a,e);return!u||!c?!1:y2(n)||(t==="spring"||Bp(t))&&r}const S2=40;class $x{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=zi.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>S2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&QP(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=zi.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!x2(e,r,o,a))if(u)this.options.duration=0;else{d==null||d(Ec(e,this.options,t)),c==null||c(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ko=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},Kx=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n(ko(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function Zx(n,e){return e?n*(1e3/e):0}const E2=5;function Qx(n,e,t){const r=Math.max(e-E2,0);return Zx(t-n(r),e-r)}const Yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jd=.001;function M2({duration:n=Yt.duration,bounce:e=Yt.bounce,velocity:t=Yt.velocity,mass:r=Yt.mass}){let o,a,u=1-e;u=dr(Yt.minDamping,Yt.maxDamping,u),n=dr(Yt.minDuration,Yt.maxDuration,ur(n)),u<1?(o=h=>{const p=h*u,g=p*n,v=p-t,S=np(h,u),E=Math.exp(-g);return jd-v/S*E},a=h=>{const g=h*u*n,v=g*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,E=Math.exp(-g),M=np(Math.pow(h,2),u);return(-o(h)+jd>0?-1:1)*((v-S)*E)/M}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-jd+p*g},a=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const c=5/n,d=w2(o,a,c);if(n=lr(n),isNaN(d))return{stiffness:Yt.stiffness,damping:Yt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const T2=12;function w2(n,e,t){let r=t;for(let o=1;o<T2;o++)r=r-n(r)/e(r);return r}function np(n,e){return n*Math.sqrt(1-e*e)}const ip=2e4;function Jx(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<ip;)e+=t,r=n.next(e);return e>=ip?1/0:e}const A2=["duration","bounce"],C2=["stiffness","damping","mass"];function s_(n,e){return e.some(t=>n[t]!==void 0)}function R2(n){let e={velocity:Yt.velocity,stiffness:Yt.stiffness,damping:Yt.damping,mass:Yt.mass,isResolvedFromDuration:!1,...n};if(!s_(n,C2)&&s_(n,A2))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*dr(.05,1,1-n.bounce)*Math.sqrt(o);e={...e,mass:Yt.mass,stiffness:o,damping:a}}else{const t=M2(n);e={...e,...t,mass:Yt.mass},e.isResolvedFromDuration=!0}return e}function eS(n=Yt.visualDuration,e=Yt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:S}=R2({...t,velocity:-ur(t.velocity||0)}),E=v||0,M=h/(2*Math.sqrt(d*p)),x=u-a,y=ur(Math.sqrt(d/p)),P=Math.abs(x)<5;r||(r=P?Yt.restSpeed.granular:Yt.restSpeed.default),o||(o=P?Yt.restDelta.granular:Yt.restDelta.default);let R;if(M<1){const N=np(y,M);R=F=>{const U=Math.exp(-M*y*F);return u-U*((E+M*y*x)/N*Math.sin(N*F)+x*Math.cos(N*F))}}else if(M===1)R=N=>u-Math.exp(-y*N)*(x+(E+y*x)*N);else{const N=y*Math.sqrt(M*M-1);R=F=>{const U=Math.exp(-M*y*F),B=Math.min(N*F,300);return u-U*((E+M*y*x)*Math.sinh(B)+N*x*Math.cosh(B))/N}}const b={calculatedDuration:S&&g||null,next:N=>{const F=R(N);if(S)c.done=N>=g;else{let U=0;M<1&&(U=N===0?lr(E):Qx(R,N,F));const B=Math.abs(U)<=r,D=Math.abs(u-F)<=o;c.done=B&&D}return c.value=c.done?u:F,c},toString:()=>{const N=Math.min(Jx(b),ip),F=Kx(U=>b.next(N*U).value,N,30);return N+"ms "+F}};return b}function o_({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},S=B=>c!==void 0&&B<c||d!==void 0&&B>d,E=B=>c===void 0?d:d===void 0||Math.abs(c-B)<Math.abs(d-B)?c:d;let M=t*e;const x=g+M,y=u===void 0?x:u(x);y!==x&&(M=y-g);const P=B=>-M*Math.exp(-B/r),R=B=>y+P(B),b=B=>{const D=P(B),C=R(B);v.done=Math.abs(D)<=h,v.value=v.done?y:C};let N,F;const U=B=>{S(v.value)&&(N=B,F=eS({keyframes:[v.value,E(v.value)],velocity:Qx(R,B,v.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return U(0),{calculatedDuration:null,next:B=>{let D=!1;return!F&&N===void 0&&(D=!0,b(B),U(B)),N!==void 0&&B>=N?F.next(B-N):(!D&&b(B),v)}}}const b2=tl(.42,0,1,1),P2=tl(0,0,.58,1),tS=tl(.42,0,.58,1),D2=n=>Array.isArray(n)&&typeof n[0]!="number",kp=n=>Array.isArray(n)&&typeof n[0]=="number",a_={linear:ei,easeIn:b2,easeInOut:tS,easeOut:P2,circIn:Dp,circInOut:Lx,circOut:Dx,backIn:Pp,backInOut:bx,backOut:Rx,anticipate:Px},l_=n=>{if(kp(n)){Zh(n.length===4);const[e,t,r,o]=n;return tl(e,t,r,o)}else if(typeof n=="string")return Zh(a_[n]!==void 0),a_[n];return n},L2=(n,e)=>t=>e(n(t)),il=(...n)=>n.reduce(L2),jt=(n,e,t)=>n+(e-n)*t;function Xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function I2({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,u=0;if(!e)o=a=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Xd(d,c,n+1/3),a=Xd(d,c,n),u=Xd(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:r}}function ic(n,e){return t=>t>0?e:n}const qd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},N2=[ep,Rs,Mo],U2=n=>N2.find(e=>e.test(n));function u_(n){const e=U2(n);if(!e)return!1;let t=e.parse(n);return e===Mo&&(t=I2(t)),t}const c_=(n,e)=>{const t=u_(n),r=u_(e);if(!t||!r)return ic(n,e);const o={...t};return a=>(o.red=qd(t.red,r.red,a),o.green=qd(t.green,r.green,a),o.blue=qd(t.blue,r.blue,a),o.alpha=jt(t.alpha,r.alpha,a),Rs.transform(o))},rp=new Set(["none","hidden"]);function F2(n,e){return rp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function O2(n,e){return t=>jt(n,e,t)}function zp(n){return typeof n=="number"?O2:typeof n=="string"?Lp(n)?ic:wn.test(n)?c_:z2:Array.isArray(n)?nS:typeof n=="object"?wn.test(n)?c_:B2:ic}function nS(n,e){const t=[...n],r=t.length,o=n.map((a,u)=>zp(a)(a,e[u]));return a=>{for(let u=0;u<r;u++)t[u]=o[u](a);return t}}function B2(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=zp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function k2(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const u=e.types[a],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[a]=d,o[u]++}return r}const z2=(n,e)=>{const t=Yr.createTransformer(e),r=Ga(n),o=Ga(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?rp.has(n)&&!o.values.length||rp.has(e)&&!r.values.length?F2(n,e):il(nS(k2(r,o),o.values),t):ic(n,e)};function iS(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?jt(n,e,t):zp(n)(n,e)}function V2(n,e,t){const r=[],o=t||iS,a=n.length-1;for(let u=0;u<a;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||ei:e;c=il(d,c)}r.push(c)}return r}function H2(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Zh(a===e.length),a===1)return()=>e[0];if(a===2&&n[0]===n[1])return()=>e[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=V2(e,r,o),c=u.length,d=h=>{let p=0;if(c>1)for(;p<n.length-2&&!(h<n[p+1]);p++);const g=ko(n[p],n[p+1],h);return u[p](g)};return t?h=>d(dr(n[0],n[a-1],h)):d}function G2(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=ko(0,e,r);n.push(jt(t,1,o))}}function W2(n){const e=[0];return G2(e,n.length-1),e}function j2(n,e){return n.map(t=>t*e)}function X2(n,e){return n.map(()=>e||tS).splice(0,n.length-1)}function rc({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=D2(r)?r.map(l_):l_(r),a={done:!1,value:e[0]},u=j2(t&&t.length===e.length?t:W2(e),n),c=H2(u,e,{ease:Array.isArray(o)?o:X2(e,o)});return{calculatedDuration:n,next:d=>(a.value=c(d),a.done=d>=n,a)}}const q2=n=>{const e=({timestamp:t})=>n(t);return{start:()=>zt.update(e,!0),stop:()=>qr(e),now:()=>gn.isProcessing?gn.timestamp:zi.now()}},Y2={decay:o_,inertia:o_,tween:rc,keyframes:rc,spring:eS},$2=n=>n/100;class Vp extends $x{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Ip,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(a,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:u=0}=this.options,c=Bp(t)?t:Y2[t]||rc;let d,h;c!==rc&&typeof e[0]!="number"&&(d=il($2,iS(e[0],e[1])),e=[0,100]);const p=c({...this.options,keyframes:e});a==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=Jx(p));const{calculatedDuration:g}=p,v=g+o,S=v*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:S}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:B}=this.options;return{done:!0,value:B[B.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:g}=r;if(this.startTime===null)return a.next(0);const{delay:v,repeat:S,repeatType:E,repeatDelay:M,onUpdate:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),P=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let R=this.currentTime,b=a;if(S){const B=Math.min(this.currentTime,p)/g;let D=Math.floor(B),C=B%1;!C&&B>=1&&(C=1),C===1&&D--,D=Math.min(D,S+1),!!(D%2)&&(E==="reverse"?(C=1-C,M&&(C-=M/g)):E==="mirror"&&(b=u)),R=dr(0,1,C)*g}const N=P?{done:!1,value:d[0]}:b.next(R);c&&(N.value=c(N.value));let{done:F}=N;!P&&h!==null&&(F=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return U&&o!==void 0&&(N.value=Ec(d,this.options,o)),x&&x(N.value),U&&this.finish(),N}get duration(){const{resolved:e}=this;return e?ur(e.calculatedDuration):0}get time(){return ur(this.currentTime)}set time(e){e=lr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ur(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=q2,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const K2=new Set(["opacity","clipPath","filter","transform"]);function Hp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Z2={linearEasing:void 0};function Q2(n,e){const t=Hp(n);return()=>{var r;return(r=Z2[e])!==null&&r!==void 0?r:t()}}const sc=Q2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function rS(n){return!!(typeof n=="function"&&sc()||!n||typeof n=="string"&&(n in sp||sc())||kp(n)||Array.isArray(n)&&n.every(rS))}const La=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,sp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:La([0,.65,.55,1]),circOut:La([.55,0,1,.45]),backIn:La([.31,.01,.66,-.59]),backOut:La([.33,1.53,.69,.99])};function sS(n,e){if(n)return typeof n=="function"&&sc()?Kx(n,e):kp(n)?La(n):Array.isArray(n)?n.map(t=>sS(t,e)||sp.easeOut):sp[n]}function J2(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=sS(c,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"})}function f_(n,e){n.timeline=e,n.onfinish=null}const eD=Hp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),oc=10,tD=2e4;function nD(n){return Bp(n.type)||n.type==="spring"||!rS(n.ease)}function iD(n,e){const t=new Vp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<tD;)r=t.sample(a),o.push(r.value),a+=oc;return{times:void 0,keyframes:o,duration:a-oc,ease:"linear"}}const oS={anticipate:Px,backInOut:bx,circInOut:Lx};function rD(n){return n in oS}class d_ extends $x{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new Yx(a,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){var r;let{duration:o=300,times:a,ease:u,type:c,motionValue:d,name:h,startTime:p}=this.options;if(!(!((r=d.owner)===null||r===void 0)&&r.current))return!1;if(typeof u=="string"&&sc()&&rD(u)&&(u=oS[u]),nD(this.options)){const{onComplete:v,onUpdate:S,motionValue:E,element:M,...x}=this.options,y=iD(e,x);e=y.keyframes,e.length===1&&(e[1]=e[0]),o=y.duration,a=y.times,u=y.ease,c="keyframes"}const g=J2(d.owner.current,h,e,{...this.options,duration:o,times:a,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(f_(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;d.set(Ec(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:o,times:a,type:c,ease:u,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return ur(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return ur(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=lr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return ei;const{animation:r}=t;f_(r,e)}return ei}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:g,element:v,...S}=this.options,E=new Vp({...S,keyframes:r,duration:o,type:a,ease:u,times:c,isGenerator:!0}),M=lr(this.time);h.setWithVelocity(E.sample(M-oc).value,E.sample(M).value,oc)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:u,type:c}=e;return eD()&&r&&K2.has(r)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!o&&a!=="mirror"&&u!==0&&c!=="inertia"}}const sD=Hp(()=>window.ScrollTimeline!==void 0);class oD{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>sD()&&o.attachTimeline?o.attachTimeline(e):t(o));return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function aD({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:u,repeatDelay:c,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Gp=(n,e,t,r={},o,a)=>u=>{const c=bp(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-lr(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:a?void 0:o};aD(c)||(p={...p,...LP(n,p)}),p.duration&&(p.duration=lr(p.duration)),p.repeatDelay&&(p.repeatDelay=lr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),g&&!a&&e.get()!==void 0){const v=Ec(p.keyframes,c);if(v!==void 0)return zt.update(()=>{p.onUpdate(v),p.onComplete()}),new oD([])}return!a&&d_.supports(p)?new d_(p):new Vp(p)},lD=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),uD=n=>Kh(n)?n[n.length-1]||0:n;function Wp(n,e){n.indexOf(e)===-1&&n.push(e)}function jp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Xp{constructor(){this.subscriptions=[]}add(e){return Wp(this.subscriptions,e),()=>jp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const u=this.subscriptions[a];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const h_=30,cD=n=>!isNaN(parseFloat(n));class fD{constructor(e,t={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=zi.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=zi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=cD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Xp);const r=this.events[e].add(t);return e==="change"?()=>{r(),zt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=zi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>h_)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,h_);return Zx(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wa(n,e){return new fD(n,e)}function dD(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Wa(t))}function hD(n,e){const t=Sc(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const u in a){const c=uD(a[u]);dD(n,u,c)}}const qp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),pD="framerAppearId",aS="data-"+qp(pD);function lS(n){return n.props[aS]}const Cn=n=>!!(n&&n.getVelocity);function mD(n){return!!(Cn(n)&&n.add)}function op(n,e){const t=n.getValue("willChange");if(mD(t))return t.add(e)}function gD({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function uS(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(a=n.latestValues[g])!==null&&a!==void 0?a:null),S=d[g];if(S===void 0||p&&gD(p,g))continue;const E={delay:t,...bp(u||{},g)};let M=!1;if(window.MotionHandoffAnimation){const y=lS(n);if(y){const P=window.MotionHandoffAnimation(y,g,zt);P!==null&&(E.startTime=P,M=!0)}}op(n,g),v.start(Gp(g,v,S,n.shouldReduceMotion&&Us.has(g)?{type:!1}:E,n,M));const x=v.animation;x&&h.push(x)}return c&&Promise.all(h).then(()=>{zt.update(()=>{c&&hD(n,c)})}),h}function ap(n,e,t={}){var r;const o=Sc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const u=o?()=>Promise.all(uS(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=a;return vD(n,e,p+h,g,v,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,p]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>p())}else return Promise.all([u(),c(t.delay)])}function vD(n,e,t=0,r=0,o=1,a){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(_D).forEach((h,p)=>{h.notify("AnimationStart",e),u.push(ap(h,e,{...a,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function _D(n,e){return n.sortNodePosition(e)}function yD(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>ap(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=ap(n,e,t);else{const o=typeof e=="function"?Sc(n,e,t.custom):e;r=Promise.all(uS(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const xD=Rp.length;function cS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?cS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<xD;t++){const r=Rp[t],o=n.props[r];(Va(o)||o===!1)&&(e[r]=o)}return e}const SD=[...Cp].reverse(),ED=Cp.length;function MD(n){return e=>Promise.all(e.map(({animation:t,options:r})=>yD(n,t,r)))}function TD(n){let e=MD(n),t=p_(),r=!0;const o=d=>(h,p)=>{var g;const v=Sc(n,p,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:S,transitionEnd:E,...M}=v;h={...h,...M,...E}}return h};function a(d){e=d(n)}function u(d){const{props:h}=n,p=cS(n.parent)||{},g=[],v=new Set;let S={},E=1/0;for(let x=0;x<ED;x++){const y=SD[x],P=t[y],R=h[y]!==void 0?h[y]:p[y],b=Va(R),N=y===d?P.isActive:null;N===!1&&(E=x);let F=R===p[y]&&R!==h[y]&&b;if(F&&r&&n.manuallyAnimateOnMount&&(F=!1),P.protectedKeys={...S},!P.isActive&&N===null||!R&&!P.prevProp||xc(R)||typeof R=="boolean")continue;const U=wD(P.prevProp,R);let B=U||y===d&&P.isActive&&!F&&b||x>E&&b,D=!1;const C=Array.isArray(R)?R:[R];let V=C.reduce(o(y),{});N===!1&&(V={});const{prevResolvedValues:ae={}}=P,Q={...ae,...V},ce=ie=>{B=!0,v.has(ie)&&(D=!0,v.delete(ie)),P.needsAnimating[ie]=!0;const z=n.getValue(ie);z&&(z.liveStyle=!1)};for(const ie in Q){const z=V[ie],le=ae[ie];if(S.hasOwnProperty(ie))continue;let re=!1;Kh(z)&&Kh(le)?re=!Mx(z,le):re=z!==le,re?z!=null?ce(ie):v.add(ie):z!==void 0&&v.has(ie)?ce(ie):P.protectedKeys[ie]=!0}P.prevProp=R,P.prevResolvedValues=V,P.isActive&&(S={...S,...V}),r&&n.blockInitialAnimation&&(B=!1),B&&(!(F&&U)||D)&&g.push(...C.map(ie=>({animation:ie,options:{type:y}})))}if(v.size){const x={};v.forEach(y=>{const P=n.getBaseTarget(y),R=n.getValue(y);R&&(R.liveStyle=!0),x[y]=P??null}),g.push({animation:x})}let M=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(M=!1),r=!1,M?e(g):Promise.resolve()}function c(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var S;return(S=v.animationState)===null||S===void 0?void 0:S.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:a,getState:()=>t,reset:()=>{t=p_(),r=!0}}}function wD(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Mx(e,n):!1}function _s(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function p_(){return{animate:_s(!0),whileInView:_s(),whileHover:_s(),whileTap:_s(),whileDrag:_s(),whileFocus:_s(),exit:_s()}}class $r{constructor(e){this.isMounted=!1,this.node=e}update(){}}class AD extends $r{constructor(e){super(e),e.animationState||(e.animationState=TD(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let CD=0;class RD extends $r{constructor(){super(...arguments),this.id=CD++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const bD={animation:{Feature:AD},exit:{Feature:RD}},wi={x:!1,y:!1};function fS(){return wi.x||wi.y}function PD(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function dS(n,e){const t=PD(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function m_(n){return e=>{e.pointerType==="touch"||fS()||n(e)}}function DD(n,e,t={}){const[r,o,a]=dS(n,t),u=m_(c=>{const{target:d}=c,h=e(c);if(!h||!d)return;const p=m_(g=>{h(g),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),a}const Yp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Ia=new WeakSet;function g_(n){return e=>{e.key==="Enter"&&n(e)}}function Yd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const LD=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=g_(()=>{if(Ia.has(t))return;Yd(t,"down");const o=g_(()=>{Yd(t,"up")}),a=()=>Yd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)},ID=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ND(n){return ID.has(n.tagName)||n.tabIndex!==-1}const hS=(n,e)=>e?n===e?!0:hS(n,e.parentElement):!1;function v_(n){return Yp(n)&&!fS()}function UD(n,e,t={}){const[r,o,a]=dS(n,t),u=c=>{const d=c.currentTarget;if(!v_(c)||Ia.has(d))return;Ia.add(d);const h=e(c),p=(S,E)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!v_(S)||!Ia.has(d))&&(Ia.delete(d),h&&h(S,{success:E}))},g=S=>{p(S,t.useGlobalTarget||hS(d,S.target))},v=S=>{p(S,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{ND(c)||(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>LD(h,o),o)}),a}function FD(n){return n==="x"||n==="y"?wi[n]?null:(wi[n]=!0,()=>{wi[n]=!1}):wi.x||wi.y?null:(wi.x=wi.y=!0,()=>{wi.x=wi.y=!1})}function rl(n){return{point:{x:n.pageX,y:n.pageY}}}const OD=n=>e=>Yp(e)&&n(e,rl(e));function ja(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Fa(n,e,t,r){return ja(n,e,OD(t),r)}const __=(n,e)=>Math.abs(n-e);function BD(n,e){const t=__(n.x,e.x),r=__(n.y,e.y);return Math.sqrt(t**2+r**2)}class pS{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Kd(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=BD(g.offset,{x:0,y:0})>=3;if(!v&&!S)return;const{point:E}=g,{timestamp:M}=gn;this.history.push({...E,timestamp:M});const{onStart:x,onMove:y}=this.handlers;v||(x&&x(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=$d(v,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:S,onSessionEnd:E,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Kd(g.type==="pointercancel"?this.lastMoveEventInfo:$d(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(g,x),E&&E(g,x)},!Yp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=rl(e),c=$d(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=gn;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,Kd(c,this.history)),this.removeListeners=il(Fa(this.contextWindow,"pointermove",this.handlePointerMove),Fa(this.contextWindow,"pointerup",this.handlePointerUp),Fa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),qr(this.updatePoint)}}function $d(n,e){return e?{point:e(n.point)}:n}function y_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Kd({point:n},e){return{point:n,delta:y_(n,mS(e)),offset:y_(n,kD(e)),velocity:zD(e,.1)}}function kD(n){return n[0]}function mS(n){return n[n.length-1]}function zD(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=mS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>lr(e)));)t--;if(!r)return{x:0,y:0};const a=ur(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const u={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function To(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const gS=1e-4,VD=1-gS,HD=1+gS,vS=.01,GD=0-vS,WD=0+vS;function ti(n){return n.max-n.min}function jD(n,e,t){return Math.abs(n-e)<=t}function x_(n,e,t,r=.5){n.origin=r,n.originPoint=jt(e.min,e.max,n.origin),n.scale=ti(t)/ti(e),n.translate=jt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=VD&&n.scale<=HD||isNaN(n.scale))&&(n.scale=1),(n.translate>=GD&&n.translate<=WD||isNaN(n.translate))&&(n.translate=0)}function Oa(n,e,t,r){x_(n.x,e.x,t.x,r?r.originX:void 0),x_(n.y,e.y,t.y,r?r.originY:void 0)}function S_(n,e,t){n.min=t.min+e.min,n.max=n.min+ti(e)}function XD(n,e,t){S_(n.x,e.x,t.x),S_(n.y,e.y,t.y)}function E_(n,e,t){n.min=e.min-t.min,n.max=n.min+ti(e)}function Ba(n,e,t){E_(n.x,e.x,t.x),E_(n.y,e.y,t.y)}function qD(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?jt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?jt(t,n,r.max):Math.min(n,t)),n}function M_(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function YD(n,{top:e,left:t,bottom:r,right:o}){return{x:M_(n.x,t,o),y:M_(n.y,e,r)}}function T_(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function $D(n,e){return{x:T_(n.x,e.x),y:T_(n.y,e.y)}}function KD(n,e){let t=.5;const r=ti(n),o=ti(e);return o>r?t=ko(e.min,e.max-r,n.min):r>o&&(t=ko(n.min,n.max-o,e.min)),dr(0,1,t)}function ZD(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const lp=.35;function QD(n=lp){return n===!1?n=0:n===!0&&(n=lp),{x:w_(n,"left","right"),y:w_(n,"top","bottom")}}function w_(n,e,t){return{min:A_(n,e),max:A_(n,t)}}function A_(n,e){return typeof n=="number"?n:n[e]||0}const C_=()=>({translate:0,scale:1,origin:0,originPoint:0}),wo=()=>({x:C_(),y:C_()}),R_=()=>({min:0,max:0}),Zt=()=>({x:R_(),y:R_()});function ci(n){return[n("x"),n("y")]}function _S({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function JD({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function eL(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Zd(n){return n===void 0||n===1}function up({scale:n,scaleX:e,scaleY:t}){return!Zd(n)||!Zd(e)||!Zd(t)}function Ss(n){return up(n)||yS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function yS(n){return b_(n.x)||b_(n.y)}function b_(n){return n&&n!=="0%"}function ac(n,e,t){const r=n-t,o=e*r;return t+o}function P_(n,e,t,r,o){return o!==void 0&&(n=ac(n,o,r)),ac(n,t,r)+e}function cp(n,e=0,t=1,r,o){n.min=P_(n.min,e,t,r,o),n.max=P_(n.max,e,t,r,o)}function xS(n,{x:e,y:t}){cp(n.x,e.translate,e.scale,e.originPoint),cp(n.y,t.translate,t.scale,t.originPoint)}const D_=.999999999999,L_=1.0000000000001;function tL(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,u;for(let c=0;c<o;c++){a=t[c],u=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Co(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,xS(n,u)),r&&Ss(a.latestValues)&&Co(n,a.latestValues))}e.x<L_&&e.x>D_&&(e.x=1),e.y<L_&&e.y>D_&&(e.y=1)}function Ao(n,e){n.min=n.min+e,n.max=n.max+e}function I_(n,e,t,r,o=.5){const a=jt(n.min,n.max,o);cp(n,e,t,a,r)}function Co(n,e){I_(n.x,e.x,e.scaleX,e.scale,e.originX),I_(n.y,e.y,e.scaleY,e.scale,e.originY)}function SS(n,e){return _S(eL(n.getBoundingClientRect(),e))}function nL(n,e,t){const r=SS(n,t),{scroll:o}=e;return o&&(Ao(r.x,o.offset.x),Ao(r.y,o.offset.y)),r}const ES=({current:n})=>n?n.ownerDocument.defaultView:null,iL=new WeakMap;class rL{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Zt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(rl(p).point)},a=(p,g)=>{const{drag:v,dragPropagation:S,onDragStart:E}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=FD(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(x=>{let y=this.getAxisMotionValue(x).get()||0;if(ki.test(y)){const{projection:P}=this.visualElement;if(P&&P.layout){const R=P.layout.layoutBox[x];R&&(y=ti(R)*(parseFloat(y)/100))}}this.originPoint[x]=y}),E&&zt.postRender(()=>E(p,g)),op(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},u=(p,g)=>{const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:E,onDrag:M}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:x}=g;if(S&&this.currentDirection===null){this.currentDirection=sL(x),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",g.point,x),this.updateAxis("y",g.point,x),this.visualElement.render(),M&&M(p,g)},c=(p,g)=>this.stop(p,g),d=()=>ci(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new pS(e,{onSessionStart:o,onStart:a,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:ES(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&zt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Bu(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=qD(u,this.constraints[e],this.elastic[e])),a.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&To(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=YD(o.layoutBox,t):this.constraints=!1,this.elastic=QD(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ci(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=ZD(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!To(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=nL(r,o.root,this.visualElement.getTransformPagePoint());let u=$D(o.layout.layoutBox,a);if(t){const c=t(JD(u));this.hasMutatedConstraints=!!c,c&&(u=_S(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ci(p=>{if(!Bu(p,t,this.currentDirection))return;let g=d&&d[p]||{};u&&(g={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,E={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...a,...g};return this.startAxisValueAnimation(p,E)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return op(this.visualElement,e),r.start(Gp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!Bu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];a.set(e[t]-jt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!To(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=KD({min:d,max:d},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(u=>{if(!Bu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(jt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;iL.set(this.visualElement,this);const e=this.visualElement.current,t=Fa(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();To(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),zt.read(r);const u=ja(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())});return()=>{u(),t(),a(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:u=lp,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:u,dragMomentum:c}}}function Bu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function sL(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class oL extends $r{constructor(e){super(e),this.removeGroupControls=ei,this.removeListeners=ei,this.controls=new rL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ei}unmount(){this.removeGroupControls(),this.removeListeners()}}const N_=n=>(e,t)=>{n&&zt.postRender(()=>n(e,t))};class aL extends $r{constructor(){super(...arguments),this.removePointerDownListener=ei}onPointerDown(e){this.session=new pS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ES(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:N_(e),onStart:N_(t),onMove:r,onEnd:(a,u)=>{delete this.session,o&&zt.postRender(()=>o(a,u))}}}mount(){this.removePointerDownListener=Fa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Mc=Ie.createContext(null);function lL(){const n=Ie.useContext(Mc);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:r}=n,o=Ie.useId();Ie.useEffect(()=>r(o),[]);const a=Ie.useCallback(()=>t&&t(o),[o,t]);return!e&&t?[!1,a]:[!0]}const $p=Ie.createContext({}),MS=Ie.createContext({}),Ku={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function U_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Pa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(tt.test(n))n=parseFloat(n);else return n;const t=U_(n,e.target.x),r=U_(n,e.target.y);return`${t}% ${r}%`}},uL={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Yr.parse(n);if(o.length>5)return r;const a=Yr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=jt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),a(o)}},lc={};function cL(n){Object.assign(lc,n)}const{schedule:Kp,cancel:AN}=Tx(queueMicrotask,!1);class fL extends Ie.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;cL(dL),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Ku.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,u=r.projection;return u&&(u.isPresent=a,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?u.promote():u.relegate()||zt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Kp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function TS(n){const[e,t]=lL(),r=Ie.useContext($p);return xe.jsx(fL,{...n,layoutGroup:r,switchLayoutGroup:Ie.useContext(MS),isPresent:e,safeToRemove:t})}const dL={borderRadius:{...Pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pa,borderTopRightRadius:Pa,borderBottomLeftRadius:Pa,borderBottomRightRadius:Pa,boxShadow:uL},wS=["TopLeft","TopRight","BottomLeft","BottomRight"],hL=wS.length,F_=n=>typeof n=="string"?parseFloat(n):n,O_=n=>typeof n=="number"||tt.test(n);function pL(n,e,t,r,o,a){o?(n.opacity=jt(0,t.opacity!==void 0?t.opacity:1,mL(r)),n.opacityExit=jt(e.opacity!==void 0?e.opacity:1,0,gL(r))):a&&(n.opacity=jt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<hL;u++){const c=`border${wS[u]}Radius`;let d=B_(e,c),h=B_(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||O_(d)===O_(h)?(n[c]=Math.max(jt(F_(d),F_(h),r),0),(ki.test(h)||ki.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=jt(e.rotate||0,t.rotate||0,r))}function B_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const mL=AS(0,.5,Dx),gL=AS(.5,.95,ei);function AS(n,e,t){return r=>r<n?0:r>e?1:t(ko(n,e,r))}function k_(n,e){n.min=e.min,n.max=e.max}function ui(n,e){k_(n.x,e.x),k_(n.y,e.y)}function z_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function V_(n,e,t,r,o){return n-=e,n=ac(n,1/t,r),o!==void 0&&(n=ac(n,1/o,r)),n}function vL(n,e=0,t=1,r=.5,o,a=n,u=n){if(ki.test(e)&&(e=parseFloat(e),e=jt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=jt(a.min,a.max,r);n===a&&(c-=e),n.min=V_(n.min,e,t,c,o),n.max=V_(n.max,e,t,c,o)}function H_(n,e,[t,r,o],a,u){vL(n,e[t],e[r],e[o],e.scale,a,u)}const _L=["x","scaleX","originX"],yL=["y","scaleY","originY"];function G_(n,e,t,r){H_(n.x,e,_L,t?t.x:void 0,r?r.x:void 0),H_(n.y,e,yL,t?t.y:void 0,r?r.y:void 0)}function W_(n){return n.translate===0&&n.scale===1}function CS(n){return W_(n.x)&&W_(n.y)}function j_(n,e){return n.min===e.min&&n.max===e.max}function xL(n,e){return j_(n.x,e.x)&&j_(n.y,e.y)}function X_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function RS(n,e){return X_(n.x,e.x)&&X_(n.y,e.y)}function q_(n){return ti(n.x)/ti(n.y)}function Y_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class SL{constructor(){this.members=[]}add(e){Wp(this.members,e),e.scheduleRender()}remove(e){if(jp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function EL(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||a||u)&&(r=`translate3d(${o}px, ${a}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:S,skewY:E}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),E&&(r+=`skewY(${E}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const ML=(n,e)=>n.depth-e.depth;class TL{constructor(){this.children=[],this.isDirty=!1}add(e){Wp(this.children,e),this.isDirty=!0}remove(e){jp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ML),this.isDirty=!1,this.children.forEach(e)}}function Zu(n){const e=Cn(n)?n.get():n;return lD(e)?e.toValue():e}function wL(n,e){const t=zi.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(qr(r),n(a-e))};return zt.read(r,!0),()=>qr(r)}function AL(n){return n instanceof SVGElement&&n.tagName!=="svg"}function CL(n,e,t){const r=Cn(n)?n:Wa(n);return r.start(Gp("",r,e,t)),r.animation}const Es={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Na=typeof window<"u"&&window.MotionDebug!==void 0,Qd=["","X","Y","Z"],RL={visibility:"hidden"},$_=1e3;let bL=0;function Jd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function bS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=lS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",zt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&bS(r)}function PS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=bL++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Na&&(Es.totalNodes=Es.resolvedTargetDeltas=Es.recalculatedProjection=0),this.nodes.forEach(LL),this.nodes.forEach(OL),this.nodes.forEach(BL),this.nodes.forEach(IL),Na&&window.MotionDebug.record(Es)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new TL)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Xp),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=AL(u),this.instance=u;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=wL(v,250),Ku.hasAnimatedSinceResize&&(Ku.hasAnimatedSinceResize=!1,this.nodes.forEach(Z_))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||p.getDefaultTransition()||GL,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=p.getProps(),P=!this.targetLayout||!RS(this.targetLayout,E)||S,R=!v&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||R||v&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,R);const b={...bp(M,"layout"),onPlay:x,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else v||Z_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,qr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kL),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&bS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(K_);return}this.isUpdating||this.nodes.forEach(UL),this.isUpdating=!1,this.nodes.forEach(FL),this.nodes.forEach(PL),this.nodes.forEach(DL),this.clearAllSnapshots();const c=zi.now();gn.delta=dr(0,1e3/60,c-gn.timestamp),gn.timestamp=c,gn.isProcessing=!0,Gd.update.process(gn),Gd.preRender.process(gn),Gd.render.process(gn),gn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Kp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(NL),this.sharedNodes.forEach(zL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Zt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!CS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;u&&(c||Ss(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),WL(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return Zt();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(jL))){const{scroll:p}=this.root;p&&(Ao(d.x,p.offset.x),Ao(d.y,p.offset.y))}return d}removeElementScroll(u){var c;const d=Zt();if(ui(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&ui(d,u),Ao(d.x,g.offset.x),Ao(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=Zt();ui(d,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Co(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Ss(p.latestValues)&&Co(d,p.latestValues)}return Ss(this.latestValues)&&Co(d,this.latestValues),d}removeTransform(u){const c=Zt();ui(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Ss(h.latestValues))continue;up(h.latestValues)&&h.updateSnapshot();const p=Zt(),g=h.measurePageBox();ui(p,g),G_(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Ss(this.latestValues)&&G_(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=gn.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),Ba(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Zt(),this.targetWithTransforms=Zt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),XD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ui(this.target,this.layout.layoutBox),xS(this.target,this.targetDelta)):ui(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),Ba(this.relativeTargetOrigin,this.target,S.target),ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Na&&Es.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||up(this.parent.latestValues)||yS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===gn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;ui(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;tL(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Zt());const{target:E}=c;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(z_(this.prevProjectionDelta.x,this.projectionDelta.x),z_(this.prevProjectionDelta.y,this.projectionDelta.y)),Oa(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!Y_(this.projectionDelta.x,this.prevProjectionDelta.x)||!Y_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),Na&&Es.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wo(),this.projectionDelta=wo(),this.projectionDeltaWithTransform=wo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=wo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=Zt(),S=d?d.source:void 0,E=this.layout?this.layout.source:void 0,M=S!==E,x=this.getStack(),y=!x||x.members.length<=1,P=!!(M&&!y&&this.options.crossfade===!0&&!this.path.some(HL));this.animationProgress=0;let R;this.mixTargetDelta=b=>{const N=b/1e3;Q_(g.x,u.x,N),Q_(g.y,u.y,N),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ba(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),VL(this.relativeTarget,this.relativeTargetOrigin,v,N),R&&xL(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Zt()),ui(R,this.relativeTarget)),M&&(this.animationValues=p,pL(p,h,this.latestValues,N,P,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(qr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update(()=>{Ku.hasAnimatedSinceResize=!0,this.currentAnimation=CL(0,$_,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:p}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&DS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Zt();const g=ti(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=ti(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ui(c,d),Co(c,p),Oa(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new SL),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&Jd("z",u,h,this.animationValues);for(let p=0;p<Qd.length;p++)Jd(`rotate${Qd[p]}`,u,h,this.animationValues),Jd(`skew${Qd[p]}`,u,h,this.animationValues);u.render();for(const p in h)u.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return RL;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Zu(u==null?void 0:u.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=Zu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ss(this.latestValues)&&(M.transform=p?p({},""):"none",this.hasProjected=!1),M}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=EL(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x:S,y:E}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const M in lc){if(v[M]===void 0)continue;const{correct:x,applyTo:y}=lc[M],P=h.transform==="none"?v[M]:x(v[M],g);if(y){const R=y.length;for(let b=0;b<R;b++)h[y[b]]=P}else h[M]=P}return this.options.layoutId&&(h.pointerEvents=g===this?Zu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(K_),this.root.sharedNodes.clear()}}}function PL(n){n.updateLayout()}function DL(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,u=t.source!==n.layout.source;a==="size"?ci(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=ti(v);v.min=r[g].min,v.max=v.min+S}):DS(a,t.layoutBox,r)&&ci(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=ti(r[g]);v.max=v.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+S)});const c=wo();Oa(c,r,t.layoutBox);const d=wo();u?Oa(d,n.applyTransform(o,!0),t.measuredBox):Oa(d,r,t.layoutBox);const h=!CS(c);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:S}=g;if(v&&S){const E=Zt();Ba(E,t.layoutBox,v.layoutBox);const M=Zt();Ba(M,r,S.layoutBox),RS(E,M)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=E,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function LL(n){Na&&Es.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function IL(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function NL(n){n.clearSnapshot()}function K_(n){n.clearMeasurements()}function UL(n){n.isLayoutDirty=!1}function FL(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Z_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function OL(n){n.resolveTargetDelta()}function BL(n){n.calcProjection()}function kL(n){n.resetSkewAndRotation()}function zL(n){n.removeLeadSnapshot()}function Q_(n,e,t){n.translate=jt(e.translate,0,t),n.scale=jt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function J_(n,e,t,r){n.min=jt(e.min,t.min,r),n.max=jt(e.max,t.max,r)}function VL(n,e,t,r){J_(n.x,e.x,t.x,r),J_(n.y,e.y,t.y,r)}function HL(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const GL={duration:.45,ease:[.4,0,.1,1]},ey=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ty=ey("applewebkit/")&&!ey("chrome/")?Math.round:ei;function ny(n){n.min=ty(n.min),n.max=ty(n.max)}function WL(n){ny(n.x),ny(n.y)}function DS(n,e,t){return n==="position"||n==="preserve-aspect"&&!jD(q_(e),q_(t),.2)}function jL(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const XL=PS({attachResizeListener:(n,e)=>ja(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),eh={current:void 0},LS=PS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!eh.current){const n=new XL({});n.mount(window),n.setOptions({layoutScroll:!0}),eh.current=n}return eh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),qL={pan:{Feature:aL},drag:{Feature:oL,ProjectionNode:LS,MeasureLayout:TS}};function iy(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&zt.postRender(()=>a(e,rl(e)))}class YL extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=DD(e,t=>(iy(this.node,t,"Start"),r=>iy(this.node,r,"End"))))}unmount(){}}class $L extends $r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=il(ja(this.node.current,"focus",()=>this.onFocus()),ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ry(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&zt.postRender(()=>a(e,rl(e)))}class KL extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=UD(e,t=>(ry(this.node,t,"Start"),(r,{success:o})=>ry(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const fp=new WeakMap,th=new WeakMap,ZL=n=>{const e=fp.get(n.target);e&&e(n)},QL=n=>{n.forEach(ZL)};function JL({root:n,...e}){const t=n||document;th.has(t)||th.set(t,{});const r=th.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(QL,{root:n,...e})),r[o]}function eI(n,e,t){const r=JL(e);return fp.set(n,t),r.observe(n),()=>{fp.delete(n),r.unobserve(n)}}const tI={some:0,all:1};class nI extends $r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:tI[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(d)};return eI(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(iI(e,t))&&this.startObserver()}unmount(){}}function iI({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const rI={inView:{Feature:nI},tap:{Feature:KL},focus:{Feature:$L},hover:{Feature:YL}},sI={layout:{ProjectionNode:LS,MeasureLayout:TS}},Zp=Ie.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Tc=Ie.createContext({}),Qp=typeof window<"u",IS=Qp?Ie.useLayoutEffect:Ie.useEffect,NS=Ie.createContext({strict:!1});function oI(n,e,t,r,o){var a,u;const{visualElement:c}=Ie.useContext(Tc),d=Ie.useContext(NS),h=Ie.useContext(Mc),p=Ie.useContext(Zp).reducedMotion,g=Ie.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,S=Ie.useContext(MS);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&aI(g.current,t,o,S);const E=Ie.useRef(!1);Ie.useInsertionEffect(()=>{v&&E.current&&v.update(t,h)});const M=t[aS],x=Ie.useRef(!!M&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,M))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,M)));return IS(()=>{v&&(E.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Kp.render(v.render),x.current&&v.animationState&&v.animationState.animateChanges())}),Ie.useEffect(()=>{v&&(!x.current&&v.animationState&&v.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,M)}),x.current=!1))}),v}function aI(n,e,t,r){const{layoutId:o,layout:a,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:US(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!u||c&&To(c),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function US(n){if(n)return n.options.allowProjection!==!1?n.projection:US(n.parent)}function lI(n,e,t){return Ie.useCallback(r=>{r&&n.mount&&n.mount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):To(t)&&(t.current=r))},[e])}function wc(n){return xc(n.animate)||Rp.some(e=>Va(n[e]))}function FS(n){return!!(wc(n)||n.variants)}function uI(n,e){if(wc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Va(t)?t:void 0,animate:Va(r)?r:void 0}}return n.inherit!==!1?e:{}}function cI(n){const{initial:e,animate:t}=uI(n,Ie.useContext(Tc));return Ie.useMemo(()=>({initial:e,animate:t}),[sy(e),sy(t)])}function sy(n){return Array.isArray(n)?n.join(" "):n}const oy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zo={};for(const n in oy)zo[n]={isEnabled:e=>oy[n].some(t=>!!e[t])};function fI(n){for(const e in n)zo[e]={...zo[e],...n[e]}}const dI=Symbol.for("motionComponentSymbol");function hI({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){n&&fI(n);function a(c,d){let h;const p={...Ie.useContext(Zp),...c,layoutId:pI(c)},{isStatic:g}=p,v=cI(c),S=r(c,g);if(!g&&Qp){mI();const E=gI(p);h=E.MeasureLayout,v.visualElement=oI(o,S,p,e,E.ProjectionNode)}return xe.jsxs(Tc.Provider,{value:v,children:[h&&v.visualElement?xe.jsx(h,{visualElement:v.visualElement,...p}):null,t(o,c,lI(S,v.visualElement,d),S,g,v.visualElement)]})}const u=Ie.forwardRef(a);return u[dI]=o,u}function pI({layoutId:n}){const e=Ie.useContext($p).id;return e&&n!==void 0?e+"-"+n:n}function mI(n,e){Ie.useContext(NS).strict}function gI(n){const{drag:e,layout:t}=zo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const vI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jp(n){return typeof n!="string"||n.includes("-")?!1:!!(vI.indexOf(n)>-1||/[A-Z]/u.test(n))}function OS(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const BS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function kS(n,e,t,r){OS(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(BS.has(o)?o:qp(o),e.attrs[o])}function zS(n,{layout:e,layoutId:t}){return Us.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!lc[n]||n==="opacity")}function em(n,e,t){var r;const{style:o}=n,a={};for(const u in o)(Cn(o[u])||e.style&&Cn(e.style[u])||zS(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[u]=o[u]);return a}function VS(n,e,t){const r=em(n,e,t);for(const o in n)if(Cn(n[o])||Cn(e[o])){const a=el.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function tm(n){const e=Ie.useRef(null);return e.current===null&&(e.current=n()),e.current}function _I({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},r,o,a){const u={latestValues:yI(r,o,a,n),renderState:e()};return t&&(u.mount=c=>t(r,c,u)),u}const HS=n=>(e,t)=>{const r=Ie.useContext(Tc),o=Ie.useContext(Mc),a=()=>_I(n,e,r,o);return t?a():tm(a)};function yI(n,e,t,r){const o={},a=r(n,{});for(const v in a)o[v]=Zu(a[v]);let{initial:u,animate:c}=n;const d=wc(n),h=FS(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const g=p?c:u;if(g&&typeof g!="boolean"&&!xc(g)){const v=Array.isArray(g)?g:[g];for(let S=0;S<v.length;S++){const E=Ap(n,v[S]);if(E){const{transitionEnd:M,transition:x,...y}=E;for(const P in y){let R=y[P];if(Array.isArray(R)){const b=p?R.length-1:0;R=R[b]}R!==null&&(o[P]=R)}for(const P in M)o[P]=M[P]}}}return o}const nm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),GS=()=>({...nm(),attrs:{}}),WS=(n,e)=>e&&typeof n=="number"?e.transform(n):n,xI={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},SI=el.length;function EI(n,e,t){let r="",o=!0;for(let a=0;a<SI;a++){const u=el[a],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=WS(c,Fp[u]);if(!d){o=!1;const p=xI[u]||u;r+=`${p}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function im(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Us.has(d)){u=!0;continue}else if(Fx(d)){o[d]=h;continue}else{const p=WS(h,Fp[d]);d.startsWith("origin")?(c=!0,a[d]=p):r[d]=p}}if(e.transform||(u||t?r.transform=EI(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}function ay(n,e,t){return typeof n=="string"?n:tt.transform(e+t*n)}function MI(n,e,t){const r=ay(e,n.x,n.width),o=ay(t,n.y,n.height);return`${r} ${o}`}const TI={offset:"stroke-dashoffset",array:"stroke-dasharray"},wI={offset:"strokeDashoffset",array:"strokeDasharray"};function AI(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?TI:wI;n[a.offset]=tt.transform(-r);const u=tt.transform(e),c=tt.transform(t);n[a.array]=`${u} ${c}`}function rm(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},p,g){if(im(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:S,dimensions:E}=n;v.transform&&(E&&(S.transform=v.transform),delete v.transform),E&&(o!==void 0||a!==void 0||S.transform)&&(S.transformOrigin=MI(E,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&AI(v,u,c,d,!1)}const sm=n=>typeof n=="string"&&n.toLowerCase()==="svg",CI={useVisualState:HS({scrapeMotionValuesFromProps:VS,createRenderState:GS,onMount:(n,e,{renderState:t,latestValues:r})=>{zt.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),zt.render(()=>{rm(t,r,sm(e.tagName),n.transformTemplate),kS(e,t)})}})},RI={useVisualState:HS({scrapeMotionValuesFromProps:em,createRenderState:nm})};function jS(n,e,t){for(const r in e)!Cn(e[r])&&!zS(r,t)&&(n[r]=e[r])}function bI({transformTemplate:n},e){return Ie.useMemo(()=>{const t=nm();return im(t,e,n),Object.assign({},t.vars,t.style)},[e])}function PI(n,e){const t=n.style||{},r={};return jS(r,t,n),Object.assign(r,bI(n,e)),r}function DI(n,e){const t={},r=PI(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const LI=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function uc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||LI.has(n)}let XS=n=>!uc(n);function II(n){n&&(XS=e=>e.startsWith("on")?!uc(e):n(e))}try{II(require("@emotion/is-prop-valid").default)}catch{}function NI(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(XS(o)||t===!0&&uc(o)||!e&&!uc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function UI(n,e,t,r){const o=Ie.useMemo(()=>{const a=GS();return rm(a,e,sm(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};jS(a,n.style,n),o.style={...a,...o.style}}return o}function FI(n=!1){return(t,r,o,{latestValues:a},u)=>{const d=(Jp(t)?UI:DI)(r,a,u,t),h=NI(r,typeof t=="string",n),p=t!==Ie.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=Ie.useMemo(()=>Cn(g)?g.get():g,[g]);return Ie.createElement(t,{...p,children:v})}}function OI(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Jp(r)?CI:RI,preloadedFeatures:n,useRender:FI(o),createVisualElement:e,Component:r};return hI(u)}}const dp={current:null},qS={current:!1};function BI(){if(qS.current=!0,!!Qp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>dp.current=n.matches;n.addListener(e),e()}else dp.current=!1}function kI(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Cn(o))n.addValue(r,o);else if(Cn(a))n.addValue(r,Wa(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Wa(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const ly=new WeakMap,zI=[...kx,wn,Yr],VI=n=>zI.find(Bx(n)),uy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class HI{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ip,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=zi.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,zt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=wc(t),this.isVariantNode=FS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in g){const S=g[v];d[v]!==void 0&&Cn(S)&&S.set(d[v],!1)}}mount(e){this.current=e,ly.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),qS.current||BI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:dp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ly.delete(this.current),this.projection&&this.projection.unmount(),qr(this.notifyUpdate),qr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Us.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&zt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in zo){const t=zo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Zt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<uy.length;r++){const o=uy[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,u=e[a];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=kI(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Wa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Nx(o)||Ix(o))?o=parseFloat(o):!VI(o)&&Yr.test(t)&&(o=qx(e,t)),this.setBaseTarget(e,Cn(o)?o.get():o)),Cn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Ap(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Cn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Xp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class YS extends HI{constructor(){super(...arguments),this.KeyframeResolver=Yx}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Cn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function GI(n){return window.getComputedStyle(n)}class WI extends YS{constructor(){super(...arguments),this.type="html",this.renderInstance=OS}readValueFromInstance(e,t){if(Us.has(t)){const r=Op(t);return r&&r.default||0}else{const r=GI(e),o=(Fx(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return SS(e,t)}build(e,t,r){im(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return em(e,t,r)}}class jI extends YS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Zt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Us.has(t)){const r=Op(t);return r&&r.default||0}return t=BS.has(t)?t:qp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return VS(e,t,r)}build(e,t,r){rm(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){kS(e,t,r,o)}mount(e){this.isSVGTag=sm(e.tagName),super.mount(e)}}const XI=(n,e)=>Jp(n)?new jI(e):new WI(e,{allowProjection:n!==Ie.Fragment}),qI=OI({...bD,...rI,...qL,...sI},XI),hi=CP(qI);class YI extends Ie.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function $I({children:n,isPresent:e}){const t=Ie.useId(),r=Ie.useRef(null),o=Ie.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=Ie.useContext(Zp);return Ie.useInsertionEffect(()=>{const{width:u,height:c,top:d,left:h}=o.current;if(e||!r.current||!u||!c)return;r.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),xe.jsx(YI,{isPresent:e,childRef:r,sizeRef:o,children:Ie.cloneElement(n,{ref:r})})}const KI=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:u})=>{const c=tm(ZI),d=Ie.useId(),h=Ie.useCallback(g=>{c.set(g,!0);for(const v of c.values())if(!v)return;r&&r()},[c,r]),p=Ie.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(c.set(g,!1),()=>c.delete(g))}),a?[Math.random(),h]:[t,h]);return Ie.useMemo(()=>{c.forEach((g,v)=>c.set(v,!1))},[t]),Ie.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),u==="popLayout"&&(n=xe.jsx($I,{isPresent:t,children:n})),xe.jsx(Mc.Provider,{value:p,children:n})};function ZI(){return new Map}const ku=n=>n.key||"";function cy(n){const e=[];return Ie.Children.forEach(n,t=>{Ie.isValidElement(t)&&e.push(t)}),e}const QI=({children:n,exitBeforeEnter:e,custom:t,initial:r=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:u="sync"})=>{const c=Ie.useMemo(()=>cy(n),[n]),d=c.map(ku),h=Ie.useRef(!0),p=Ie.useRef(c),g=tm(()=>new Map),[v,S]=Ie.useState(c),[E,M]=Ie.useState(c);IS(()=>{h.current=!1,p.current=c;for(let P=0;P<E.length;P++){const R=ku(E[P]);d.includes(R)?g.delete(R):g.get(R)!==!0&&g.set(R,!1)}},[E,d.length,d.join("-")]);const x=[];if(c!==v){let P=[...c];for(let R=0;R<E.length;R++){const b=E[R],N=ku(b);d.includes(N)||(P.splice(R,0,b),x.push(b))}u==="wait"&&x.length&&(P=x),M(cy(P)),S(c);return}const{forceRender:y}=Ie.useContext($p);return xe.jsx(xe.Fragment,{children:E.map(P=>{const R=ku(P),b=c===E||d.includes(R),N=()=>{if(g.has(R))g.set(R,!0);else return;let F=!0;g.forEach(U=>{U||(F=!1)}),F&&(y==null||y(),M(p.current),o&&o())};return xe.jsx(KI,{isPresent:b,initial:!h.current||r?void 0:!1,custom:b?void 0:t,presenceAffectsLayout:a,mode:u,onExitComplete:b?void 0:N,children:P},R)})})};function om(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function JI(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function am(n,e,t){return e&&JI(n.prototype,e),n}function fy(n){return+n.replace(/px/,"")}function eN(n){var e=window.devicePixelRatio,t=getComputedStyle(n),r=fy(t.getPropertyValue("width")),o=fy(t.getPropertyValue("height"));n.setAttribute("width",(r*e).toString()),n.setAttribute("height",(o*e).toString())}function Ti(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=Math.random()*(e-n)+n;return Math.floor(r*Math.pow(10,t))/Math.pow(10,t)}function dy(n){return n[Ti(0,n.length)]}var tN=.00125,nN=5e-4,iN=9e-4,rN=1e-5,sN=6,oN=80,aN=.9,lN=1.7,uN=.2,cN=.6,fN=.03,dN=.07,hy=15,py=82,hN=150,pN=100,mN=250,gN=40,vN=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function my(n){var e=1920;return Math.log(n)/Math.log(e)}var gy=function(){function n(e){om(this,n);var t=e.initialPosition,r=e.direction,o=e.confettiRadius,a=e.confettiColors,u=e.emojis,c=e.emojiSize,d=e.canvasWidth,h=Ti(aN,lN,3),p=h*my(d);this.confettiSpeed={x:p,y:p},this.finalConfettiSpeedX=Ti(uN,cN,3),this.rotationSpeed=u.length?.01:Ti(fN,dN,3)*my(d),this.dragForceCoefficient=Ti(nN,iN,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle=r==="left"?Ti(0,.2,3):Ti(-.2,0,3),this.emojiSize=c,this.emojiRotationAngle=Ti(0,2*Math.PI),this.radiusYUpdateDirection="down";var g=r==="left"?Ti(py,hy)*Math.PI/180:Ti(-hy,-py)*Math.PI/180;this.absCos=Math.abs(Math.cos(g)),this.absSin=Math.abs(Math.sin(g));var v=Ti(-hN,0),S={x:t.x+(r==="left"?-v:v)*this.absCos,y:t.y-v*this.absSin};this.currentPosition=Object.assign({},S),this.initialPosition=Object.assign({},S),this.color=u.length?null:dy(a),this.emoji=u.length?dy(u):null,this.createdAt=new Date().getTime(),this.direction=r}return am(n,[{key:"draw",value:function(t){var r=this.currentPosition,o=this.radius,a=this.color,u=this.emoji,c=this.rotationAngle,d=this.emojiRotationAngle,h=this.emojiSize,p=window.devicePixelRatio;a?(t.fillStyle=a,t.beginPath(),t.ellipse(r.x*p,r.y*p,o.x*p,o.y*p,c,0,2*Math.PI),t.fill()):u&&(t.font="".concat(h,"px serif"),t.save(),t.translate(p*r.x,p*r.y),t.rotate(d),t.textAlign="center",t.fillText(u,0,0),t.restore())}},{key:"updatePosition",value:function(t,r){var o=this.confettiSpeed,a=this.dragForceCoefficient,u=this.finalConfettiSpeedX,c=this.radiusYUpdateDirection,d=this.rotationSpeed,h=this.createdAt,p=this.direction,g=r-h;if(o.x>u&&(this.confettiSpeed.x-=a*t),this.currentPosition.x+=o.x*(p==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-o.y*this.absSin*g+tN*Math.pow(g,2)/2,this.rotationSpeed-=this.emoji?1e-4:rN*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}c==="down"?(this.radius.y-=t*d,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*d,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+pN}}]),n}();function _N(){var n=document.createElement("canvas");return n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.top="0",n.style.left="0",n.style.zIndex="1000",n.style.pointerEvents="none",document.body.appendChild(n),n}function yN(n){var e=n.confettiRadius,t=e===void 0?sN:e,r=n.confettiNumber,o=r===void 0?n.confettiesNumber||(n.emojis?gN:mN):r,a=n.confettiColors,u=a===void 0?vN:a,c=n.emojis,d=c===void 0?n.emojies||[]:c,h=n.emojiSize,p=h===void 0?oN:h;return n.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),n.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:o,confettiColors:u,emojis:d,emojiSize:p}}var xN=function(){function n(e){var t=this;om(this,n),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(r){return t.resolvePromise=r})}return am(n,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,r,o){var a=this,u=t.timeDelta,c=t.currentTime;this.shapes=this.shapes.filter(function(d){return d.updatePosition(u,c),d.draw(a.canvasContext),o?d.getIsVisibleOnCanvas(r):!0})}}]),n}(),SN=function(){function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};om(this,n),this.activeConfettiBatches=[],this.canvas=e.canvas||_N(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return am(n,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,eN(this.canvas);var t=new Date().getTime(),r=t-this.lastUpdated,o=this.canvas.offsetHeight,a=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(u){return u.processShapes({timeDelta:r,currentTime:t},o,a),a?!u.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=yN(t),o=r.confettiRadius,a=r.confettiNumber,u=r.confettiColors,c=r.emojis,d=r.emojiSize,h=this.canvas.getBoundingClientRect(),p=h.width,g=h.height,v=g*5/7,S={x:0,y:v},E={x:p,y:v},M=new xN(this.canvasContext),x=0;x<a/2;x++){var y=new gy({initialPosition:S,direction:"right",confettiRadius:o,confettiColors:u,confettiNumber:a,emojis:c,emojiSize:d,canvasWidth:p}),P=new gy({initialPosition:E,direction:"left",confettiRadius:o,confettiColors:u,confettiNumber:a,emojis:c,emojiSize:d,canvasWidth:p});M.addShapes(y,P)}return this.activeConfettiBatches.push(M),this.queueAnimationFrameIfNeeded(),M.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),n}();const EN=({isVisible:n,onComplete:e})=>{const t=()=>{const r=new SN;r.addConfetti({confettiColors:["#22c55e","#3b82f6","#f97316","#8b5cf6","#f43f5e"],confettiRadius:6,confettiNumber:500}),setTimeout(()=>{r.addConfetti({emojis:["🎉","🎊","✨","💫","⭐"],emojiSize:50,confettiNumber:30})},400)};return xe.jsx(QI,{children:n&&xe.jsx(hi.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},onAnimationStart:t,onAnimationComplete:e,className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",children:xe.jsxs(hi.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:20},className:"bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center max-w-md mx-4",children:[xe.jsx(hi.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:300},className:"w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4",children:xe.jsx(kM,{className:"w-10 h-10 text-green-500"})}),xe.jsx(hi.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-2xl font-bold text-gray-800 mb-2 text-center",children:"Muvaffaqiyatli yuborildi!"}),xe.jsx(hi.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-gray-600 text-center mb-6",children:"Barcha ma'lumotlar tizimga yuborildi."}),xe.jsx(hi.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-sm text-gray-500 text-center",children:"Bizni tanlaganingiz uchun tashakkur!"})]})})})},MN=()=>{const n="https://hrapi.vizzano-apparel.uz:2028/api",[e,t]=Ie.useState({name:"",phone:"+998",address:"",comment:""}),[r,o]=Ie.useState(!1),[a,u]=Ie.useState(!1),c=h=>{t({...e,[h.target.name]:h.target.value})},d=async h=>{h.preventDefault(),o(!0);const p={name:h.target.name.value,phone:h.target.phone.value,address:h.target.address.value,comment:h.target.comment.value},g=`<b>Yangi ariza qabul qilindi:</b>

👤 <b>Ismi:</b> ${p.name}
📞 <b>Telefon raqami:</b> ${p.phone}
🏡 <b>Yashash joyi:</b> ${p.address}
📝 <b>Xabar:</b> ${p.comment}
⏳ Ariza vaqti: ${new Date().toLocaleString()}`.trim();try{await en.post(`${n}/lids/`,p),await en.post("https://api.telegram.org/bot7036385914:AAFmyFifual_T0jqGlDPavYB2qEZg_pnU9U/sendMessage",{chat_id:"-1002458102138",text:g,parse_mode:"HTML"}),u(!0),t({name:"",phone:"+998",address:"",comment:""}),setTimeout(()=>{u(!1)},5e3)}catch(v){console.error(v)}finally{o(!1)}};return xe.jsxs(xe.Fragment,{children:[xe.jsx(EN,{isVisible:a,onComplete:()=>console.log("Animation completed")}),xe.jsx(hi.form,{id:"contact",className:"w-[90vw] max-w-2xl mx-auto p-6 rounded-md shadow-2xl relative bg-black/70",onSubmit:d,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:xe.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[xe.jsxs(hi.div,{className:"flex flex-col gap-2",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},children:[xe.jsx("label",{htmlFor:"name",className:"text-white/90",children:"Ismingiz"}),xe.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,className:"bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40 transition-all duration-300 hover:bg-white/20",required:!0,placeholder:"Ismingizni kiriting"})]}),xe.jsxs(hi.div,{className:"flex flex-col gap-2",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.2},children:[xe.jsx("label",{htmlFor:"phone",className:"text-white/90",children:"Telefon raqamingiz"}),xe.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:c,className:"bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40 transition-all duration-300 hover:bg-white/20",required:!0,placeholder:"+998 (99) 999-99-99"})]}),xe.jsxs(hi.div,{className:"flex flex-col gap-2 md:col-span-2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[xe.jsx("label",{htmlFor:"address",className:"text-white/90",children:"Yashash joyingiz"}),xe.jsx("input",{type:"text",id:"address",name:"address",value:e.address,onChange:c,className:"bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40 transition-all duration-300 hover:bg-white/20",required:!0,placeholder:"Yashash joyingizni kiriting"})]}),xe.jsxs(hi.div,{className:"flex flex-col gap-2 md:col-span-2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[xe.jsx("label",{htmlFor:"comment",className:"text-white/90",children:"Izoh"}),xe.jsx("textarea",{id:"comment",name:"comment",value:e.comment,onChange:c,rows:"4",className:"bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40 resize-none transition-all duration-300 hover:bg-white/20",required:!0,placeholder:"Izohni kiriting"})]}),xe.jsx(hi.button,{type:"submit",disabled:r,className:"md:col-span-2 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95",whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:r?xe.jsxs("span",{className:"flex items-center justify-center gap-2",children:[xe.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[xe.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),xe.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Yuborilmoqda..."]}):"Yuborish"})]})})]})},TN=()=>(Ie.useEffect(()=>{const n=new iw,e=new di(75,window.innerWidth/window.innerHeight,.1,1e3),t=new qR({alpha:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const r=document.getElementById("showcase-background");r&&(t.domElement.style.position="fixed",t.domElement.style.top="0",t.domElement.style.left="0",t.domElement.style.zIndex="1",r.appendChild(t.domElement));const o=new hr,a=5e3,u=new Float32Array(a*3);for(let g=0;g<a*3;g++)u[g]=(Math.random()-.5)*5;o.setAttribute("position",new bi(u,3));const c=new Xy({size:.005,color:"#ffffff"}),d=new ow(o,c);n.add(d),e.position.z=2;const h=()=>{requestAnimationFrame(h),d.rotation.y+=.001,t.render(n,e)};h();const p=()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p),r==null||r.removeChild(t.domElement)}},[]),xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{id:"showcase-background",className:"fixed inset-0 bg-black"}),xe.jsx("div",{className:"relative",children:xe.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-white px-4 py-20",children:[xe.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-center mb-12",children:"BIZNING JAMOAGA QO'SHILING!"}),xe.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[xe.jsx("a",{href:"#contact",children:xe.jsx("button",{className:"w-full px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 font-semibold transform",children:"RO'YHATDAN O'TISH"})}),xe.jsx("a",{href:"https://t.me/vizzano_promzona",target:"_blank",children:xe.jsx("button",{className:"px-8 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 font-semibold transform",children:"GURUHGA QO'SHILISH"})})]})]})}),xe.jsx($R,{}),xe.jsx(KR,{}),xe.jsx(MN,{}),xe.jsx(ZR,{}),xe.jsx("div",{className:"text-center relative",children:xe.jsx("p",{className:"text-white py-4",children:"© 2024 AlgoTeam"})})]})),wN=()=>xe.jsxs("div",{className:"relative w-full min-h-screen bg-black text-white",children:[xe.jsx(VM,{}),xe.jsx(TN,{})]});UM.createRoot(document.getElementById("root")).render(xe.jsx(Ie.StrictMode,{children:xe.jsx(wN,{})}));
