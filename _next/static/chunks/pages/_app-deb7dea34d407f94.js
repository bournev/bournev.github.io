(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1799:function(e,t,n){let r=n(7294),i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});e.exports=i},243:function(e,t,n){let r=n(7294),i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});e.exports=i},3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9327)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,l=n(1598).Z,a=n(7273).Z,o=l(n(7294)),s=i(n(3121)),u=n(2675),c=n(139),d=n(8730);n(7238);var f=i(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,a=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>a,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=o.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:l,qualityInt:s,className:u,imgStyle:c,blurStyle:d,isLazy:f,fill:p,placeholder:h,loading:m,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:x,onLoadingCompleteRef:E,onLoad:j,onError:C}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=f?"lazy":m,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,n,{width:l,height:i,decoding:"async","data-nimg":p?"fill":"1",className:u,loading:m,style:r({},c,d),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,v,x,E,b))},[v,x,E,C,b,t]),onLoad(e){let t=e.currentTarget;g(t,v,x,E,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===h&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),C&&C(e)}})))}),y=o.forwardRef((e,t)=>{let n,i;var l,{src:g,sizes:y,unoptimized:b=!1,priority:w=!1,loading:x,className:E,quality:j,width:C,height:S,fill:k,style:O,onLoad:N,onLoadingComplete:_,placeholder:T="empty",blurDataURL:R,layout:P,objectFit:F,objectPosition:L,lazyBoundary:M,lazyRoot:I}=e,A=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let z=o.useContext(d.ImageConfigContext),D=o.useMemo(()=>{let e=p||z||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[z]),H=A,B=H.loader||f.default;if(delete H.loader,"__next_img_default"in B){if("custom"===D.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let U=B;B=e=>{let{config:t}=e,n=a(e,["config"]);return U(n)}}if(P){"fill"===P&&(k=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];q&&(O=r({},O,q));let W={responsive:"100vw",fill:"100vw"}[P];W&&!y&&(y=W)}let $="",V=m(C),Z=m(S);if("object"==typeof(l=g)&&(h(l)||void 0!==l.src)){let G=h(g)?g.default:g;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(!G.height||!G.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));if(n=G.blurWidth,i=G.blurHeight,R=R||G.blurDataURL,$=G.src,!k){if(V||Z){if(V&&!Z){let K=V/G.width;Z=Math.round(G.height*K)}else if(!V&&Z){let J=Z/G.height;V=Math.round(G.width*J)}}else V=G.width,Z=G.height}}let X=!w&&("lazy"===x||void 0===x);((g="string"==typeof g?g:$).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,X=!1),D.unoptimized&&(b=!0);let Y=m(j),Q=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:L}:{},{color:"transparent"},O),ee="blur"===T&&R?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:V,heightInt:Z,blurWidth:n,blurHeight:i,blurDataURL:R}),'")')}:{},et=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:l,sizes:a,loader:o}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let l=/(^|\s)(1?\d?\d)vw/g,a=[];for(let o;o=l.exec(n);o)a.push(parseInt(o[2]));if(a.length){let s=.01*Math.min(...a);return{widths:i.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:u,kind:"x"}}(t,i,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>"".concat(o({config:t,src:n,quality:l,width:e})," ").concat("w"===u?e:r+1).concat(u)).join(", "),src:o({config:t,src:n,quality:l,width:s[c]})}}({config:D,src:g,unoptimized:b,width:V,quality:Y,sizes:y,loader:B}),en=g,er={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:H.crossOrigin},ei=o.useRef(N);o.useEffect(()=>{ei.current=N},[N]);let el=o.useRef(_);o.useEffect(()=>{el.current=_},[_]);let ea=r({isLazy:X,imgAttributes:et,heightInt:Z,widthInt:V,qualityInt:Y,className:E,imgStyle:Q,blurStyle:ee,loading:x,config:D,fill:k,unoptimized:b,placeholder:T,loader:B,srcString:en,onLoadRef:ei,onLoadingCompleteRef:el},H);return o.default.createElement(o.default.Fragment,null,o.default.createElement(v,Object.assign({},ea,{ref:t})),w?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},er))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,i=n(7273).Z,l=r(n(7294)),a=n(1003),o=n(7795),s=n(4465),u=n(2692),c=n(8245),d=n(9246),f=n(227),p=n(3468);let h=new Set;function m(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+i;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:o.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:o,as:h,children:v,prefetch:y,passHref:b,replace:w,shallow:x,scroll:E,locale:j,onClick:C,onMouseEnter:S,onTouchStart:k,legacyBehavior:O=!1}=e,N=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let _=!1!==y,T=l.default.useContext(u.RouterContext),R=l.default.useContext(c.AppRouterContext),P=null!=T?T:R,F=!T,{href:L,as:M}=l.default.useMemo(()=>{if(!T){let e=g(o);return{href:e,as:h?g(h):e}}let[t,n]=a.resolveHref(T,o,!0);return{href:t,as:h?a.resolveHref(T,h):n||t}},[T,o,h]),I=l.default.useRef(L),A=l.default.useRef(M);O&&(r=l.default.Children.only(n));let z=O?r&&"object"==typeof r&&r.ref:t,[D,H,B]=d.useIntersection({rootMargin:"200px"}),U=l.default.useCallback(e=>{(A.current!==M||I.current!==L)&&(B(),A.current=M,I.current=L),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[M,z,L,B,D]);l.default.useEffect(()=>{P&&H&&_&&m(P,L,M,{locale:j})},[M,L,H,j,_,null==T?void 0:T.locale,P]);let q={ref:U,onClick(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,i,o,s,u,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:u,scroll:s}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};c?l.default.startTransition(h):h()}(e,P,L,M,w,x,E,j,F,_)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(_||!F)&&m(P,L,M,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(_||!F)&&m(P,L,M,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||b||"a"===r.type&&!("href"in r.props)){let W=void 0!==j?j:null==T?void 0:T.locale,$=(null==T?void 0:T.isLocaleDomain)&&f.getDomainLocale(M,W,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);q.href=$||p.addBasePath(s.addLocale(M,W,null==T?void 0:T.defaultLocale))}return O?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},N,q),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!l,[c,d]=r.useState(!1),[f,p]=r.useState(null);r.useEffect(()=>{if(l){if(!u&&!c&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:i,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:i},o.push(n),a.set(n,t),t}(n);return l.set(e,t),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),a.delete(r);let t=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&o.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let r=i.requestIdleCallback(()=>d(!0));return()=>i.cancelIdleCallback(r)}},[f,u,n,t,c]);let h=r.useCallback(()=>{d(!1)},[]);return[p,c,h]};var r=n(7294),i=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:l}=e,a=r||t,o=i||n,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9327:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return es}});var r,i,l,a,o=n(5893);n(2490);var s=n(7294),u=n(1664),c=n.n(u),d=n(5675),f=n.n(d);function p(...e){return e.filter(Boolean).join(" ")}function h(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,h),i}var m=((r=m||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),g=((i=g||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function v({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:l=!0,name:a}){let o=b(t,e);if(l)return y(o,n,r,a);let s=null!=i?i:0;if(2&s){let{static:u=!1,...c}=o;if(u)return y(c,n,r,a)}if(1&s){let{unmount:d=!0,...f}=o;return h(d?0:1,{0:()=>null,1:()=>y({...f,hidden:!0,style:{display:"none"}},n,r,a)})}return y(o,n,r,a)}function y(e,t={},n,r){var i;let{as:l=n,children:a,refName:o="ref",...u}=E(e,["unmount","static"]),c=void 0!==e.ref?{[o]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let f={};if(t){let h=!1,m=[];for(let[g,v]of Object.entries(t))"boolean"==typeof v&&(h=!0),!0===v&&m.push(g);h&&(f["data-headlessui-state"]=m.join(" "))}if(l===s.Fragment&&Object.keys(x(u)).length>0){if(!(0,s.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let y=p(null==(i=d.props)?void 0:i.className,u.className);return(0,s.cloneElement)(d,Object.assign({},b(d.props,x(E(u,["ref"]))),f,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),y?{className:y}:{}))}return(0,s.createElement)(l,Object.assign({},E(u,["ref"]),l!==s.Fragment&&c,l!==s.Fragment&&f),d)}function b(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&"function"==typeof r[i]?(null!=n[i]||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let l in n)Object.assign(t,{[l](e,...t){for(let r of n[l]){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function w(e){var t;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function x(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function E(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let j=(0,s.createContext)(null);j.displayName="OpenClosedContext";var C=((l=C||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function S(){return(0,s.useContext)(j)}function k({value:e,children:t}){return s.createElement(j.Provider,{value:e},t)}var O=Object.defineProperty,N=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t,n)=>(N(e,"symbol"!=typeof t?t+"":t,n),n);let T=new class{constructor(){_(this,"current",this.detect()),_(this,"handoffState","pending"),_(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},R=(e,t)=>{T.isServer?(0,s.useEffect)(e,t):(0,s.useLayoutEffect)(e,t)};function P(){let e=(0,s.useRef)(!1);return R(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function F(e){let t=(0,s.useRef)(e);return R(()=>{t.current=e},[e]),t}function L(){let[e,t]=(0,s.useState)(T.isHandoffComplete);return e&&!1===T.isHandoffComplete&&t(!1),(0,s.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,s.useEffect)(()=>T.handoff(),[]),e}let M=function(e){let t=F(e);return s.useCallback((...e)=>t.current(...e),[t])},I=Symbol();function A(...e){let t=(0,s.useRef)(e);(0,s.useEffect)(()=>{t.current=e},[e]);let n=M(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[I]))?void 0:n}function z(){let e=[],t={addEventListener:(e,n,r,i)=>(e.addEventListener(n,r,i),t.add(()=>e.removeEventListener(n,r,i))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let r={current:!0};return n=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{r.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[r]=e.splice(n,1);r()}}),dispose(){for(let t of e.splice(0))t()},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})}};return t}function D(e,...t){e&&t.length>0&&e.classList.add(...t)}function H(e,...t){e&&t.length>0&&e.classList.remove(...t)}function B(){let[e]=(0,s.useState)(z);return(0,s.useEffect)(()=>()=>e.dispose(),[e]),e}function U(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let q=(0,s.createContext)(null);q.displayName="TransitionContext";var W=((a=W||{}).Visible="visible",a.Hidden="hidden",a);let $=(0,s.createContext)(null);function V(e){return"children"in e?V(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function Z(e,t){let n=F(e),r=(0,s.useRef)([]),i=P(),l=B(),a=M((e,t=g.Hidden)=>{let a=r.current.findIndex(({el:t})=>t===e);-1!==a&&(h(t,{[g.Unmount](){r.current.splice(a,1)},[g.Hidden](){r.current[a].state="hidden"}}),l.microTask(()=>{var e;!V(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),o=M(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>a(e,g.Unmount)}),u=(0,s.useRef)([]),c=(0,s.useRef)(Promise.resolve()),d=(0,s.useRef)({enter:[],leave:[],idle:[]}),f=M((e,n,r)=>{u.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{u.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(d.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?c.current=c.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),p=M((e,t,n)=>{Promise.all(d.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=u.current.shift())||e()}).then(()=>n(t))});return(0,s.useMemo)(()=>({children:r,register:o,unregister:a,onStart:f,onStop:p,wait:c,chains:d}),[o,a,r,f,p,d,c])}function G(){}$.displayName="NestingContext";let K=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function J(e){var t;let n={};for(let r of K)n[r]=null!=(t=e[r])?t:G;return n}let X=m.RenderStrategy,Y=w(function(e,t){let{show:n,appear:r=!1,unmount:i,...l}=e,a=(0,s.useRef)(null),o=A(a,t);L();let u=S();if(void 0===n&&null!==u&&(n=(u&C.Open)===C.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,s.useState)(n?"visible":"hidden"),f=Z(()=>{d("hidden")}),[p,h]=(0,s.useState)(!0),m=(0,s.useRef)([n]);R(()=>{!1!==p&&m.current[m.current.length-1]!==n&&(m.current.push(n),h(!1))},[m,n]);let g=(0,s.useMemo)(()=>({show:n,appear:r,initial:p}),[n,r,p]);(0,s.useEffect)(()=>{if(n)d("visible");else if(V(f)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")},[n,f]);let y={unmount:i};return s.createElement($.Provider,{value:f},s.createElement(q.Provider,{value:g},v({ourProps:{...y,as:s.Fragment,children:s.createElement(Q,{ref:o,...y,...l})},theirProps:{},defaultTag:s.Fragment,features:X,visible:"visible"===c,name:"Transition"})))}),Q=w(function(e,t){var n;let r,{beforeEnter:i,afterEnter:l,beforeLeave:a,afterLeave:o,enter:u,enterFrom:c,enterTo:d,entered:f,leave:m,leaveFrom:y,leaveTo:b,...w}=e,x=(0,s.useRef)(null),E=A(x,t),j=w.unmount?g.Unmount:g.Hidden,{show:S,appear:O,initial:N}=function(){let e=(0,s.useContext)(q);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[_,I]=(0,s.useState)(S?"visible":"hidden"),W=function(){let e=(0,s.useContext)($);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:G,unregister:K}=W,Y=(0,s.useRef)(null);(0,s.useEffect)(()=>G(x),[G,x]),(0,s.useEffect)(()=>{if(j===g.Hidden&&x.current){if(S&&"visible"!==_){I("visible");return}return h(_,{hidden:()=>K(x),visible:()=>G(x)})}},[_,x,G,K,S,j]);let Q=F({enter:U(u),enterFrom:U(c),enterTo:U(d),entered:U(f),leave:U(m),leaveFrom:U(y),leaveTo:U(b)}),ee=(n={beforeEnter:i,afterEnter:l,beforeLeave:a,afterLeave:o},r=(0,s.useRef)(J(n)),(0,s.useEffect)(()=>{r.current=J(n)},[n]),r),et=L();(0,s.useEffect)(()=>{if(et&&"visible"===_&&null===x.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[x,_,et]);let en=N&&!O,er=!et||en||Y.current===S?"idle":S?"enter":"leave",ei=function(e=0){let[t,n]=(0,s.useState)(e),r=(0,s.useCallback)(e=>n(t=>t|e),[t]),i=(0,s.useCallback)(e=>Boolean(t&e),[t]);return{flags:t,addFlag:r,hasFlag:i,removeFlag:(0,s.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,s.useCallback)(e=>n(t=>t^e),[n])}}(0),el=M(e=>h(e,{enter(){ei.addFlag(C.Opening),ee.current.beforeEnter()},leave(){ei.addFlag(C.Closing),ee.current.beforeLeave()},idle(){}})),ea=M(e=>h(e,{enter(){ei.removeFlag(C.Opening),ee.current.afterEnter()},leave(){ei.removeFlag(C.Closing),ee.current.afterLeave()},idle(){}})),eo=Z(()=>{I("hidden"),K(x)},W);(function({container:e,direction:t,classes:n,onStart:r,onStop:i}){let l=P(),a=B(),o=F(t);R(()=>{let t=z();a.add(t.dispose);let s=e.current;if(s&&"idle"!==o.current&&l.current){var u,c,d,f;let p,m,g,v,y,b,w;return t.dispose(),r.current(o.current),t.add((u=s,c=n.current,d="enter"===o.current,f=()=>{t.dispose(),i.current(o.current)},m=d?"enter":"leave",g=z(),v=void 0!==f?(p={called:!1},(...e)=>{if(!p.called)return p.called=!0,f(...e)}):()=>{},"enter"===m&&(u.removeAttribute("hidden"),u.style.display=""),y=h(m,{enter:()=>c.enter,leave:()=>c.leave}),b=h(m,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),w=h(m,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),H(u,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),D(u,...y,...w),g.nextFrame(()=>{H(u,...w),D(u,...b),function(e,t){let n=z();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[l,a]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(l+a!==0){let o=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),o())})}else t();n.add(()=>t()),n.dispose}(u,()=>(H(u,...y),D(u,...c.entered),v()))}),g.dispose)),t.dispose}},[t])})({container:x,classes:Q,direction:er,onStart:F(e=>{eo.onStart(x,e,el)}),onStop:F(e=>{eo.onStop(x,e,ea),"leave"!==e||V(eo)||(I("hidden"),K(x))})}),(0,s.useEffect)(()=>{en&&(j===g.Hidden?Y.current=null:Y.current=S)},[S,en,_]);let es=w;return O&&S&&T.isServer&&(es={...es,className:p(w.className,...Q.current.enter,...Q.current.enterFrom)}),s.createElement($.Provider,{value:eo},s.createElement(k,{value:h(_,{visible:C.Open,hidden:C.Closed})|ei.flags},v({ourProps:{ref:E},theirProps:es,defaultTag:"div",features:X,visible:"visible"===_,name:"Transition.Child"})))}),ee=w(function(e,t){let n=null!==(0,s.useContext)(q),r=null!==S();return s.createElement(s.Fragment,null,!n&&r?s.createElement(Y,{ref:t,...e}):s.createElement(Q,{ref:t,...e}))}),et=Object.assign(Y,{Child:ee,Root:Y});var en=n(1799),er=n(243);let ei=[{title:"Home",href:"/",delay:"delay-[100ms]"},{title:"Blog",href:"/blog",delay:"delay-[150ms]"},{title:"Flow",href:"/flow",delay:"delay-[200ms]"},{title:"Tags",href:"/tags",delay:"delay-[250ms]"},{title:"About",href:"/about",delay:"delay-[300ms]"}],el=e=>{let{icon:t,hidden:n}=e;return(0,o.jsx)(t,{className:"w-5 h-5 absolute top-0 left-0 transition duration-150 opacity-100 scale-100 data-[hidden=true]:invisible data-[hidden=true]:opacity-0 data-[hidden=true]:scale-0","data-hidden":n})};function ea(){let[e,t]=(0,s.useState)(!1),n=()=>t(!e);(0,s.useEffect)(()=>{document.body.style.overflow=e?"hidden":""},[e]);let r=()=>{t(!1)};return(0,o.jsx)("header",{className:"py-4 border-b bg-slate-500 text-gray-200",children:(0,o.jsxs)("div",{className:"max-w-5xl mx-auto px-4 flex items-center justify-between relative",children:[(0,o.jsxs)(c(),{className:"flex items-center",href:"/",children:[(0,o.jsx)(f(),{className:"rounded-lg",src:"/img/output_96.png",alt:"Avatar",width:38,height:38}),(0,o.jsx)("p",{className:"ml-2 font-bold text-xl ",children:"DoveRank"})]}),(0,o.jsx)("nav",{className:"hidden md:flex items-center tracking-wider",children:ei.map(e=>(0,o.jsxs)(c(),{className:"flex items-center hover:opacity-60 after:content-['|'] after:mx-3 after:text-gray-300 after:text-sm last:after:hidden",href:e.href,children:[(0,o.jsx)(f(),{className:"rounded-lg mr-2",src:"/icon/".concat(e.title,".svg"),alt:e.title,width:20,height:20}),e.title]},e.href))}),(0,o.jsxs)("button",{className:"visible md:hidden w-5 h-5 relative",onClick:n,children:[(0,o.jsx)(el,{icon:en,hidden:e}),(0,o.jsx)(el,{icon:er,hidden:!e})]}),(0,o.jsx)(et,{show:e,as:"ul",className:"flex flex-col space-y-2 p-4 absolute left-0 top-10 w-full h-screen bg-white",enter:"transition duration-[50ms]",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition duration-[20ms] ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:ei.map((e,t)=>(0,o.jsx)(et.Child,{as:"li",enter:"transition duration-300 ".concat(e.delay),enterFrom:"opacity-0 -translate-x-5",enterTo:"opacity-100 translate-x-0",children:(0,o.jsx)(c(),{className:"block py-4 px-2 text-sm font-semibold text-gray-700",href:e.href,onClick:r,children:e.title})},e.href))})]})})}function eo(){return(0,o.jsx)("footer",{className:"border-t bg-slate-600 text-gray-200",children:(0,o.jsxs)("div",{className:"max-w-3xl mx-auto px-4 py-4 ",children:[(0,o.jsx)("div",{className:"space-y-1 sm:space-y-0 text-sm ",children:(0,o.jsx)("div",{className:"justify-center flex",children:(0,o.jsx)("p",{children:"Copyright \xa9 2023 DoveRank"})})}),(0,o.jsxs)("div",{className:"mt-4 space-y-1 sm:space-y-0 text-sm ",children:[(0,o.jsx)("div",{className:"justify-center flex",children:(0,o.jsx)("div",{children:"We may use cookies to enhance your experience."})}),(0,o.jsx)("div",{className:"justify-center flex",children:(0,o.jsx)("div",{children:"By continuing to visit this site you agree to our use of cookies."})})]})]})})}function es(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)("div",{className:"h-screen",children:[(0,o.jsx)(ea,{}),(0,o.jsx)("div",{className:"min-h-84%",children:(0,o.jsx)(t,{...n})}),(0,o.jsx)(eo,{})]})}},2490:function(){},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(880)}),_N_E=e.O()}]);