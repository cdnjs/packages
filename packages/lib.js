/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions-input-localstorage-geolocation-svg-svgclippaths-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-forms_validation-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}function H(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.geolocation=function(){return"geolocation"in navigator},r.cssanimations=function(){return G("animationName")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(a,b){b.formvalidationapi=!1,b.formvalidationmessage=!1,b.addTest("formvalidation",function(){var c=a.createElement("form");if("checkValidity"in c&&"addEventListener"in c){if("reportValidity"in c)return!0;var d=!1,e;return b.formvalidationapi=!0,c.addEventListener("submit",function(a){window.opera||a.preventDefault(),a.stopPropagation()},!1),c.innerHTML='<input name="modTest" required><button></button>',b.testStyles("#modernizr form{position:absolute;top:-99999em}",function(a){a.appendChild(c),e=c.getElementsByTagName("input")[0],e.addEventListener("invalid",function(a){d=!0,a.preventDefault(),a.stopPropagation()},!1),b.formvalidationmessage=!!e.validationMessage,c.getElementsByTagName("button")[0].click()}),d}return!1})}(document,window.Modernizr);
/*! iFrame Resizer (iframeSizer.contentWindow.min.js) - v3.5.14 - 2017-03-30
 *  Desc: Include this file in any page being loaded into an iframe
 *        to force the iframe to resize to the content size.
 *  Requires: iframeResizer.min.js on host page.
 *  Copyright: (c) 2017 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function c(a,b,c){"removeEventListener"in window?a.removeEventListener(b,c,!1):"detachEvent"in window&&a.detachEvent("on"+b,c)}function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}function e(a){var b,c,d,e=null,f=0,g=function(){f=Ha(),e=null,d=a.apply(b,c),e||(b=c=null)};return function(){var h=Ha();f||(f=h);var i=xa-(h-f);return b=this,c=arguments,0>=i||i>xa?(e&&(clearTimeout(e),e=null),f=h,d=a.apply(b,c),e||(b=c=null)):e||(e=setTimeout(g,i)),d}}function f(a){return ma+"["+oa+"] "+a}function g(a){la&&"object"==typeof window.console&&console.log(f(a))}function h(a){"object"==typeof window.console&&console.warn(f(a))}function i(){j(),g("Initialising iFrame ("+location.href+")"),k(),n(),m("background",W),m("padding",$),A(),s(),t(),o(),C(),u(),ia=B(),N("init","Init message from host page"),Da()}function j(){function b(a){return"true"===a?!0:!1}var c=ha.substr(na).split(":");oa=c[0],X=a!==c[1]?Number(c[1]):X,_=a!==c[2]?b(c[2]):_,la=a!==c[3]?b(c[3]):la,ja=a!==c[4]?Number(c[4]):ja,U=a!==c[6]?b(c[6]):U,Y=c[7],fa=a!==c[8]?c[8]:fa,W=c[9],$=c[10],ua=a!==c[11]?Number(c[11]):ua,ia.enable=a!==c[12]?b(c[12]):!1,qa=a!==c[13]?c[13]:qa,Aa=a!==c[14]?c[14]:Aa}function k(){function a(){var a=window.iFrameResizer;g("Reading data from page: "+JSON.stringify(a)),Ca="messageCallback"in a?a.messageCallback:Ca,Da="readyCallback"in a?a.readyCallback:Da,ta="targetOrigin"in a?a.targetOrigin:ta,fa="heightCalculationMethod"in a?a.heightCalculationMethod:fa,Aa="widthCalculationMethod"in a?a.widthCalculationMethod:Aa}function b(a,b){return"function"==typeof a&&(g("Setup custom "+b+"CalcMethod"),Fa[b]=a,a="custom"),a}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(a(),fa=b(fa,"height"),Aa=b(Aa,"width")),g("TargetOrigin for parent set to: "+ta)}function l(a,b){return-1!==b.indexOf("-")&&(h("Negative CSS value ignored for "+a),b=""),b}function m(b,c){a!==c&&""!==c&&"null"!==c&&(document.body.style[b]=c,g("Body "+b+' set to "'+c+'"'))}function n(){a===Y&&(Y=X+"px"),m("margin",l("margin",Y))}function o(){document.documentElement.style.height="",document.body.style.height="",g('HTML & body height set to "auto"')}function p(a){var e={add:function(c){function d(){N(a.eventName,a.eventType)}Ga[c]=d,b(window,c,d)},remove:function(a){var b=Ga[a];delete Ga[a],c(window,a,b)}};a.eventNames&&Array.prototype.map?(a.eventName=a.eventNames[0],a.eventNames.map(e[a.method])):e[a.method](a.eventName),g(d(a.method)+" event listener: "+a.eventType)}function q(a){p({method:a,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),p({method:a,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),p({method:a,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),p({method:a,eventType:"Input",eventName:"input"}),p({method:a,eventType:"Mouse Up",eventName:"mouseup"}),p({method:a,eventType:"Mouse Down",eventName:"mousedown"}),p({method:a,eventType:"Orientation Change",eventName:"orientationchange"}),p({method:a,eventType:"Print",eventName:["afterprint","beforeprint"]}),p({method:a,eventType:"Ready State Change",eventName:"readystatechange"}),p({method:a,eventType:"Touch Start",eventName:"touchstart"}),p({method:a,eventType:"Touch End",eventName:"touchend"}),p({method:a,eventType:"Touch Cancel",eventName:"touchcancel"}),p({method:a,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),p({method:a,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),p({method:a,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===qa&&p({method:a,eventType:"IFrame Resized",eventName:"resize"})}function r(a,b,c,d){return b!==a&&(a in c||(h(a+" is not a valid option for "+d+"CalculationMethod."),a=b),g(d+' calculation method set to "'+a+'"')),a}function s(){fa=r(fa,ea,Ia,"height")}function t(){Aa=r(Aa,za,Ja,"width")}function u(){!0===U?(q("add"),F()):g("Auto Resize disabled")}function v(){g("Disable outgoing messages"),ra=!1}function w(){g("Remove event listener: Message"),c(window,"message",S)}function x(){null!==Z&&Z.disconnect()}function y(){q("remove"),x(),clearInterval(ka)}function z(){v(),w(),!0===U&&y()}function A(){var a=document.createElement("div");a.style.clear="both",a.style.display="block",document.body.appendChild(a)}function B(){function c(){return{x:window.pageXOffset!==a?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==a?window.pageYOffset:document.documentElement.scrollTop}}function d(a){var b=a.getBoundingClientRect(),d=c();return{x:parseInt(b.left,10)+parseInt(d.x,10),y:parseInt(b.top,10)+parseInt(d.y,10)}}function e(b){function c(a){var b=d(a);g("Moving to in page link (#"+e+") at x: "+b.x+" y: "+b.y),R(b.y,b.x,"scrollToOffset")}var e=b.split("#")[1]||b,f=decodeURIComponent(e),h=document.getElementById(f)||document.getElementsByName(f)[0];a!==h?c(h):(g("In page link (#"+e+") not found in iFrame, so sending to parent"),R(0,0,"inPageLink","#"+e))}function f(){""!==location.hash&&"#"!==location.hash&&e(location.href)}function i(){function a(a){function c(a){a.preventDefault(),e(this.getAttribute("href"))}"#"!==a.getAttribute("href")&&b(a,"click",c)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),a)}function j(){b(window,"hashchange",f)}function k(){setTimeout(f,ba)}function l(){Array.prototype.forEach&&document.querySelectorAll?(g("Setting up location.hash handlers"),i(),j(),k()):h("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ia.enable?l():g("In page linking not enabled"),{findTarget:e}}function C(){g("Enable public methods"),Ba.parentIFrame={autoResize:function(a){return!0===a&&!1===U?(U=!0,u()):!1===a&&!0===U&&(U=!1,y()),U},close:function(){R(0,0,"close"),z()},getId:function(){return oa},getPageInfo:function(a){"function"==typeof a?(Ea=a,R(0,0,"pageInfo")):(Ea=function(){},R(0,0,"pageInfoStop"))},moveToAnchor:function(a){ia.findTarget(a)},reset:function(){Q("parentIFrame.reset")},scrollTo:function(a,b){R(b,a,"scrollTo")},scrollToOffset:function(a,b){R(b,a,"scrollToOffset")},sendMessage:function(a,b){R(0,0,"message",JSON.stringify(a),b)},setHeightCalculationMethod:function(a){fa=a,s()},setWidthCalculationMethod:function(a){Aa=a,t()},setTargetOrigin:function(a){g("Set targetOrigin: "+a),ta=a},size:function(a,b){var c=""+(a?a:"")+(b?","+b:"");N("size","parentIFrame.size("+c+")",a,b)}}}function D(){0!==ja&&(g("setInterval: "+ja+"ms"),ka=setInterval(function(){N("interval","setInterval: "+ja)},Math.abs(ja)))}function E(){function b(a){function b(a){!1===a.complete&&(g("Attach listeners to "+a.src),a.addEventListener("load",f,!1),a.addEventListener("error",h,!1),k.push(a))}"attributes"===a.type&&"src"===a.attributeName?b(a.target):"childList"===a.type&&Array.prototype.forEach.call(a.target.querySelectorAll("img"),b)}function c(a){k.splice(k.indexOf(a),1)}function d(a){g("Remove listeners from "+a.src),a.removeEventListener("load",f,!1),a.removeEventListener("error",h,!1),c(a)}function e(b,c,e){d(b.target),N(c,e+": "+b.target.src,a,a)}function f(a){e(a,"imageLoad","Image loaded")}function h(a){e(a,"imageLoadFailed","Image load failed")}function i(a){N("mutationObserver","mutationObserver: "+a[0].target+" "+a[0].type),a.forEach(b)}function j(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return m=new l(i),g("Create body MutationObserver"),m.observe(a,b),m}var k=[],l=window.MutationObserver||window.WebKitMutationObserver,m=j();return{disconnect:function(){"disconnect"in m&&(g("Disconnect body MutationObserver"),m.disconnect(),k.forEach(d))}}}function F(){var a=0>ja;window.MutationObserver||window.WebKitMutationObserver?a?D():Z=E():(g("MutationObserver not supported in this browser!"),D())}function G(a,b){function c(a){var c=/^\d+(px)?$/i;if(c.test(a))return parseInt(a,V);var d=b.style.left,e=b.runtimeStyle.left;return b.runtimeStyle.left=b.currentStyle.left,b.style.left=a||0,a=b.style.pixelLeft,b.style.left=d,b.runtimeStyle.left=e,a}var d=0;return b=b||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(d=document.defaultView.getComputedStyle(b,null),d=null!==d?d[a]:0):d=c(b.currentStyle[a]),parseInt(d,V)}function H(a){a>xa/2&&(xa=2*a,g("Event throttle increased to "+xa+"ms"))}function I(a,b){for(var c=b.length,e=0,f=0,h=d(a),i=Ha(),j=0;c>j;j++)e=b[j].getBoundingClientRect()[a]+G("margin"+h,b[j]),e>f&&(f=e);return i=Ha()-i,g("Parsed "+c+" HTML elements"),g("Element position calculated in "+i+"ms"),H(i),f}function J(a){return[a.bodyOffset(),a.bodyScroll(),a.documentElementOffset(),a.documentElementScroll()]}function K(a,b){function c(){return h("No tagged elements ("+b+") found on page"),document.querySelectorAll("body *")}var d=document.querySelectorAll("["+b+"]");return 0===d.length&&c(),I(a,d)}function L(){return document.querySelectorAll("body *")}function M(b,c,d,e){function f(){da=m,ya=n,R(da,ya,b)}function h(){function b(a,b){var c=Math.abs(a-b)<=ua;return!c}return m=a!==d?d:Ia[fa](),n=a!==e?e:Ja[Aa](),b(da,m)||_&&b(ya,n)}function i(){return!(b in{init:1,interval:1,size:1})}function j(){return fa in pa||_&&Aa in pa}function k(){g("No change in size detected")}function l(){i()&&j()?Q(c):b in{interval:1}||k()}var m,n;h()||"init"===b?(O(),f()):l()}function N(a,b,c,d){function e(){a in{reset:1,resetPage:1,init:1}||g("Trigger event: "+b)}function f(){return va&&a in aa}f()?g("Trigger event cancelled: "+a):(e(),Ka(a,b,c,d))}function O(){va||(va=!0,g("Trigger event lock on")),clearTimeout(wa),wa=setTimeout(function(){va=!1,g("Trigger event lock off"),g("--")},ba)}function P(a){da=Ia[fa](),ya=Ja[Aa](),R(da,ya,a)}function Q(a){var b=fa;fa=ea,g("Reset trigger event: "+a),O(),P("reset"),fa=b}function R(b,c,d,e,f){function h(){a===f?f=ta:g("Message targetOrigin: "+f)}function i(){var h=b+":"+c,i=oa+":"+h+":"+d+(a!==e?":"+e:"");g("Sending message to host page ("+i+")"),sa.postMessage(ma+i,f)}!0===ra&&(h(),i())}function S(a){function c(){return ma===(""+a.data).substr(0,na)}function d(){return a.data.split("]")[1].split(":")[0]}function e(){return a.data.substr(a.data.indexOf(":")+1)}function f(){return!("undefined"!=typeof module&&module.exports)&&"iFrameResize"in window}function j(){return a.data.split(":")[2]in{"true":1,"false":1}}function k(){var b=d();b in m?m[b]():f()||j()||h("Unexpected message ("+a.data+")")}function l(){!1===ca?k():j()?m.init():g('Ignored message of type "'+d()+'". Received before initialization.')}var m={init:function(){function c(){ha=a.data,sa=a.source,i(),ca=!1,setTimeout(function(){ga=!1},ba)}document.body?c():(g("Waiting for page ready"),b(window,"readystatechange",m.initFromParent))},reset:function(){ga?g("Page reset ignored by init"):(g("Page size reset by host page"),P("resetPage"))},resize:function(){N("resizeParent","Parent window requested size check")},moveToAnchor:function(){ia.findTarget(e())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var a=e();g("PageInfoFromParent called from parent: "+a),Ea(JSON.parse(a)),g(" --")},message:function(){var a=e();g("MessageCallback called from parent: "+a),Ca(JSON.parse(a)),g(" --")}};c()&&l()}function T(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}if("undefined"!=typeof window){var U=!0,V=10,W="",X=0,Y="",Z=null,$="",_=!1,aa={resize:1,click:1},ba=128,ca=!0,da=1,ea="bodyOffset",fa=ea,ga=!0,ha="",ia={},ja=32,ka=null,la=!1,ma="[iFrameSizer]",na=ma.length,oa="",pa={max:1,min:1,bodyScroll:1,documentElementScroll:1},qa="child",ra=!0,sa=window.parent,ta="*",ua=0,va=!1,wa=null,xa=16,ya=1,za="scroll",Aa=za,Ba=window,Ca=function(){h("MessageCallback function not defined")},Da=function(){},Ea=function(){},Fa={height:function(){return h("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return h("Custom width calculation function not defined"),document.body.scrollWidth}},Ga={},Ha=Date.now||function(){return(new Date).getTime()},Ia={bodyOffset:function(){return document.body.offsetHeight+G("marginTop")+G("marginBottom")},offset:function(){return Ia.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Fa.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,J(Ia))},min:function(){return Math.min.apply(null,J(Ia))},grow:function(){return Ia.max()},lowestElement:function(){return Math.max(Ia.bodyOffset(),I("bottom",L()))},taggedElement:function(){return K("bottom","data-iframe-height")}},Ja={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Fa.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Ja.bodyScroll(),Ja.documentElementScroll())},max:function(){return Math.max.apply(null,J(Ja))},min:function(){return Math.min.apply(null,J(Ja))},rightMostElement:function(){return I("right",L())},taggedElement:function(){return K("right","data-iframe-width")}},Ka=e(M);b(window,"message",S),T()}}();
//# sourceMappingURL=iframeResizer.contentWindow.map
/*! iFrame Resizer (iframeSizer.min.js ) - v3.5.14 - 2017-03-30
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2017 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function c(a,b,c){"removeEventListener"in window?a.removeEventListener(b,c,!1):"detachEvent"in window&&a.detachEvent("on"+b,c)}function d(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!N;a+=1)N=window[b[a]+"RequestAnimationFrame"];N||h("setup","RequestAnimationFrame not supported")}function e(a){var b="Host page: "+a;return window.top!==window.self&&(b=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+a:"Nested host page: "+a),b}function f(a){return K+"["+e(a)+"]"}function g(a){return P[a]?P[a].log:G}function h(a,b){k("log",a,b,g(a))}function i(a,b){k("info",a,b,g(a))}function j(a,b){k("warn",a,b,!0)}function k(a,b,c,d){!0===d&&"object"==typeof window.console&&console[a](f(b),c)}function l(a){function d(){function a(){s(U),p(V),I("resizedCallback",U)}f("Height"),f("Width"),t(a,U,"init")}function e(){var a=T.substr(L).split(":");return{iframe:P[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function f(a){var b=Number(P[V]["max"+a]),c=Number(P[V]["min"+a]),d=a.toLowerCase(),e=Number(U[d]);h(V,"Checking "+d+" is in range "+c+"-"+b),c>e&&(e=c,h(V,"Set "+d+" to min value")),e>b&&(e=b,h(V,"Set "+d+" to max value")),U[d]=""+e}function g(){function b(){function a(){var a=0,b=!1;for(h(V,"Checking connection is from allowed list of origins: "+d);a<d.length;a++)if(d[a]===c){b=!0;break}return b}function b(){var a=P[V].remoteHost;return h(V,"Checking connection is from: "+a),c===a}return d.constructor===Array?a():b()}var c=a.origin,d=P[V].checkOrigin;if(d&&""+c!="null"&&!b())throw new Error("Unexpected message received from: "+c+" for "+U.iframe.id+". Message was: "+a.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function k(){return K===(""+T).substr(0,L)&&T.substr(L).split(":")[0]in P}function l(){var a=U.type in{"true":1,"false":1,undefined:1};return a&&h(V,"Ignoring init message from meta parent page"),a}function w(a){return T.substr(T.indexOf(":")+J+a)}function y(a){h(V,"MessageCallback passed: {iframe: "+U.iframe.id+", message: "+a+"}"),I("messageCallback",{iframe:U.iframe,message:JSON.parse(a)}),h(V,"--")}function z(){var a=document.body.getBoundingClientRect(),b=U.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:b.height,iframeWidth:b.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(b.top-a.top,10),offsetLeft:parseInt(b.left-a.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})}function A(a,b){function c(){u("Send Page Info","pageInfo:"+z(),a,b)}x(c,32)}function B(){function a(a,b){function c(){P[f]?A(P[f].iframe,f):d()}["scroll","resize"].forEach(function(d){h(f,a+d+" listener for sendPageInfo"),b(window,d,c)})}function d(){a("Remove ",c)}function e(){a("Add ",b)}var f=V;e(),P[f].stopPageInfo=d}function C(){P[V]&&P[V].stopPageInfo&&(P[V].stopPageInfo(),delete P[V].stopPageInfo)}function D(){var a=!0;return null===U.iframe&&(j(V,"IFrame ("+U.id+") not found"),a=!1),a}function E(a){var b=a.getBoundingClientRect();return o(V),{x:Math.floor(Number(b.left)+Number(M.x)),y:Math.floor(Number(b.top)+Number(M.y))}}function F(a){function b(){M=f,G(),h(V,"--")}function c(){return{x:Number(U.width)+e.x,y:Number(U.height)+e.y}}function d(){window.parentIFrame?window.parentIFrame["scrollTo"+(a?"Offset":"")](f.x,f.y):j(V,"Unable to scroll to requested position, window.parentIFrame not found")}var e=a?E(U.iframe):{x:0,y:0},f=c();h(V,"Reposition requested from iFrame (offset x:"+e.x+" y:"+e.y+")"),window.top!==window.self?d():b()}function G(){!1!==I("scrollCallback",M)?p(V):q()}function H(a){function b(){var a=E(f);h(V,"Moving to in page link (#"+d+") at x: "+a.x+" y: "+a.y),M={x:a.x,y:a.y},G(),h(V,"--")}function c(){window.parentIFrame?window.parentIFrame.moveToAnchor(d):h(V,"In page link #"+d+" not found and window.parentIFrame not found")}var d=a.split("#")[1]||"",e=decodeURIComponent(d),f=document.getElementById(e)||document.getElementsByName(e)[0];f?b():window.top!==window.self?c():h(V,"In page link #"+d+" not found")}function I(a,b){return m(V,a,b)}function N(){switch(P[V].firstRun&&S(),U.type){case"close":n(U.iframe);break;case"message":y(w(6));break;case"scrollTo":F(!1);break;case"scrollToOffset":F(!0);break;case"pageInfo":A(P[V].iframe,V),B();break;case"pageInfoStop":C();break;case"inPageLink":H(w(9));break;case"reset":r(U);break;case"init":d(),I("initCallback",U.iframe);break;default:d()}}function O(a){var b=!0;return P[a]||(b=!1,j(U.type+" No settings for "+a+". Message was: "+T)),b}function Q(){for(var a in P)u("iFrame requested init",v(a),document.getElementById(a),a)}function S(){P[V].firstRun=!1}var T=a.data,U={},V=null;"[iFrameResizerChild]Ready"===T?Q():k()?(U=e(),V=R=U.id,P[V].loaded=!0,!l()&&O(V)&&(h(V,"Received: "+T),D()&&g()&&N())):i(V,"Ignored: "+T)}function m(a,b,c){var d=null,e=null;if(P[a]){if(d=P[a][b],"function"!=typeof d)throw new TypeError(b+" on iFrame["+a+"] is not a function");e=d(c)}return e}function n(a){var b=a.id;h(b,"Removing iFrame: "+b),a.parentNode&&a.parentNode.removeChild(a),m(b,"closedCallback",b),h(b,"--"),delete P[b]}function o(b){null===M&&(M={x:window.pageXOffset!==a?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==a?window.pageYOffset:document.documentElement.scrollTop},h(b,"Get page position: "+M.x+","+M.y))}function p(a){null!==M&&(window.scrollTo(M.x,M.y),h(a,"Set page position: "+M.x+","+M.y),q())}function q(){M=null}function r(a){function b(){s(a),u("reset","reset",a.iframe,a.id)}h(a.id,"Size reset requested by "+("init"===a.type?"host page":"iFrame")),o(a.id),t(b,a,"reset")}function s(a){function b(b){a.iframe.style[b]=a[b]+"px",h(a.id,"IFrame ("+e+") "+b+" set to "+a[b]+"px")}function c(b){H||"0"!==a[b]||(H=!0,h(e,"Hidden iFrame detected, creating visibility listener"),y())}function d(a){b(a),c(a)}var e=a.iframe.id;P[e]&&(P[e].sizeHeight&&d("height"),P[e].sizeWidth&&d("width"))}function t(a,b,c){c!==b.type&&N?(h(b.id,"Requesting animation frame"),N(a)):a()}function u(a,b,c,d,e){function f(){var e=P[d].targetOrigin;h(d,"["+a+"] Sending msg to iframe["+d+"] ("+b+") targetOrigin: "+e),c.contentWindow.postMessage(K+b,e)}function g(){j(d,"["+a+"] IFrame("+d+") not found")}function i(){c&&"contentWindow"in c&&null!==c.contentWindow?f():g()}function k(){function a(){!P[d]||P[d].loaded||l||(l=!0,j(d,"IFrame has not responded within "+P[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}e&&P[d].warningTimeout&&(P[d].msgTimeout=setTimeout(a,P[d].warningTimeout))}var l=!1;d=d||c.id,P[d]&&(i(),k())}function v(a){return a+":"+P[a].bodyMarginV1+":"+P[a].sizeWidth+":"+P[a].log+":"+P[a].interval+":"+P[a].enablePublicMethods+":"+P[a].autoResize+":"+P[a].bodyMargin+":"+P[a].heightCalculationMethod+":"+P[a].bodyBackground+":"+P[a].bodyPadding+":"+P[a].tolerance+":"+P[a].inPageLinks+":"+P[a].resizeFrom+":"+P[a].widthCalculationMethod}function w(c,d){function e(){function a(a){1/0!==P[x][a]&&0!==P[x][a]&&(c.style[a]=P[x][a]+"px",h(x,"Set "+a+" = "+P[x][a]+"px"))}function b(a){if(P[x]["min"+a]>P[x]["max"+a])throw new Error("Value for min"+a+" can not be greater than max"+a)}b("Height"),b("Width"),a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function f(){var a=d&&d.id||S.id+F++;return null!==document.getElementById(a)&&(a+=F++),a}function g(a){return R=a,""===a&&(c.id=a=f(),G=(d||{}).log,R=a,h(a,"Added missing iframe ID: "+a+" ("+c.src+")")),a}function i(){switch(h(x,"IFrame scrolling "+(P[x].scrolling?"enabled":"disabled")+" for "+x),c.style.overflow=!1===P[x].scrolling?"hidden":"auto",P[x].scrolling){case!0:c.scrolling="yes";break;case!1:c.scrolling="no";break;default:c.scrolling=P[x].scrolling}}function k(){("number"==typeof P[x].bodyMargin||"0"===P[x].bodyMargin)&&(P[x].bodyMarginV1=P[x].bodyMargin,P[x].bodyMargin=""+P[x].bodyMargin+"px")}function l(){var a=P[x].firstRun,b=P[x].heightCalculationMethod in O;!a&&b&&r({iframe:c,height:0,width:0,type:"init"})}function m(){Function.prototype.bind&&(P[x].iframe.iFrameResizer={close:n.bind(null,P[x].iframe),resize:u.bind(null,"Window resize","resize",P[x].iframe),moveToAnchor:function(a){u("Move to anchor","moveToAnchor:"+a,P[x].iframe,x)},sendMessage:function(a){a=JSON.stringify(a),u("Send Message","message:"+a,P[x].iframe,x)}})}function o(d){function e(){u("iFrame.onload",d,c,a,!0),l()}b(c,"load",e),u("init",d,c,a,!0)}function p(a){if("object"!=typeof a)throw new TypeError("Options is not an object")}function q(a){for(var b in S)S.hasOwnProperty(b)&&(P[x][b]=a.hasOwnProperty(b)?a[b]:S[b])}function s(a){return""===a||"file://"===a?"*":a}function t(a){a=a||{},P[x]={firstRun:!0,iframe:c,remoteHost:c.src.split("/").slice(0,3).join("/")},p(a),q(a),P[x].targetOrigin=!0===P[x].checkOrigin?s(P[x].remoteHost):"*"}function w(){return x in P&&"iFrameResizer"in c}var x=g(c.id);w()?j(x,"Ignored iFrame, already setup."):(t(d),i(),e(),k(),o(v(x)),m())}function x(a,b){null===Q&&(Q=setTimeout(function(){Q=null,a()},b))}function y(){function a(){function a(a){function b(b){return"0px"===P[a].iframe.style[b]}function c(a){return null!==a.offsetParent}c(P[a].iframe)&&(b("height")||b("width"))&&u("Visibility change","resize",P[a].iframe,a)}for(var b in P)a(b)}function b(b){h("window","Mutation observed: "+b[0].target+" "+b[0].type),x(a,16)}function c(){var a=document.querySelector("body"),c={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},e=new d(b);e.observe(a,c)}var d=window.MutationObserver||window.WebKitMutationObserver;d&&c()}function z(a){function b(){B("Window "+a,"resize")}h("window","Trigger event: "+a),x(b,16)}function A(){function a(){B("Tab Visable","resize")}"hidden"!==document.visibilityState&&(h("document","Trigger event: Visiblity change"),x(a,16))}function B(a,b){function c(a){return"parent"===P[a].resizeFrom&&P[a].autoResize&&!P[a].firstRun}for(var d in P)c(d)&&u(a,b,document.getElementById(d),d)}function C(){b(window,"message",l),b(window,"resize",function(){z("resize")}),b(document,"visibilitychange",A),b(document,"-webkit-visibilitychange",A),b(window,"focusin",function(){z("focus")}),b(window,"focus",function(){z("focus")})}function D(){function b(a,b){function c(){if(!b.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==b.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+b.tagName+">")}b&&(c(),w(b,a),e.push(b))}function c(a){a&&a.enablePublicMethods&&j("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var e;return d(),C(),function(d,f){switch(e=[],c(d),typeof f){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(f||"iframe"),b.bind(a,d));break;case"object":b(d,f);break;default:throw new TypeError("Unexpected data type ("+typeof f+")")}return e}}function E(a){a.fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(a){function b(b,c){w(c,a)}return this.filter("iframe").each(b).end()}):i("","Unable to bind to jQuery, it is not fully loaded.")}if("undefined"!=typeof window){var F=0,G=!1,H=!1,I="message",J=I.length,K="[iFrameSizer]",L=K.length,M=null,N=window.requestAnimationFrame,O={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},P={},Q=null,R="Host Page",S={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){j("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};window.jQuery&&E(window.jQuery),"function"==typeof define&&define.amd?define([],D):"object"==typeof module&&"object"==typeof module.exports?module.exports=D():window.iFrameResize=window.iFrameResize||D()}}();
//# sourceMappingURL=iframeResizer.map
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	'use strict';

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('eventEmitter/EventEmitter',[],function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * imagesLoaded v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) == '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    // use elem as selector string
    if ( typeof elem == 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options == 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0; i < this.elements.length; i++ ) {
      var elem = this.elements[i];
      this.addElementImages( elem );
    }
  };

  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function( elem ) {
    // filter siblings
    if ( elem.nodeName == 'IMG' ) {
      this.addImage( elem );
    }
    // get background image on element
    if ( this.options.background === true ) {
      this.addElementBackgroundImages( elem );
    }

    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for ( var i=0; i < childImgs.length; i++ ) {
      var img = childImgs[i];
      this.addImage( img );
    }

    // get child background images
    if ( typeof this.options.background == 'string' ) {
      var children = elem.querySelectorAll( this.options.background );
      for ( i=0; i < children.length; i++ ) {
        var child = children[i];
        this.addElementBackgroundImages( child );
      }
    }
  };

  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };

  ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
    var style = getStyle( elem );
    // get url inside url("...")
    var reURL = /url\(['"]*([^'"\)]+)['"]*\)/gi;
    var matches = reURL.exec( style.backgroundImage );
    while ( matches !== null ) {
      var url = matches && matches[1];
      if ( url ) {
        this.addBackground( url, elem );
      }
      matches = reURL.exec( style.backgroundImage );
    }
  };

  // IE8
  var getStyle = window.getComputedStyle || function( elem ) {
    return elem.currentStyle;
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.addBackground = function( url, elem ) {
    var background = new Background( url, elem );
    this.images.push( background );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !this.images.length ) {
      this.complete();
      return;
    }

    function onProgress( image, elem, message ) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout( function() {
        _this.progress( image, elem, message );
      });
    }

    for ( var i=0; i < this.images.length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.once( 'progress', onProgress );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image, elem, message ) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emit( 'progress', this, image, elem );
    if ( this.jqDeferred && this.jqDeferred.notify ) {
      this.jqDeferred.notify( this, image );
    }
    // check if completed
    if ( this.progressedCount == this.images.length ) {
      this.complete();
    }

    if ( this.options.debug && console ) {
      console.log( 'progress: ' + message, image, elem );
    }
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emit( eventName, this );
    this.emit( 'always', this );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };

  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    eventie.bind( this.proxyImage, 'load', this );
    eventie.bind( this.proxyImage, 'error', this );
    // bind to image as well for Firefox. #191
    eventie.bind( this.img, 'load', this );
    eventie.bind( this.img, 'error', this );
    this.proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth !== undefined;
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'progress', this, this.img, message );
  };

  // ----- events ----- //

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindEvents();
  };

  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindEvents();
  };

  LoadingImage.prototype.unbindEvents = function() {
    eventie.unbind( this.proxyImage, 'load', this );
    eventie.unbind( this.proxyImage, 'error', this );
    eventie.unbind( this.img, 'load', this );
    eventie.unbind( this.img, 'error', this );
  };

  // -------------------------- Background -------------------------- //

  function Background( url, element ) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }

  // inherit LoadingImage prototype
  Background.prototype = new LoadingImage();

  Background.prototype.check = function() {
    eventie.bind( this.img, 'load', this );
    eventie.bind( this.img, 'error', this );
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      this.unbindEvents();
    }
  };

  Background.prototype.unbindEvents = function() {
    eventie.unbind( this.img, 'load', this );
    eventie.unbind( this.img, 'error', this );
  };

  Background.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'progress', this, this.element, message );
  };

  // -------------------------- jQuery -------------------------- //

  ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
    jQuery = jQuery || window.jQuery;
    if ( !jQuery ) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();

  // --------------------------  -------------------------- //

  return ImagesLoaded;

});


/*!
 *
 * jQuery collageCaption Plugin v0.1.1
 * extra for collagePlus plugin
 * https://github.com/ed-lea/jquery-collagePlus
 *
 * Copyright 2012, Ed Lea twitter.com/ed_lea
 *
 * built for http://qiip.me
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 */





;(function( $ ) {


  $.fn.collageCaption = function( options ) {
  
  
    // Defaults
    var defaults = {
        // object that contains the images to collage
        'images'          : $(this).children(),
        // colour for the caption background
        'background'      : "black",
        // opacity for the caption background
        'opacity'         : "0.8",
        // speed of the reveal / hide animation
        'speed'           : 100,
        // css class for the caption wrapper
        'cssClass'           : "Caption"
    };

    var settings = $.extend({}, defaults, options);

    return this.each(function() {

        /*
        * 
        * set up vars
        *
        */
        
        // track row width
        var row         = 0,
        // collect elements to be resized in current row
            elements    = [];


        settings.images.each(
            function(index){

                /*
                * 
                * Cache selector
                *
                */
                var $this = $(this);
                
                /*
                * 
                * Do we need to do anything with captions
                *
                */
                if (typeof $this.data("caption") == 'undefined'){
                    return;
                }
                
                /*
                * 
                * The HTML to append to the containing element
                *
                */
                var html = '<div class="' + settings.cssClass + '" style="position:relative;"><div class="Caption_Background" style="background-color:' +
                            settings.background + ';opacity:' +
                            settings.opacity + ';position:relative;top:0;"></div><div class="Caption_Content" style="position:relative;">' +
                            $this.data("caption") + '</div></div>';
                $this.append(html);
                
                /*
                * 
                * Cache the caption selectors
                *
                */
                var $cap    =  $this.find("." + settings.cssClass),
                    $capbg  =  $this.find(".Caption_Background"),
                    $captxt =  $this.find(".Caption_Content");
                
        
                /*
                * 
                * Calculate the caption height
                *
                */
                var h = $captxt.outerHeight();
                    
                    
                /*
                * 
                * Set the background for the caption
                *
                */
                $capbg.height(h);
                
                /*
                * 
                * Overlap the caption content
                *
                */
                $captxt.css("top", "-" + h + "px");
                
                
                /*
                * 
                * Bind the rollover action to the element
                *
                */
                $this.bind(
                    {
                        mouseenter: function(e) {
                            $cap.animate({ top: (-1 * h) }, { duration: settings.speed, queue: false });
                        },
                        mouseleave: function(e) {
                            $cap.animate({ top: 0 }, { duration: settings.speed, queue: false });
                        }
                    }
                );
            }
        );
        return this;
    });



  };
})( jQuery );
/*!
 *
 * jQuery collagePlus Plugin v0.3.3
 * https://github.com/ed-lea/jquery-collagePlus
 *
 * Copyright 2012, Ed Lea twitter.com/ed_lea
 *
 * built for http://qiip.me
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 */





;(function( $ ) {


    $.fn.collagePlus = function( options ) {

        return this.each(function() {

            /*
             *
             * set up vars
             *
             */

            // track row width by adding images, padding and css borders etc
            var row         = 0,
            // collect elements to be re-sized in current row
                elements    = [],
            // track the number of rows generated
                rownum = 1,
            // needed for creating some additional defaults that are actually obtained
            // from the dom, which maybe doesn't make them defaults ?!
                $this = $(this);


            // width of the area the collage will be in
            $.fn.collagePlus.defaults.albumWidth    = $this.width();
            // padding between the images. Using padding left as we assume padding is even all the way round
            $.fn.collagePlus.defaults.padding       = parseFloat( $this.css('padding-left') );
            // object that contains the images to collage
            $.fn.collagePlus.defaults.images        = $this.children();

            var settings = $.extend({}, $.fn.collagePlus.defaults, options);

            settings.images.each(
                function(index){

                    /*
                     *
                     * Cache selector
                     * Even if first child is not an image the whole sizing is based on images
                     * so where we take measurements, we take them on the images
                     *
                     */
                    var $this = $(this),
                        $img  = ($this.is("img")) ? $this : $(this).find("img");



                    /*
                     *
                     * get the current image size. Get image size in this order
                     *
                     * 1. from <img> tag
                     * 2. from data set from initial calculation
                     * 3. after loading the image and checking it's actual size
                     *
                     */
                    var w = (typeof $img.data("width") != 'undefined') ? $img.data("width") : $img.width(),
                        h = (typeof $img.data("height") != 'undefined') ? $img.data("height") : $img.height();



                    /*
                     *
                     * Get any current additional properties that may affect the width or height
                     * like css borders for example
                     *
                     */
                    var imgParams = getImgProperty($img);


                    /*
                     *
                     * store the original size for resize events
                     *
                     */
                    $img.data("width", w);
                    $img.data("height", h);



                    /*
                     *
                     * calculate the w/h based on target height
                     * this is our ideal size, but later we'll resize to make it fit
                     *
                     */
                    var nw = Math.ceil(w/h*settings.targetHeight),
                        nh = Math.ceil(settings.targetHeight);

                    /*
                     *
                     * Keep track of which images are in our row so far
                     *
                     */
                    elements.push([this, nw, nh, imgParams['w'], imgParams['h']]);

                    /*
                     *
                     * calculate the width of the element including extra properties
                     * like css borders
                     *
                     */
                    row += nw + imgParams['w'] + settings.padding;

                    /*
                     *
                     * if the current row width is wider than the parent container
                     * it's time to make a row out of our images
                     *
                     */
                    if( row > settings.albumWidth && elements.length != 0 ){

                        // call the method that calculates the final image sizes
                        // remove one set of padding as it's not needed for the last image in the row
                        resizeRow(elements, (row - settings.padding), settings, rownum);

                        // reset our row
                        //delete row;
                        //delete elements;
                        row         = 0;
                        elements    = [];
                        rownum      += 1;
                    }


                    /*
                     *
                     * if the images left are not enough to make a row
                     * then we'll force them to make one anyway
                     *
                     */
                    if ( settings.images.length-1 == index && elements.length != 0){
                        resizeRow(elements, row, settings, rownum);

                        // reset our row
                        //delete row;
                        //delete elements;
                        row         = 0;
                        elements    = [];
                        rownum      += 1;
                    }
                }
            );

        });

        function resizeRow( obj, row, settings, rownum) {

            /*
             *
             * How much bigger is this row than the available space?
             * At this point we have adjusted the images height to fit our target height
             * so the image size will already be different from the original.
             * The resizing we're doing here is to adjust it to the album width.
             *
             * We also need to change the album width (basically available space) by
             * the amount of padding and css borders for the images otherwise
             * this will skew the result.
             *
             * This is because padding and borders remain at a fixed size and we only
             * need to scale the images.
             *
             */
            var imageExtras         = (settings.padding * (obj.length - 1)) + (obj.length * obj[0][3]),
                albumWidthAdjusted  = settings.albumWidth - imageExtras,
                overPercent         = albumWidthAdjusted / (row - imageExtras),
                // start tracking our width with know values that will make up the total width
                // like borders and padding
                trackWidth          = imageExtras,
                // guess whether this is the last row in a set by checking if the width is less
                // than the parent width.
                lastRow             = (row < settings.albumWidth  ? true : false);





            /*
             * Resize the images by the above % so that they'll fit in the album space
             */
            for (var i = 0; i < obj.length; i++) {



                var $obj        = $(obj[i][0]),
                    fw          = Math.floor(obj[i][1] * overPercent),
                    fh          = Math.floor(obj[i][2] * overPercent),
                // if the element is the last in the row,
                // don't apply right hand padding (this is our flag for later)
                    isNotLast   = !!(( i < obj.length - 1 ));

                /*
                 * Checking if the user wants to not stretch the images of the last row to fit the
                 * parent element size
                 */
                if(settings.allowPartialLastRow === true && lastRow === true){
                   fw = obj[i][1];
                   fh = obj[i][2];
                }


                /*
                 *
                 * Because we use % to calculate the widths, it's possible that they are
                 * a few pixels out in which case we need to track this and adjust the
                 * last image accordingly
                 *
                 */
                trackWidth += fw;


                /*
                 *
                 * here we check if the combined images are exactly the width
                 * of the parent. If not then we add a few pixels on to make
                 * up the difference.
                 *
                 * This will alter the aspect ratio of the image slightly, but
                 * by a noticable amount.
                 *
                 * If the user doesn't want full width last row, we check for that here
                 *
                 */
                if(!isNotLast && trackWidth < settings.albumWidth){
                    if(settings.allowPartialLastRow === true && lastRow === true){
                        fw = fw;
                    }else{
                        fw = fw + (settings.albumWidth - trackWidth);
                    }
                }

                fw--;

                /*
                 *
                 * We'll be doing a few things to the image so here we cache the image selector
                 *
                 *
                 */
                var $img = ( $obj.is("img") ) ? $obj : $obj.find("img");

                /*
                 *
                 * Set the width of the image and parent element
                 * if the resized element is not an image, we apply it to the child image also
                 *
                 * We need to check if it's an image as the css borders are only measured on
                 * images. If the parent is a div, we need make the contained image smaller
                 * to accommodate the css image borders.
                 *
                 */
                $img.width(fw);
                if( !$obj.is("img") ){
                    $obj.width(fw + obj[i][3]);
                }


                /*
                 *
                 * Set the height of the image
                 * if the resized element is not an image, we apply it to the child image also
                 *
                 */
                $img.height(fh);
                if( !$obj.is("img") ){
                    $obj.height(fh + obj[i][4]);
                }


                /*
                 *
                 * Apply the css extras like padding
                 *
                 */
                applyModifications($obj, isNotLast, settings);


                /*
                 *
                 * Assign the effect to show the image
                 * Default effect is using jquery and not CSS3 to support more browsers
                 * Wait until the image is loaded to do this
                 *
                 */

                $img
                    .one('load', function (target) {
                    return function(){
                        if( settings.effect == 'default'){
                            target.animate({opacity: '1'},{duration: settings.fadeSpeed});
                        } else {
                            if(settings.direction == 'vertical'){
                                var sequence = (rownum <= 10  ? rownum : 10);
                            } else {
                                var sequence = (i <= 9  ? i+1 : 10);
                            }
                            /* Remove old classes with the "effect-" name */
                            target.removeClass(function (index, css) {
                                return (css.match(/\beffect-\S+/g) || []).join(' ');
                            });
                            target.addClass(settings.effect);
                            target.addClass("effect-duration-" + sequence);
                        }
                    }
                    }($obj))
                    /*
                     * fix for cached or loaded images
                     * For example if images are loaded in a "window.load" call we need to trigger
                     * the load call again
                     */
                    .each(function() {
                            if(this.complete) $(this).trigger('load');
                    });

        }





        }

        /*
         *
         * This private function applies the required css to space the image gallery
         * It applies it to the parent element so if an image is wrapped in a <div> then
         * the css is applied to the <div>
         *
         */
        function applyModifications($obj, isNotLast, settings) {
            var css = {
                    // Applying padding to element for the grid gap effect
                    'margin-bottom'     : settings.padding + "px",
                    'margin-right'      : (isNotLast) ? settings.padding + "px" : "0px",
                    // Set it to an inline-block by default so that it doesn't break the row
                    'display'           : settings.display,
                    // Set vertical alignment otherwise you get 4px extra padding
                    'vertical-align'    : "bottom",
                    // Hide the overflow to hide the caption
                    'overflow'          : "hidden"
                };

            return $obj.css(css);
        }


        /*
         *
         * This private function calculates any extras like padding, border associated
         * with the image that will impact on the width calculations
         *
         */
        function getImgProperty( img )
        {
            $img = $(img);
            var params =  new Array();
            params["w"] = (parseFloat($img.css("border-left-width")) + parseFloat($img.css("border-right-width")));
            params["h"] = (parseFloat($img.css("border-top-width")) + parseFloat($img.css("border-bottom-width")));
            return params;
        }

    };

    $.fn.collagePlus.defaults = {
        // the ideal height you want your images to be
        'targetHeight'          : 400,
        // how quickly you want images to fade in once ready can be in ms, "slow" or "fast"
        'fadeSpeed'             : "fast",
        // how the resized block should be displayed. inline-block by default so that it doesn't break the row
        'display'               : "inline-block",
        // which effect you want to use for revealing the images (note CSS3 browsers only),
        'effect'                : 'default',
        // effect delays can either be applied per row to give the impression of descending appearance
        // or horizontally, so more like a flock of birds changing direction
        'direction'             : 'vertical',
        // Sometimes there is just one image on the last row and it gets blown up to a huge size to fit the
        // parent div width. To stop this behaviour, set this to true
        'allowPartialLastRow'   : false
    };

})( jQuery );

;(function( $ ) {
    
    $.fn.removeWhitespace = function() 
    {
        this.contents().filter(
            function() {
                return (this.nodeType == 3 && !/\S/.test(this.nodeValue));
            }
        ).remove();
        return this;
    }
    
})( jQuery );
// jQuery RoyalSlider plugin. Custom build. Copyright 2011-2015 Dmitry Semenov http://dimsemenov.com 
// http://dimsemenov.com/private/home.php?build=bullets_fullscreen_global-caption_active-class_deeplinking 
// jquery.royalslider v9.5.7
(function(n){function v(b,f){var c,a=this,e=window.navigator,g=e.userAgent.toLowerCase();a.uid=n.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,h=["webkit","Moz","ms","O"],k="",l=0,q;for(c=0;c<h.length;c++)q=h[c],!k&&q+"Transform"in d&&(k=q),q=q.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[q+"RequestAnimationFrame"],window.cancelAnimationFrame=window[q+"CancelAnimationFrame"]||window[q+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-l)),e=window.setTimeout(function(){a(c+d)},d);l=c+d;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=g.match(/(ipad)/);a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);c=function(a){a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||
[];return{browser:a[1]||"",version:a[2]||"0"}}(g);h={};c.browser&&(h[c.browser]=!0,h.version=c.version);h.chrome&&(h.webkit=!0);a._a=h;a.isAndroid=-1<g.indexOf("android");a.slider=n(b);a.ev=n(a);a._b=n(document);a.st=n.extend({},n.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;!a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),a._e=c+"ransform"in d&&c+"ransition"in d,a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));k=k.toLowerCase();a._g="-"+k+"-";a._h="vertical"===a.st.slidesOrientation?
!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;n.each(n.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>
a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.pointerMultitouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=
6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=n(d+"</div></div>");var m=a.ns,k=function(b,c,d,e,f){a._j1=b+c+m;a._k1=b+d+m;a._l1=b+e+m;f&&(a._m1=b+f+m)};c=e.pointerEnabled;a.pointerEnabled=c||e.msPointerEnabled;a.pointerEnabled?(a.hasTouch=!1,a._n1=.2,a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),c?k("pointer","down","move","up",
"cancel"):k("MSPointer","Down","Move","Up","Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+m,a._k1+=" touchmove"+m,a._l1+=" touchend"+m,a._m1+=" touchcancel"+m,a._n1=.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=.2));a.st.sliderDrag&&(a._f1=!0,h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1=
"-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",a._h?"pan-y":"pan-x");a._q1=n('<div class="rsPreloader"></div>');e=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,e.css(h))):(a._x1="left",a._w1="top");var p;n(window).on("resize"+a.ns,function(){p&&clearTimeout(p);p=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();a.st.arrowsNavHideOnTouch&&
(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);a.st.arrowsNav&&(e=a._o1,n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),a._c2=e.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=e.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),e.one("mousemove.arrowshover",
function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),e.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a.hasTouch&&a.st.sliderTouch||!a.hasTouch&&a.st.sliderDrag)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var r=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=
n(b.target).attr("class");if(-1!==n.inArray(c,r)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(n(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick",b)}}).on("click.rs","a",function(b){if(a.dragSuccess)return!1;a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}n.rsModules||(n.rsModules={uid:0});v.prototype={constructor:v,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;
b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));this._y=b},_s:function(b,f){function c(b,c){c?g.images.push(b.attr(c)):g.images.push(b.text());if(h){h=!1;g.caption="src"===c?b.attr("alt"):b.contents();g.image=g.images[0];g.videoURL=b.attr("data-rsVideo");var d=b.attr("data-rsw"),
e=b.attr("data-rsh");"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d,10),g.iH=parseInt(e,10)):a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth,g.iH=a.st.imgHeight)}}var a=this,e,g={},d,h=!0;b=n(b);a._k2=b;a.ev.trigger("rsBeforeParseNode",[b,g]);if(!g.stopParsing)return b=a._k2,g.id=a._r,g.contentAdded=!1,a._r++,g.images=[],g.isBig=!1,g.hasCover||(b.hasClass("rsImg")?(d=b,e=!0):(d=b.find(".rsImg"),d.length&&(e=!0)),e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=
n(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsGCaption"),d.length&&(g.caption=d.remove()),g.content=b,a.ev.trigger("rsAfterParseNode",[b,g]),f&&a.slides.push(g),0===g.images.length&&(g.isLoaded=!0,g.isRendered=!1,g.isLoading=!1,g.images=null),g},_b2:function(){var b=this,f,c,a=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(e){if(!b.st.keyboardNavEnabled)return!0;if(!(b._l2||(c=
e.keyCode,37!==c&&39!==c||f))){if(document.activeElement&&/(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName))return!0;b.isFullscreen&&e.preventDefault();a(c);f=setInterval(function(){a(c)},700)}}).on("keyup"+b.ns,function(a){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+
" click");this.slider.data("royalSlider",null);n.removeData(this.slider,"royalSlider");n(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,f,g){c.isAdded?(a(f,c),e(f,c)):(g||(g=d.slidesJQ[f]),c.holder?g=c.holder:(g=d.slidesJQ[f]=n(g),c.holder=g),c.appendOnLoaded=!1,e(f,c,g),a(f,c),d._p2(c,g,b),c.isAdded=!0)}function a(a,c){c.contentAdded||(d.setItemHtml(c,b),b||(c.contentAdded=
!0))}function e(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function g(a){if(l){if(a>q-1)return g(a-q);if(0>a)return g(q+a)}return a}var d=this,h,k,l=d._z,q=d.numSlides;if(!isNaN(f))return g(f);var m=d.currSlideId,p,r=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,t=Math.min(2,r),w=!1,v=!1,u;for(k=m;k<m+1+t;k++)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){w=!0;break}for(k=m-1;k>m-1-t;k--)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){v=!0;break}if(w)for(k=
m;k<m+r+1;k++)u=g(k),p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,(h=d.slides[u])&&c(h,u);if(v)for(k=m-1;k>m-1-r;k--)u=g(k),p=Math.floor((d._u-(m-k))/q)*q,(h=d.slides[u])&&c(h,u);if(!b)for(t=g(m-r),m=g(m+r),r=t>m?0:t,k=0;k<q;k++)t>m&&k>t-1||!(k<r||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),h.isAdded=!1)},setItemHtml:function(b,f){var c=this,a=function(){if(!b.images)b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0);else if(!b.isLoading){var a,f;b.content.hasClass("rsImg")?(a=b.content,
f=!0):a=b.content.find(".rsImg:not(img)");a&&!a.is("img")&&a.each(function(){var a=n(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=n(c):a.replaceWith(c)});a=f?b.content:b.content.find("img.rsImg");k();a.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)n("<img />").on("load.rs error.rs",function(a){n(this).off("load.rs error.rs");e([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;a=function(a){n(this).off("load.rs error.rs");
b.loaded.push(this);b.loaded.length===b.numStartedLoad&&e(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var h=n("<img />");b.numStartedLoad++;h.on("load.rs error.rs",a).attr("src",b.images[g])}}}},e=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();else if(b.iW&&b.iH)g();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)g();else{var e=new Image;e.onload=function(){e.width?(b.iW=e.width,b.iH=e.height,g()):setTimeout(function(){e.width&&(b.iW=e.width,b.iH=
e.height);g()},1E3)};e.src=d.src}}else g()},g=function(){b.isLoaded=!0;b.isLoading=!1;d();l();h()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16));b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);
b.isAppended=!0;b.isLoaded&&(c._q2(b),h());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},h=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},k=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},l=function(a){c.st.usePreloader&&(a=b.holder.find(".rsPreloader"),a.length&&a.remove())};b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=
!0,k(),b.holder.slideId=-99):a()},_p2:function(b,f,c){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,a,e="touchstart"===b.type;c._s2=e;c.ev.trigger("rsDragStart");if(n(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)e&&(c._v2=!0);else{e&&(c._v2=!1);c._w2();if(e){var g=b.originalEvent.touches;if(g&&0<g.length)a=g[0],1<g.length&&(c._v2=!0);else return}else b.preventDefault(),a=b,c.pointerEnabled&&
(a=a.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=a.pageX;c._c3=a.pageY;c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;c._f3=0;c._g3=0;c._h3=f?c._i3:c._p;c._j3=(new Date).getTime();if(e)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,a=b.pageX-this._b3,e=b.pageY-this._c3,g=this._h3+a,d=this._h3+e,h=f?this._e3:this._h,g=h?g:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===
d&&0!==a?this._f3=0<a?1:-1:"y"===d&&0!==e&&(this._g3=0<e?1:-1);d=h?this._b3:this._c3;a=h?a:e;f?g>this._n3?g=this._h3+a*this._n1:g<this._o3&&(g=this._h3+a*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(g=this._h3+a*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));this._h3=g;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,a,e="touchmove"===b.type;if(!c._s2||e){if(e){if(c._r3)return;var g=
b.originalEvent.touches;if(g){if(1<g.length)return;a=g[0]}else return}else a=b,c.pointerEnabled&&(a=a.originalEvent);c._a3||(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,"0s"),function h(){c._l2&&(c._t3=requestAnimationFrame(h),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=a;else if(g=f?c._e3:c._h,a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),7<a){if(g)b.preventDefault(),c._z2="x";else if(e){c._v3(b);return}c._l3=!0}else if(-7>a){if(!g)b.preventDefault(),
c._z2="y";else if(e){c._v3(b);return}c._l3=!0}}},_v3:function(b,f){this._r3=!0;this._a3=this._l2=!1;this._y2(b)},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function a(a,b){if(e._l||f)h=(-e._u-e._d1)*e._w,k=Math.abs(e._p-h),e._c=k/b,a&&(e._c+=250),e._c=c(e._c),e._x3(h,!1)}var e=this,g,d,h,k;g=-1<b.type.indexOf("touch");if(!e._s2||g)if(e._s2=!1,e.ev.trigger("rsDragRelease"),e._u3=null,e._l2=!1,e._r3=!1,e._l3=!1,e._m3=0,cancelAnimationFrame(e._t3),e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),
e._b.off(e._k1).off(e._l1),g&&e._e1.off(e._m1),e._i1(),!e._a3&&!e._v2&&f&&e._w3){var l=n(b.target).closest(".rsNavItem");l.length&&e.goTo(l.index())}else{d=f?e._e3:e._h;if(!e._a3||"y"===e._z2&&d||"x"===e._z2&&!d)if(!f&&e._t2){e._t2=!1;if(e.st.navigateByClick){e._i2(e.pointerEnabled?b.originalEvent:b);e.dragSuccess=!0;return}e.dragSuccess=!0}else{e._t2=!1;e.dragSuccess=!1;return}else e.dragSuccess=!0;e._t2=!1;e._z2="";var q=e.st.minSlideOffset;g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?
b.originalEvent:b;var m=d?g.pageX:g.pageY,p=e._d3;g=e._v;var r=e.currSlideId,t=e.numSlides,w=d?e._f3:e._g3,v=e._z;Math.abs(m-p);g=m-g;d=(new Date).getTime()-e._j3;d=Math.abs(g)/d;if(0===w||1>=t)a(!0,d);else{if(!v&&!f)if(0>=r){if(0<w){a(!0,d);return}}else if(r>=t-1&&0>w){a(!0,d);return}if(f){h=e._i3;if(h>e._n3)h=e._n3;else if(h<e._o3)h=e._o3;else{m=d*d/.006;l=-e._i3;p=e._y3-e._z3+e._i3;0<g&&m>l?(l+=e._z3/(15/(m/d*.003)),d=d*l/m,m=l):0>g&&m>p&&(p+=e._z3/(15/(m/d*.003)),d=d*p/m,m=p);l=Math.max(Math.round(d/
.003),50);h+=m*(0>g?-1:1);if(h>e._n3){e._a4(h,l,!0,e._n3,200);return}if(h<e._o3){e._a4(h,l,!0,e._o3,200);return}}e._a4(h,l,!0)}else l=function(a){var b=Math.floor(a/e._w);a-b*e._w>q&&b++;return b},p+q<m?0>w?a(!1,d):(l=l(m-p),e._m2(e.currSlideId-l,c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),!1,!0,!0)):p-q>m?0<w?a(!1,d):(l=l(p-m),e._m2(e.currSlideId+l,c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),!1,!0,!0)):a(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:
0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.slider){if(this.st.autoScaleSlider){var a=this.st.autoScaleSliderWidth,e=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",e/a*f),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",a/e*c),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),
c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&b.images&&b.isLoaded&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,
(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]}},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,n('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));f<=this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",
[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(b){var f=this;b=f.numSlides;b=0>=f._u?0:Math.floor(f._u/b);f.numSlides=f.slides.length;0===f.numSlides?(f.currSlideId=f._d1=f._u=
0,f.currSlide=f._g4=null):f._u=b*f.numSlides+f.currSlideId;for(b=0;b<f.numSlides;b++)f.slides[b].id=b;f.currSlide=f.slides[f.currSlideId];f._r1=f.slidesJQ[f.currSlideId];f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1):0>f.currSlideId&&f.goTo(0);f._t();f._l&&f._p1.css(f._g+f._u1,"0ms");f._h4&&clearTimeout(f._h4);f._h4=setTimeout(function(){f._l&&f._p3((-f._u-f._d1)*f._w);f._n2();f._l||f._r1.css({display:"block",opacity:1})},14);f.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?
this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,a,e){var g=this,d,h,k;g.ev.trigger("rsBeforeMove",[b,a]);k="next"===b?g.currSlideId+1:"prev"===
b?g.currSlideId-1:b=parseInt(b,10);if(!g._z){if(0>k){g._i4("left",!a);return}if(k>=g.numSlides){g._i4("right",!a);return}}g._r2&&(g._u2(!0),c=!1);h=k-g.currSlideId;k=g._o2=g.currSlideId;var l=g.currSlideId+h;a=g._u;var n;g._z?(l=g._n2(!1,l),a+=h):a=l;g._o=l;g._g4=g.slidesJQ[g.currSlideId];g._u=a;g.currSlideId=g._o;g.currSlide=g.slides[g.currSlideId];g._r1=g.slidesJQ[g.currSlideId];var l=g.st.slidesDiff,m=Boolean(0<h);h=Math.abs(h);var p=Math.floor(k/g._y),r=Math.floor((k+(m?l:-l))/g._y),p=(m?Math.max(p,
r):Math.min(p,r))*g._y+(m?g._y-1:0);p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);k=m?p-k:k-p;k>g._y&&(k=g._y);if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),f*=1.4,k=0;k<g.numSlides;k++)g.slides[k].positionSet=!1;g._c=f;g._n2(!0);e||(n=!0);d=(-a-g._d1)*g._w;n?setTimeout(function(){g._j4=!1;g._x3(d,b,!1,c);g.ev.trigger("rsOnUpdateNav")},0):(g._x3(d,b,!1,c),g.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display",
"block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,a,e){function g(){var a;h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),h.data("rsTimeout",""));if(a=k.data("rsTimeout"))clearTimeout(a),k.data("rsTimeout",
"")}var d=this,h,k,l={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,l[d._g+d._u1]=d._c+"ms",l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:n.rsCSS3Easing[d.st.easeOut],d._p1.css(l),a||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,h=d._g4,k=d._r1,k.data("rsTimeout")&&k.css("opacity",0),g(),h&&h.data("rsTimeout",setTimeout(function(){l[d._g+d._u1]="0ms";l.zIndex=0;l.display="none";h.data("rsTimeout",
"");h.css(l);setTimeout(function(){h.css("opacity",0)},16)},d._c+60)),l.display="block",l.zIndex=d._m,l.opacity=0,l[d._g+d._u1]="0ms",l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],k.css(l),k.data("rsTimeout",setTimeout(function(){k.css(d._g+d._u1,d._c+"ms");k.data("rsTimeout",setTimeout(function(){k.css("opacity",1);k.data("rsTimeout","")},20))},20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",d._p1.animate(l,d._c,a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,k=d._r1,k.stop(!0,!0).css({opacity:0,display:"block",
zIndex:d._m}),d._c=d.st.transitionSpeed,k.animate({opacity:1},d._c,d.st.easeInOut),g(),h&&h.data("rsTimeout",setTimeout(function(){h.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=e?setTimeout(function(){d.loadingTimeout=null;e.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._h?this._x1:this._w1),10);else{if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:
b},_k4:function(b){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,a=(-c._u-c._d1)*c._w;if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var e=function(){c._r2=!1};c._x3(a+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(a,"",!1,!0,e)})}},_q2:function(b,f){if(!b.isRendered){var c=b.content,a="rsMainSlideImage",
e,g=n.isFunction(this.st.imageAlignCenter)?this.st.imageAlignCenter(b):this.st.imageAlignCenter,d=n.isFunction(this.st.imageScaleMode)?this.st.imageScaleMode(b):this.st.imageScaleMode,h;b.videoURL&&(a="rsVideoContainer","fill"!==d?e=!0:(h=c,h.hasClass(a)||(h=h.find("."+a)),h.css({width:"100%",height:"100%"}),a="rsMainSlideImage"));c.hasClass(a)||(c=c.find("."+a));if(c){var k=b.iW,l=b.iH;b.isRendered=!0;if("none"!==d||g){a="fill"!==d?this._d4:0;h=this._b4-2*a;var q=this._c4-2*a,m,p,r={};"fit-if-smaller"===
d&&(k>h||l>q)&&(d="fit");if("fill"===d||"fit"===d)m=h/k,p=q/l,m="fill"==d?m>p?m:p:"fit"==d?m<p?m:p:1,k=Math.ceil(k*m,10),l=Math.ceil(l*m,10);"none"!==d&&(r.width=k,r.height=l,e&&c.find(".rsImg").css({width:"100%",height:"100%"}));g&&(r.marginLeft=Math.floor((h-k)/2)+a,r.marginTop=Math.floor((q-l)/2)+a);c.css(r)}}}}};n.rsProto=v.prototype;n.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=n(this);if("object"!==typeof b&&b){if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,
Array.prototype.slice.call(f,1))}else c.data("royalSlider")||c.data("royalSlider",new v(c,b))})};n.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,
addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};n.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};n.extend(jQuery.easing,{easeInOutSine:function(b,
f,c,a,e){return-a/2*(Math.cos(Math.PI*f/e)-1)+c},easeOutSine:function(b,f,c,a,e){return a*Math.sin(f/e*(Math.PI/2))+c},easeOutCubic:function(b,f,c,a,e){return a*((f=f/e-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.fullscreen v1.0.6
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""},d=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var e=0,f=d.length;e<f;e++)if(b.prefix=d[e],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(a.nativeFS=!0,b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,b.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+
"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(a){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()},a._u5=b):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},enterFullscreen:function(a){var b=
this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(a){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");c("body, html").css({overflow:"hidden",
height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;
b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=
a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a,b){var d=a.isLoaded||a.isLoading?'<img class="rsImg rsMainSlideImage" src="'+
a.image+'"/>':'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>';a.content.hasClass("rsImg")?a.content=c(d):a.content.find(".rsImg").eq(0).replaceWith(d);a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1:a.slider);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,h,d,f;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var g=a.st.deeplinking.change,e=a.st.deeplinking.prefix,c="#"+e,k=function(){var a=window.location.hash;return a&&0<a.indexOf(e)&&(a=parseInt(a.substring(c.length),10),0<=a)?a-1:-1},p=k();-1!==p&&(a.st.startSlideId=p);g&&(b(window).on("hashchange"+a.ns,function(b){h||(b=k(),0>b||(b>a.numSlides-1&&(b=a.numSlides-1),
a.goTo(b)))}),a.ev.on("rsBeforeAnimStart",function(){d&&clearTimeout(d);f&&clearTimeout(f)}),a.ev.on("rsAfterSlideChange",function(){d&&clearTimeout(d);f&&clearTimeout(f);f=setTimeout(function(){h=!0;window.location.replace((""+window.location).split("#")[0]+c+(a.currSlideId+1));d=setTimeout(function(){h=!1;d=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){d=f=null;g&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,h){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var f=document,g,e=b.event.special,c=f.documentMode,k="onhashchange"in a&&(c===h||7<c);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;e.hashchange=b.extend(e.hashchange,{setup:function(){if(k)return!1;b(g.start)},teardown:function(){if(k)return!1;b(g.stop)}});g=function(){function g(){var f=d(),e=q(l);f!==l?(m(l=f,e),b(a).trigger("hashchange")):
e!==l&&(location.href=location.href.replace(/#.*/,"")+e);c=setTimeout(g,b.fn.hashchange.delay)}var e={},c,l=d(),n=function(a){return a},m=n,q=n;e.start=function(){c||g()};e.stop=function(){c&&clearTimeout(c);c=h};a.attachEvent&&!a.addEventListener&&!k&&function(){var a,c;e.start=function(){a||(c=(c=b.fn.hashchange.src)&&c+d(),a=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||m(d());g()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,f.onpropertychange=
function(){try{"title"===event.propertyName&&(a.document.title=f.title)}catch(b){}})};e.stop=n;q=function(){return d(a.location.href)};m=function(c,e){var d=a.document,g=b.fn.hashchange.domain;c!==e&&(d.title=f.title,d.open(),g&&d.write('<script>document.domain="'+g+'"\x3c/script>'),d.close(),a.location.hash=c)}}();return e}()})(jQuery,this);

/*! PhotoSwipe Default UI - 4.0.7 - 2015-03-18
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / '

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.className,
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.className && e.type.indexOf('mouse') > -1 && 
				( t.className.indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//PHOTOSWIPE
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*! PhotoSwipe - v4.0.7 - 2015-03-18
	 * http://photoswipe.com
	 * Copyright (c) 2015 Dmitry Semenov; */
	(function (root, factory) {
		if (typeof define === 'function' && define.amd) {
			define(factory);
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.PhotoSwipe = factory();
		}
	})(this, function () {

		'use strict';
		var PhotoSwipe = function (template, UiClass, items, options) {

			/*>>framework-bridge*/
			/**
			 *
			 * Set of generic functions used by gallery.
			 *
			 * You're free to modify anything here as long as functionality is kept.
			 *
			 */
			var framework = {
				features: null,
				bind: function (target, type, listener, unbind) {
					var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
					type = type.split(' ');
					for (var i = 0; i < type.length; i++) {
						if (type[i]) {
							target[methodName](type[i], listener, false);
						}
					}
				},
				isArray: function (obj) {
					return (obj instanceof Array);
				},
				createEl: function (classes, tag) {
					var el = document.createElement(tag || 'div');
					if (classes) {
						el.className = classes;
					}
					return el;
				},
				getScrollY: function () {
					var yOffset = window.pageYOffset;
					return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
				},
				unbind: function (target, type, listener) {
					framework.bind(target, type, listener, true);
				},
				removeClass: function (el, className) {
					var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
					el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
				},
				addClass: function (el, className) {
					if (!framework.hasClass(el, className)) {
						el.className += (el.className ? ' ' : '') + className;
					}
				},
				hasClass: function (el, className) {
					return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
				},
				getChildByClass: function (parentEl, childClassName) {
					var node = parentEl.firstChild;
					while (node) {
						if (framework.hasClass(node, childClassName)) {
							return node;
						}
						node = node.nextSibling;
					}
				},
				arraySearch: function (array, value, key) {
					var i = array.length;
					while (i--) {
						if (array[i][key] === value) {
							return i;
						}
					}
					return -1;
				},
				extend: function (o1, o2, preventOverwrite) {
					for (var prop in o2) {
						if (o2.hasOwnProperty(prop)) {
							if (preventOverwrite && o1.hasOwnProperty(prop)) {
								continue;
							}
							o1[prop] = o2[prop];
						}
					}
				},
				easing: {
					sine: {
						out: function (k) {
							return Math.sin(k * (Math.PI / 2));
						},
						inOut: function (k) {
							return -(Math.cos(Math.PI * k) - 1) / 2;
						}
					},
					cubic: {
						out: function (k) {
							return --k * k * k + 1;
						}
					}
					/*
						elastic: {
							out: function ( k ) {

								var s, a = 0.1, p = 0.4;
								if ( k === 0 ) return 0;
								if ( k === 1 ) return 1;
								if ( !a || a < 1 ) { a = 1; s = p / 4; }
								else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
								return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

							},
						},
						back: {
							out: function ( k ) {
								var s = 1.70158;
								return --k * k * ( ( s + 1 ) * k + s ) + 1;
							}
						}
					*/
				},

				/**
				 *
				 * @return {object}
				 *
				 * {
				 *  raf : request animation frame function
				 *  caf : cancel animation frame function
				 *  transfrom : transform property key (with vendor), or null if not supported
				 *  oldIE : IE8 or below
				 * }
				 *
				 */
				detectFeatures: function () {
					if (framework.features) {
						return framework.features;
					}
					var helperEl = framework.createEl(),
						helperStyle = helperEl.style,
						vendor = '',
						features = {};

					// IE8 and below
					features.oldIE = document.all && !document.addEventListener;

					features.touch = 'ontouchstart' in window;

					if (window.requestAnimationFrame) {
						features.raf = window.requestAnimationFrame;
						features.caf = window.cancelAnimationFrame;
					}

					features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

					// fix false-positive detection of old Android in new IE
					// (IE11 ua string contains "Android 4.0")

					if (!features.pointerEvent) {

						var ua = navigator.userAgent;

						// Detect if device is iPhone or iPod and if it's older than iOS 8
						// http://stackoverflow.com/a/14223920
						// 
						// This detection is made because of buggy top/bottom toolbars
						// that don't trigger window.resize event.
						// For more info refer to _isFixedPosition variable in core.js

						if (/iP(hone|od)/.test(navigator.platform)) {
							var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
							if (v && v.length > 0) {
								v = parseInt(v[1], 10);
								if (v >= 1 && v < 8) {
									features.isOldIOSPhone = true;
								}
							}
						}

						// Detect old Android (before KitKat)
						// due to bugs related to position:fixed
						// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

						var match = ua.match(/Android\s([0-9\.]*)/);
						var androidversion = match ? match[1] : 0;
						androidversion = parseFloat(androidversion);
						if (androidversion >= 1) {
							if (androidversion < 4.4) {
								features.isOldAndroid = true; // for fixed position bug & performance
							}
							features.androidVersion = androidversion; // for touchend bug
						}
						features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

						// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
					}

					var styleChecks = ['transform', 'perspective', 'animationName'],
						vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
						styleCheckItem,
						styleName;

					for (var i = 0; i < 4; i++) {
						vendor = vendors[i];

						for (var a = 0; a < 3; a++) {
							styleCheckItem = styleChecks[a];

							// uppercase first letter of property name, if vendor is present
							styleName = vendor + (vendor ?
								styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
								styleCheckItem);

							if (!features[styleCheckItem] && styleName in helperStyle) {
								features[styleCheckItem] = styleName;
							}
						}

						if (vendor && !features.raf) {
							vendor = vendor.toLowerCase();
							features.raf = window[vendor + 'RequestAnimationFrame'];
							if (features.raf) {
								features.caf = window[vendor + 'CancelAnimationFrame'] ||
									window[vendor + 'CancelRequestAnimationFrame'];
							}
						}
					}

					if (!features.raf) {
						var lastTime = 0;
						features.raf = function (fn) {
							var currTime = new Date().getTime();
							var timeToCall = Math.max(0, 16 - (currTime - lastTime));
							var id = window.setTimeout(function () {
								fn(currTime + timeToCall);
							}, timeToCall);
							lastTime = currTime + timeToCall;
							return id;
						};
						features.caf = function (id) {
							clearTimeout(id);
						};
					}

					// Detect SVG support
					features.svg = !!document.createElementNS &&
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

					framework.features = features;

					return features;
				}
			};

			framework.detectFeatures();

			// Override addEventListener for old versions of IE
			if (framework.features.oldIE) {

				framework.bind = function (target, type, listener, unbind) {

					type = type.split(' ');

					var methodName = (unbind ? 'detach' : 'attach') + 'Event',
						evName,
						_handleEv = function () {
							listener.handleEvent.call(listener);
						};

					for (var i = 0; i < type.length; i++) {
						evName = type[i];
						if (evName) {

							if (typeof listener === 'object' && listener.handleEvent) {
								if (!unbind) {
									listener['oldIE' + evName] = _handleEv;
								} else {
									if (!listener['oldIE' + evName]) {
										return false;
									}
								}

								target[methodName]('on' + evName, listener['oldIE' + evName]);
							} else {
								target[methodName]('on' + evName, listener);
							}

						}
					}
				};

			}

			/*>>framework-bridge*/

			/*>>core*/
			//function(template, UiClass, items, options)

			var self = this;

			/**
			 * Static vars, don't change unless you know what you're doing.
			 */
			var DOUBLE_TAP_RADIUS = 25,
				NUM_HOLDERS = 3;

			/**
			 * Options
			 */
			var _options = {
				allowPanToNext: true,
				spacing: 0.12,
				bgOpacity: 1,
				mouseUsed: false,
				loop: true,
				pinchToClose: true,
				closeOnScroll: true,
				closeOnVerticalDrag: true,
				hideAnimationDuration: 333,
				showAnimationDuration: 333,
				showHideOpacity: false,
				focus: true,
				escKey: true,
				arrowKeys: true,
				mainScrollEndFriction: 0.35,
				panEndFriction: 0.35,
				isClickableElement: function (el) {
					return el.tagName === 'A';
				},
				getDoubleTapZoom: function (isMouseClick, item) {
					if (isMouseClick) {
						return 1;
					} else {
						return item.initialZoomLevel < 0.7 ? 1 : 1.5;
					}
				},
				maxSpreadZoom: 2,

				// not fully implemented yet
				scaleMode: 'fit', // TODO
				modal: true, // TODO
				alwaysFadeIn: false // TODO
			};
			framework.extend(_options, options);


			/**
			 * Private helper variables & functions
			 */

			var _getEmptyPoint = function () {
				return {
					x: 0,
					y: 0
				};
			};

			var _isOpen,
				_isDestroying,
				_closedByScroll,
				_currentItemIndex,
				_containerStyle,
				_containerShiftIndex,
				_currPanDist = _getEmptyPoint(),
				_startPanOffset = _getEmptyPoint(),
				_panOffset = _getEmptyPoint(),
				_upMoveEvents, // drag move, drag end & drag cancel events array
				_downEvents, // drag start events array
				_globalEventHandlers,
				_viewportSize = {},
				_currZoomLevel,
				_startZoomLevel,
				_translatePrefix,
				_translateSufix,
				_updateSizeInterval,
				_itemsNeedUpdate,
				_currPositionIndex = 0,
				_offset,
				_slideSize = _getEmptyPoint(), // size of slide area, including spacing
				_itemHolders,
				_prevItemIndex,
				_indexDiff = 0, // difference of indexes since last content update
				_dragStartEvent,
				_dragMoveEvent,
				_dragEndEvent,
				_dragCancelEvent,
				_transformKey,
				_pointerEventEnabled,
				_isFixedPosition = true,
				_likelyTouchDevice,
				_modules = [],
				_requestAF,
				_cancelAF,
				_initalClassName,
				_initalWindowScrollY,
				_oldIE,
				_currentWindowScrollY,
				_features,
				_windowVisibleSize = {},

				// Registers PhotoSWipe module (History, Controller ...)
				_registerModule = function (name, module) {
					framework.extend(self, module.publicMethods);
					_modules.push(name);
				},

				_getLoopedId = function (index) {
					var numSlides = _getNumItems();
					if (index > numSlides - 1) {
						return index - numSlides;
					} else if (index < 0) {
						return numSlides + index;
					}
					return index;
				},

				// Micro bind/trigger
				_listeners = {},
				_listen = function (name, fn) {
					if (!_listeners[name]) {
						_listeners[name] = [];
					}
					return _listeners[name].push(fn);
				},
				_shout = function (name) {
					var listeners = _listeners[name];

					if (listeners) {
						var args = Array.prototype.slice.call(arguments);
						args.shift();

						for (var i = 0; i < listeners.length; i++) {
							listeners[i].apply(self, args);
						}
					}
				},

				_getCurrentTime = function () {
					return new Date().getTime();
				},
				_applyBgOpacity = function (opacity) {
					_bgOpacity = opacity;
					self.bg.style.opacity = opacity * _options.bgOpacity;
				},

				_applyZoomTransform = function (styleObj, x, y, zoom) {
					styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
				},
				_applyCurrentZoomPan = function () {
					if (_currZoomElementStyle) {
						_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
					}
				},
				_applyZoomPanToItem = function (item) {
					if (item.container) {
						_applyZoomTransform(item.container.style,
							item.initialPosition.x,
							item.initialPosition.y,
							item.initialZoomLevel);
					}
				},
				_setTranslateX = function (x, elStyle) {
					elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
				},
				_moveMainScroll = function (x, dragging) {

					if (!_options.loop && dragging) {
						// if of current item during scroll (float)
						var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x;
						var delta = Math.round(x - _mainScrollPos.x);

						if ((newSlideIndexOffset < 0 && delta > 0) ||
							(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0)) {
							x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
						}
					}

					_mainScrollPos.x = x;
					_setTranslateX(x, _containerStyle);
				},
				_calculatePanOffset = function (axis, zoomLevel) {
					var m = _midZoomPoint[axis] - _offset[axis];
					return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
				},

				_equalizePoints = function (p1, p2) {
					p1.x = p2.x;
					p1.y = p2.y;
					if (p2.id) {
						p1.id = p2.id;
					}
				},
				_roundPoint = function (p) {
					p.x = Math.round(p.x);
					p.y = Math.round(p.y);
				},

				_mouseMoveTimeout = null,
				_onFirstMouseMove = function () {
					// Wait until mouse move event is fired at least twice during 100ms
					// We do this, because some mobile browsers trigger it on touchstart
					if (_mouseMoveTimeout) {
						framework.unbind(document, 'mousemove', _onFirstMouseMove);
						framework.addClass(template, 'pswp--has_mouse');
						_options.mouseUsed = true;
						_shout('mouseUsed');
					}
					_mouseMoveTimeout = setTimeout(function () {
						_mouseMoveTimeout = null;
					}, 100);
				},

				_bindEvents = function () {
					framework.bind(document, 'keydown', self);

					if (_features.transform) {
						// don't bind click event in browsers that don't support transform (mostly IE8)
						framework.bind(self.scrollWrap, 'click', self);
					}


					if (!_options.mouseUsed) {
						framework.bind(document, 'mousemove', _onFirstMouseMove);
					}

					framework.bind(window, 'resize scroll', self);

					_shout('bindEvents');
				},

				_unbindEvents = function () {
					framework.unbind(window, 'resize', self);
					framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
					framework.unbind(document, 'keydown', self);
					framework.unbind(document, 'mousemove', _onFirstMouseMove);

					if (_features.transform) {
						framework.unbind(self.scrollWrap, 'click', self);
					}

					if (_isDragging) {
						framework.unbind(window, _upMoveEvents, self);
					}

					_shout('unbindEvents');
				},

				_calculatePanBounds = function (zoomLevel, update) {
					var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
					if (update) {
						_currPanBounds = bounds;
					}
					return bounds;
				},

				_getMinZoomLevel = function (item) {
					if (!item) {
						item = self.currItem;
					}
					return item.initialZoomLevel;
				},
				_getMaxZoomLevel = function (item) {
					if (!item) {
						item = self.currItem;
					}
					return item.w > 0 ? _options.maxSpreadZoom : 1;
				},

				// Return true if offset is out of the bounds
				_modifyDestPanOffset = function (axis, destPanBounds, destPanOffset, destZoomLevel) {
					if (destZoomLevel === self.currItem.initialZoomLevel) {
						destPanOffset[axis] = self.currItem.initialPosition[axis];
						return true;
					} else {
						destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

						if (destPanOffset[axis] > destPanBounds.min[axis]) {
							destPanOffset[axis] = destPanBounds.min[axis];
							return true;
						} else if (destPanOffset[axis] < destPanBounds.max[axis]) {
							destPanOffset[axis] = destPanBounds.max[axis];
							return true;
						}
					}
					return false;
				},

				_setupTransforms = function () {

					if (_transformKey) {
						// setup 3d transforms
						var allow3dTransform = _features.perspective && !_likelyTouchDevice;
						_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
						_translateSufix = _features.perspective ? ', 0px)' : ')';
						return;
					}

					// Override zoom/pan/move functions in case old browser is used (most likely IE)
					// (so they use left/top/width/height, instead of CSS transform)

					_transformKey = 'left';
					framework.addClass(template, 'pswp--ie');

					_setTranslateX = function (x, elStyle) {
						elStyle.left = x + 'px';
					};
					_applyZoomPanToItem = function (item) {

						var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
							s = item.container.style,
							w = zoomRatio * item.w,
							h = zoomRatio * item.h;

						s.width = w + 'px';
						s.height = h + 'px';
						s.left = item.initialPosition.x + 'px';
						s.top = item.initialPosition.y + 'px';

					};
					_applyCurrentZoomPan = function () {
						if (_currZoomElementStyle) {

							var s = _currZoomElementStyle,
								item = self.currItem,
								zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
								w = zoomRatio * item.w,
								h = zoomRatio * item.h;

							s.width = w + 'px';
							s.height = h + 'px';


							s.left = _panOffset.x + 'px';
							s.top = _panOffset.y + 'px';
						}

					};
				},

				_onKeyDown = function (e) {
					var keydownAction = '';
					if (_options.escKey && e.keyCode === 27) {
						keydownAction = 'close';
					} else if (_options.arrowKeys) {
						if (e.keyCode === 37) {
							keydownAction = 'prev';
						} else if (e.keyCode === 39) {
							keydownAction = 'next';
						}
					}

					if (keydownAction) {
						// don't do anything if special key pressed to prevent from overriding default browser actions
						// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
						if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
							if (e.preventDefault) {
								e.preventDefault();
							} else {
								e.returnValue = false;
							}
							self[keydownAction]();
						}
					}
				},

				_onGlobalClick = function (e) {
					if (!e) {
						return;
					}

					// don't allow click event to pass through when triggering after drag or some other gesture
					if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
						e.preventDefault();
						e.stopPropagation();
					}
				},

				_onPageScroll = function () {
					self.setScrollOffset(0, framework.getScrollY());
				};







			// Micro animation engine
			var _animations = {},
				_numAnimations = 0,
				_stopAnimation = function (name) {
					if (_animations[name]) {
						if (_animations[name].raf) {
							_cancelAF(_animations[name].raf);
						}
						_numAnimations--;
						delete _animations[name];
					}
				},
				_registerStartAnimation = function (name) {
					if (_animations[name]) {
						_stopAnimation(name);
					}
					if (!_animations[name]) {
						_numAnimations++;
						_animations[name] = {};
					}
				},
				_stopAllAnimations = function () {
					for (var prop in _animations) {

						if (_animations.hasOwnProperty(prop)) {
							_stopAnimation(prop);
						}

					}
				},
				_animateProp = function (name, b, endProp, d, easingFn, onUpdate, onComplete) {
					var startAnimTime = _getCurrentTime(),
						t;
					_registerStartAnimation(name);

					var animloop = function () {
						if (_animations[name]) {

							t = _getCurrentTime() - startAnimTime; // time diff
							//b - beginning (start prop)
							//d - anim duration

							if (t >= d) {
								_stopAnimation(name);
								onUpdate(endProp);
								if (onComplete) {
									onComplete();
								}
								return;
							}
							onUpdate((endProp - b) * easingFn(t / d) + b);

							_animations[name].raf = _requestAF(animloop);
						}
					};
					animloop();
				};



			var publicMethods = {

				// make a few local variables and functions public
				shout: _shout,
				listen: _listen,
				viewportSize: _viewportSize,
				options: _options,

				isMainScrollAnimating: function () {
					return _mainScrollAnimating;
				},
				getZoomLevel: function () {
					return _currZoomLevel;
				},
				getCurrentIndex: function () {
					return _currentItemIndex;
				},
				isDragging: function () {
					return _isDragging;
				},
				isZooming: function () {
					return _isZooming;
				},
				setScrollOffset: function (x, y) {
					_offset.x = x;
					_currentWindowScrollY = _offset.y = y;
				},
				applyZoomPan: function (zoomLevel, panX, panY) {
					_panOffset.x = panX;
					_panOffset.y = panY;
					_currZoomLevel = zoomLevel;
					_applyCurrentZoomPan();
				},

				init: function () {

					if (_isOpen || _isDestroying) {
						return;
					}

					var i;

					self.framework = framework; // basic function
					self.template = template; // root DOM element of PhotoSwipe
					self.bg = framework.getChildByClass(template, 'pswp__bg');

					_initalClassName = template.className;
					_isOpen = true;

					_features = framework.detectFeatures();
					_requestAF = _features.raf;
					_cancelAF = _features.caf;
					_transformKey = _features.transform;
					_oldIE = _features.oldIE;

					self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
					self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

					_containerStyle = self.container.style; // for fast access

					// Objects that hold slides (there are only 3 in DOM)
					self.itemHolders = _itemHolders = [
						{
							el: self.container.children[0],
							wrap: 0,
							index: -1
						},
						{
							el: self.container.children[1],
							wrap: 0,
							index: -1
						},
						{
							el: self.container.children[2],
							wrap: 0,
							index: -1
						}
		];

					// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
					_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

					_setupTransforms();

					// Setup global events
					_globalEventHandlers = {
						resize: self.updateSize,
						scroll: _onPageScroll,
						keydown: _onKeyDown,
						click: _onGlobalClick
					};

					// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
					// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
					var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
					if (!_features.animationName || !_features.transform || oldPhone) {
						_options.showAnimationDuration = _options.hideAnimationDuration = 0;
					}

					// init modules
					for (i = 0; i < _modules.length; i++) {
						self['init' + _modules[i]]();
					}

					// init
					if (UiClass) {
						var ui = self.ui = new UiClass(self, framework);
						ui.init();
					}

					_shout('firstUpdate');
					_currentItemIndex = _currentItemIndex || _options.index || 0;
					// validate index
					if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
						_currentItemIndex = 0;
					}
					self.currItem = _getItemAt(_currentItemIndex);


					if (_features.isOldIOSPhone || _features.isOldAndroid) {
						_isFixedPosition = false;
					}

					if (_options.modal) {
						template.setAttribute('aria-hidden', 'false');
						if (!_isFixedPosition) {
							template.style.position = 'absolute';
							template.style.top = framework.getScrollY() + 'px';
						} else {
							template.style.position = 'fixed';
						}
					}

					if (_currentWindowScrollY === undefined) {
						_shout('initialLayout');
						_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
					}

					// add classes to root element of PhotoSwipe
					var rootClasses = 'pswp--open ';
					if (_options.mainClass) {
						rootClasses += _options.mainClass + ' ';
					}
					if (_options.showHideOpacity) {
						rootClasses += 'pswp--animate_opacity ';
					}
					rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
					rootClasses += _features.animationName ? ' pswp--css_animation' : '';
					rootClasses += _features.svg ? ' pswp--svg' : '';
					framework.addClass(template, rootClasses);

					self.updateSize();

					// initial update
					_containerShiftIndex = -1;
					_indexDiff = null;
					for (i = 0; i < NUM_HOLDERS; i++) {
						_setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
					}

					if (!_oldIE) {
						framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
					}

					_listen('initialZoomInEnd', function () {
						self.setContent(_itemHolders[0], _currentItemIndex - 1);
						self.setContent(_itemHolders[2], _currentItemIndex + 1);

						_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

						if (_options.focus) {
							// focus causes layout, 
							// which causes lag during the animation, 
							// that's why we delay it untill the initial zoom transition ends
							template.focus();
						}


						_bindEvents();
					});

					// set content for center slide (first time)
					self.setContent(_itemHolders[1], _currentItemIndex);

					self.updateCurrItem();

					_shout('afterInit');

					if (!_isFixedPosition) {

						// On all versions of iOS lower than 8.0, we check size of viewport every second.
						// 
						// This is done to detect when Safari top & bottom bars appear, 
						// as this action doesn't trigger any events (like resize). 
						// 
						// On iOS8 they fixed this.
						// 
						// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

						_updateSizeInterval = setInterval(function () {
							if (!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)) {
								self.updateSize();
							}
						}, 1000);
					}

					framework.addClass(template, 'pswp--visible');
				},

				// Closes the gallery, then destroy it
				close: function () {
					if (!_isOpen) {
						return;
					}

					_isOpen = false;
					_isDestroying = true;
					_shout('close');
					_unbindEvents();

					_showOrHide(self.currItem, null, true, self.destroy);
				},

				// destroys gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
				destroy: function () {
					_shout('destroy');

					if (_showOrHideTimeout) {
						clearTimeout(_showOrHideTimeout);
					}

					if (_options.modal) {
						template.setAttribute('aria-hidden', 'true');
						template.className = _initalClassName;
					}

					if (_updateSizeInterval) {
						clearInterval(_updateSizeInterval);
					}

					framework.unbind(self.scrollWrap, _downEvents, self);

					// we unbind lost event at the end, as closing animation may depend on it
					framework.unbind(window, 'scroll', self);

					_stopDragUpdateLoop();

					_stopAllAnimations();

					_listeners = null;
				},

				/**
				 * Pan image to position
				 * @param {Number} x
				 * @param {Number} y
				 * @param {Boolean} force Will ignore bounds if set to true.
				 */
				panTo: function (x, y, force) {
					if (!force) {
						if (x > _currPanBounds.min.x) {
							x = _currPanBounds.min.x;
						} else if (x < _currPanBounds.max.x) {
							x = _currPanBounds.max.x;
						}

						if (y > _currPanBounds.min.y) {
							y = _currPanBounds.min.y;
						} else if (y < _currPanBounds.max.y) {
							y = _currPanBounds.max.y;
						}
					}

					_panOffset.x = x;
					_panOffset.y = y;
					_applyCurrentZoomPan();
				},

				handleEvent: function (e) {
					e = e || window.event;
					if (_globalEventHandlers[e.type]) {
						_globalEventHandlers[e.type](e);
					}
				},


				goTo: function (index) {

					index = _getLoopedId(index);

					var diff = index - _currentItemIndex;
					_indexDiff = diff;

					_currentItemIndex = index;
					self.currItem = _getItemAt(_currentItemIndex);
					_currPositionIndex -= diff;

					_moveMainScroll(_slideSize.x * _currPositionIndex);


					_stopAllAnimations();
					_mainScrollAnimating = false;

					self.updateCurrItem();
				},
				next: function () {
					self.goTo(_currentItemIndex + 1);
				},
				prev: function () {
					self.goTo(_currentItemIndex - 1);
				},

				// update current zoom/pan objects
				updateCurrZoomItem: function (emulateSetContent) {
					if (emulateSetContent) {
						_shout('beforeChange', 0);
					}

					// itemHolder[1] is middle (current) item
					if (_itemHolders[1].el.children.length) {
						var zoomElement = _itemHolders[1].el.children[0];
						if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
							_currZoomElementStyle = zoomElement.style;
						} else {
							_currZoomElementStyle = null;
						}
					} else {
						_currZoomElementStyle = null;
					}

					_currPanBounds = self.currItem.bounds;
					_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

					_panOffset.x = _currPanBounds.center.x;
					_panOffset.y = _currPanBounds.center.y;

					if (emulateSetContent) {
						_shout('afterChange');
					}
				},


				invalidateCurrItems: function () {
					_itemsNeedUpdate = true;
					for (var i = 0; i < NUM_HOLDERS; i++) {
						if (_itemHolders[i].item) {
							_itemHolders[i].item.needsUpdate = true;
						}
					}
				},

				updateCurrItem: function (beforeAnimation) {

					if (_indexDiff === 0) {
						return;
					}

					var diffAbs = Math.abs(_indexDiff),
						tempHolder;

					if (beforeAnimation && diffAbs < 2) {
						return;
					}


					self.currItem = _getItemAt(_currentItemIndex);

					_shout('beforeChange', _indexDiff);

					if (diffAbs >= NUM_HOLDERS) {
						_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
						diffAbs = NUM_HOLDERS;
					}
					for (var i = 0; i < diffAbs; i++) {
						if (_indexDiff > 0) {
							tempHolder = _itemHolders.shift();
							_itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

							_containerShiftIndex++;
							_setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
							self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
						} else {
							tempHolder = _itemHolders.pop();
							_itemHolders.unshift(tempHolder); // move last to first

							_containerShiftIndex--;
							_setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
							self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
						}

					}

					// reset zoom/pan on previous item
					if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

						var prevItem = _getItemAt(_prevItemIndex);
						if (prevItem.initialZoomLevel !== _currZoomLevel) {
							_calculateItemSize(prevItem, _viewportSize);
							_applyZoomPanToItem(prevItem);
						}

					}

					// reset diff after update
					_indexDiff = 0;

					self.updateCurrZoomItem();

					_prevItemIndex = _currentItemIndex;

					_shout('afterChange');

				},



				updateSize: function (force) {

					if (!_isFixedPosition) {
						var windowScrollY = framework.getScrollY();
						if (_currentWindowScrollY !== windowScrollY) {
							template.style.top = windowScrollY + 'px';
							_currentWindowScrollY = windowScrollY;
						}
						if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
							return;
						}
						_windowVisibleSize.x = window.innerWidth;
						_windowVisibleSize.y = window.innerHeight;

						//template.style.width = _windowVisibleSize.x + 'px';
						template.style.height = _windowVisibleSize.y + 'px';
					}



					_viewportSize.x = self.scrollWrap.clientWidth;
					_viewportSize.y = self.scrollWrap.clientHeight;


					_offset = {
						x: 0,
						y: _currentWindowScrollY
					}; //framework.getOffset(template); 

					_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
					_slideSize.y = _viewportSize.y;

					_moveMainScroll(_slideSize.x * _currPositionIndex);

					_shout('beforeResize'); // even may be used for example to switch image sources


					// don't re-calculate size on inital size update
					if (_containerShiftIndex !== undefined) {

						var holder,
							item,
							hIndex;

						for (var i = 0; i < NUM_HOLDERS; i++) {
							holder = _itemHolders[i];
							_setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

							hIndex = _currentItemIndex + i - 1;

							if (_options.loop && _getNumItems() > 2) {
								hIndex = _getLoopedId(hIndex);
							}

							// update zoom level on items and refresh source (if needsUpdate)
							item = _getItemAt(hIndex);

							// re-render gallery item if `needsUpdate`,
							// or doesn't have `bounds` (entirely new slide object)
							if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {

								self.cleanSlide(item);

								self.setContent(holder, hIndex);

								// if "center" slide
								if (i === 1) {
									self.currItem = item;
									self.updateCurrZoomItem(true);
								}

								item.needsUpdate = false;

							} else if (holder.index === -1 && hIndex >= 0) {
								// add content first time
								self.setContent(holder, hIndex);
							}
							if (item && item.container) {
								_calculateItemSize(item, _viewportSize);
								_applyZoomPanToItem(item);
							}

						}
						_itemsNeedUpdate = false;
					}

					_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
					_currPanBounds = self.currItem.bounds;

					if (_currPanBounds) {
						_panOffset.x = _currPanBounds.center.x;
						_panOffset.y = _currPanBounds.center.y;
						_applyCurrentZoomPan();
					}

					_shout('resize');
				},

				// Zoom current item to
				zoomTo: function (destZoomLevel, centerPoint, speed, easingFn, updateFn) {
					/*
						if(destZoomLevel === 'fit') {
							destZoomLevel = self.currItem.fitRatio;
						} else if(destZoomLevel === 'fill') {
							destZoomLevel = self.currItem.fillRatio;
						}
					*/

					if (centerPoint) {
						_startZoomLevel = _currZoomLevel;
						_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
						_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
						_equalizePoints(_startPanOffset, _panOffset);
					}

					var destPanBounds = _calculatePanBounds(destZoomLevel, false),
						destPanOffset = {};

					_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
					_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

					var initialZoomLevel = _currZoomLevel;
					var initialPanOffset = {
						x: _panOffset.x,
						y: _panOffset.y
					};

					_roundPoint(destPanOffset);

					// _startZoomLevel = destZoomLevel;
					var onUpdate = function (now) {
						if (now === 1) {
							_currZoomLevel = destZoomLevel;
							_panOffset.x = destPanOffset.x;
							_panOffset.y = destPanOffset.y;
						} else {
							_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
							_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
							_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
						}

						if (updateFn) {
							updateFn(now);
						}

						_applyCurrentZoomPan();
					};

					if (speed) {
						_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
					} else {
						onUpdate(1);
					}
				}


			};

			/*>>core*/

			/*>>gestures*/
			/**
			 * Mouse/touch/pointer event handlers.
			 *
			 * separated from @core.js for readability
			 */

			var MIN_SWIPE_DISTANCE = 30,
				DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

			var _gestureStartTime,
				_gestureCheckSpeedTime,

				// pool of objects that are used during dragging of zooming
				p = {}, // first point
				p2 = {}, // second point (for zoom gesture)
				delta = {},
				_currPoint = {},
				_startPoint = {},
				_currPointers = [],
				_startMainScrollPos = {},
				_releaseAnimData,
				_posPoints = [], // array of points during dragging, used to determine type of gesture
				_tempPoint = {},

				_isZoomingIn,
				_verticalDragInitiated,
				_oldAndroidTouchEndTimeout,
				_currZoomedItemIndex = 0,
				_centerPoint = _getEmptyPoint(),
				_lastReleaseTime = 0,
				_isDragging, // at least one pointer is down
				_isMultitouch, // at least two _pointers are down
				_zoomStarted, // zoom level changed during zoom gesture
				_moved,
				_dragAnimFrame,
				_mainScrollShifted,
				_currentPoints, // array of current touch points
				_isZooming,
				_currPointsDistance,
				_startPointsDistance,
				_currPanBounds,
				_mainScrollPos = _getEmptyPoint(),
				_currZoomElementStyle,
				_mainScrollAnimating, // true, if animation after swipe gesture is running
				_midZoomPoint = _getEmptyPoint(),
				_currCenterPoint = _getEmptyPoint(),
				_direction,
				_isFirstMove,
				_opacityChanged,
				_bgOpacity,
				_wasOverInitialZoom,

				_isEqualPoints = function (p1, p2) {
					return p1.x === p2.x && p1.y === p2.y;
				},
				_isNearbyPoints = function (touch0, touch1) {
					return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
				},
				_calculatePointsDistance = function (p1, p2) {
					_tempPoint.x = Math.abs(p1.x - p2.x);
					_tempPoint.y = Math.abs(p1.y - p2.y);
					return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
				},
				_stopDragUpdateLoop = function () {
					if (_dragAnimFrame) {
						_cancelAF(_dragAnimFrame);
						_dragAnimFrame = null;
					}
				},
				_dragUpdateLoop = function () {
					if (_isDragging) {
						_dragAnimFrame = _requestAF(_dragUpdateLoop);
						_renderMovement();
					}
				},
				_canPan = function () {
					return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
				},

				// find the closest parent DOM element
				_closestElement = function (el, fn) {
					if (!el) {
						return false;
					}

					// don't search elements above pswp__scroll-wrap
					if (el.className && el.className.indexOf('pswp__scroll-wrap') > -1) {
						return false;
					}

					if (fn(el)) {
						return el;
					}

					return _closestElement(el.parentNode, fn);
				},

				_preventObj = {},
				_preventDefaultEventBehaviour = function (e, isDown) {
					_preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

					_shout('preventDragEvent', e, isDown, _preventObj);
					return _preventObj.prevent;

				},
				_convertTouchToPoint = function (touch, p) {
					p.x = touch.pageX;
					p.y = touch.pageY;
					p.id = touch.identifier;
					return p;
				},
				_findCenterOfPoints = function (p1, p2, pCenter) {
					pCenter.x = (p1.x + p2.x) * 0.5;
					pCenter.y = (p1.y + p2.y) * 0.5;
				},
				_pushPosPoint = function (time, x, y) {
					if (time - _gestureCheckSpeedTime > 50) {
						var o = _posPoints.length > 2 ? _posPoints.shift() : {};
						o.x = x;
						o.y = y;
						_posPoints.push(o);
						_gestureCheckSpeedTime = time;
					}
				},

				_calculateVerticalDragOpacityRatio = function () {
					var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
					return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
				},


				// points pool, reused during touch events
				_ePoint1 = {},
				_ePoint2 = {},
				_tempPointsArr = [],
				_tempCounter,
				_getTouchPoints = function (e) {
					// clean up previous points, without recreating array
					while (_tempPointsArr.length > 0) {
						_tempPointsArr.pop();
					}

					if (!_pointerEventEnabled) {
						if (e.type.indexOf('touch') > -1) {

							if (e.touches && e.touches.length > 0) {
								_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
								if (e.touches.length > 1) {
									_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
								}
							}

						} else {
							_ePoint1.x = e.pageX;
							_ePoint1.y = e.pageY;
							_ePoint1.id = '';
							_tempPointsArr[0] = _ePoint1; //_ePoint1;
						}
					} else {
						_tempCounter = 0;
						// we can use forEach, as pointer events are supported only in modern browsers
						_currPointers.forEach(function (p) {
							if (_tempCounter === 0) {
								_tempPointsArr[0] = p;
							} else if (_tempCounter === 1) {
								_tempPointsArr[1] = p;
							}
							_tempCounter++;

						});
					}
					return _tempPointsArr;
				},

				_panOrMoveMainScroll = function (axis, delta) {

					var panFriction,
						overDiff = 0,
						newOffset = _panOffset[axis] + delta[axis],
						startOverDiff,
						dir = delta[axis] > 0,
						newMainScrollPosition = _mainScrollPos.x + delta.x,
						mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
						newPanPos,
						newMainScrollPos;

					// calculate fdistance over the bounds and friction
					if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
						panFriction = _options.panEndFriction;
						// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
						// Looks not as nice as was expected. Left for history.
						// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
					} else {
						panFriction = 1;
					}

					newOffset = _panOffset[axis] + delta[axis] * panFriction;

					// move main scroll or start panning
					if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


						if (!_currZoomElementStyle) {

							newMainScrollPos = newMainScrollPosition;

						} else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {

							if (dir) {
								if (newOffset > _currPanBounds.min[axis]) {
									panFriction = _options.panEndFriction;
									overDiff = _currPanBounds.min[axis] - newOffset;
									startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
								}

								// drag right
								if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
									newMainScrollPos = newMainScrollPosition;
									if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
										newMainScrollPos = _startMainScrollPos.x;
									}
								} else {
									if (_currPanBounds.min.x !== _currPanBounds.max.x) {
										newPanPos = newOffset;
									}

								}

							} else {

								if (newOffset < _currPanBounds.max[axis]) {
									panFriction = _options.panEndFriction;
									overDiff = newOffset - _currPanBounds.max[axis];
									startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
								}

								if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
									newMainScrollPos = newMainScrollPosition;

									if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
										newMainScrollPos = _startMainScrollPos.x;
									}

								} else {
									if (_currPanBounds.min.x !== _currPanBounds.max.x) {
										newPanPos = newOffset;
									}
								}

							}


							//
						}

						if (axis === 'x') {

							if (newMainScrollPos !== undefined) {
								_moveMainScroll(newMainScrollPos, true);
								if (newMainScrollPos === _startMainScrollPos.x) {
									_mainScrollShifted = false;
								} else {
									_mainScrollShifted = true;
								}
							}

							if (_currPanBounds.min.x !== _currPanBounds.max.x) {
								if (newPanPos !== undefined) {
									_panOffset.x = newPanPos;
								} else if (!_mainScrollShifted) {
									_panOffset.x += delta.x * panFriction;
								}
							}

							return newMainScrollPos !== undefined;
						}

					}

					if (!_mainScrollAnimating) {

						if (!_mainScrollShifted) {
							if (_currZoomLevel > self.currItem.fitRatio) {
								_panOffset[axis] += delta[axis] * panFriction;

							}
						}


					}

				},

				// Pointerdown/touchstart/mousedown handler
				_onDragStart = function (e) {

					// Allow dragging only via left mouse button.
					// As this handler is not added in IE8 - we ignore e.which
					// 
					// http://www.quirksmode.org/js/events_properties.html
					// https://developer.mozilla.org/en-US/docs/Web/API/event.button
					if (e.type === 'mousedown' && e.button > 0) {
						return;
					}

					if (_initialZoomRunning) {
						e.preventDefault();
						return;
					}

					if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
						return;
					}

					if (_preventDefaultEventBehaviour(e, true)) {
						e.preventDefault();
					}



					_shout('pointerDown');

					if (_pointerEventEnabled) {
						var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
						if (pointerIndex < 0) {
							pointerIndex = _currPointers.length;
						}
						_currPointers[pointerIndex] = {
							x: e.pageX,
							y: e.pageY,
							id: e.pointerId
						};
					}



					var startPointsList = _getTouchPoints(e),
						numPoints = startPointsList.length;

					_currentPoints = null;

					_stopAllAnimations();

					// init drag
					if (!_isDragging || numPoints === 1) {



						_isDragging = _isFirstMove = true;
						framework.bind(window, _upMoveEvents, self);

						_isZoomingIn =
							_wasOverInitialZoom =
							_opacityChanged =
							_verticalDragInitiated =
							_mainScrollShifted =
							_moved =
							_isMultitouch =
							_zoomStarted = false;

						_direction = null;

						_shout('firstTouchStart', startPointsList);

						_equalizePoints(_startPanOffset, _panOffset);

						_currPanDist.x = _currPanDist.y = 0;
						_equalizePoints(_currPoint, startPointsList[0]);
						_equalizePoints(_startPoint, _currPoint);

						//_equalizePoints(_startMainScrollPos, _mainScrollPos);
						_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

						_posPoints = [{
							x: _currPoint.x,
							y: _currPoint.y
			}];

						_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

						//_mainScrollAnimationEnd(true);
						_calculatePanBounds(_currZoomLevel, true);

						// Start rendering
						_stopDragUpdateLoop();
						_dragUpdateLoop();

					}

					// init zoom
					if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
						_startZoomLevel = _currZoomLevel;
						_zoomStarted = false; // true if zoom changed at least once

						_isZooming = _isMultitouch = true;
						_currPanDist.y = _currPanDist.x = 0;

						_equalizePoints(_startPanOffset, _panOffset);

						_equalizePoints(p, startPointsList[0]);
						_equalizePoints(p2, startPointsList[1]);

						_findCenterOfPoints(p, p2, _currCenterPoint);

						_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
						_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
						_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
					}


				},

				// Pointermove/touchmove/mousemove handler
				_onDragMove = function (e) {

					e.preventDefault();

					if (_pointerEventEnabled) {
						var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
						if (pointerIndex > -1) {
							var p = _currPointers[pointerIndex];
							p.x = e.pageX;
							p.y = e.pageY;
						}
					}

					if (_isDragging) {
						var touchesList = _getTouchPoints(e);
						if (!_direction && !_moved && !_isZooming) {
							var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
							// check the direction of movement
							if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
								_direction = diff > 0 ? 'h' : 'v';
								_currentPoints = touchesList;
							}
						} else {
							_currentPoints = touchesList;
						}
					}
				},
				// 
				_renderMovement = function () {

					if (!_currentPoints) {
						return;
					}

					var numPoints = _currentPoints.length;

					if (numPoints === 0) {
						return;
					}

					_equalizePoints(p, _currentPoints[0]);

					delta.x = p.x - _currPoint.x;
					delta.y = p.y - _currPoint.y;

					if (_isZooming && numPoints > 1) {
						// Handle behaviour for more than 1 point

						_currPoint.x = p.x;
						_currPoint.y = p.y;

						// check if one of two points changed
						if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
							return;
						}

						_equalizePoints(p2, _currentPoints[1]);


						if (!_zoomStarted) {
							_zoomStarted = true;
							_shout('zoomGestureStarted');
						}

						// Distance between two points
						var pointsDistance = _calculatePointsDistance(p, p2);

						var zoomLevel = _calculateZoomLevel(pointsDistance);

						// slightly over the of initial zoom level
						if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
							_wasOverInitialZoom = true;
						}

						// Apply the friction if zoom level is out of the bounds
						var zoomFriction = 1,
							minZoomLevel = _getMinZoomLevel(),
							maxZoomLevel = _getMaxZoomLevel();

						if (zoomLevel < minZoomLevel) {

							if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
								// fade out background if zooming out
								var minusDiff = minZoomLevel - zoomLevel;
								var percent = 1 - minusDiff / (minZoomLevel / 1.2);

								_applyBgOpacity(percent);
								_shout('onPinchClose', percent);
								_opacityChanged = true;
							} else {
								zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
								if (zoomFriction > 1) {
									zoomFriction = 1;
								}
								zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
							}

						} else if (zoomLevel > maxZoomLevel) {
							// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
							zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
							if (zoomFriction > 1) {
								zoomFriction = 1;
							}
							zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
						}

						if (zoomFriction < 0) {
							zoomFriction = 0;
						}

						// distance between touch points after friction is applied
						_currPointsDistance = pointsDistance;

						// _centerPoint - The point in the middle of two pointers
						_findCenterOfPoints(p, p2, _centerPoint);

						// paning with two pointers pressed
						_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
						_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
						_equalizePoints(_currCenterPoint, _centerPoint);

						_panOffset.x = _calculatePanOffset('x', zoomLevel);
						_panOffset.y = _calculatePanOffset('y', zoomLevel);

						_isZoomingIn = zoomLevel > _currZoomLevel;
						_currZoomLevel = zoomLevel;
						_applyCurrentZoomPan();

					} else {

						// handle behaviour for one point (dragging or panning)

						if (!_direction) {
							return;
						}

						if (_isFirstMove) {
							_isFirstMove = false;

							// subtract drag distance that was used during the detection direction  

							if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
								delta.x -= _currentPoints[0].x - _startPoint.x;
							}

							if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
								delta.y -= _currentPoints[0].y - _startPoint.y;
							}
						}

						_currPoint.x = p.x;
						_currPoint.y = p.y;

						// do nothing if pointers position hasn't changed
						if (delta.x === 0 && delta.y === 0) {
							return;
						}

						if (_direction === 'v' && _options.closeOnVerticalDrag) {
							if (!_canPan()) {

								_currPanDist.y += delta.y;
								_panOffset.y += delta.y;

								var opacityRatio = _calculateVerticalDragOpacityRatio();

								_verticalDragInitiated = true;
								_shout('onVerticalDrag', opacityRatio);

								_applyBgOpacity(opacityRatio);
								_applyCurrentZoomPan();
								return;
							}
						}

						_pushPosPoint(_getCurrentTime(), p.x, p.y);

						_moved = true;
						_currPanBounds = self.currItem.bounds;

						var mainScrollChanged = _panOrMoveMainScroll('x', delta);
						if (!mainScrollChanged) {
							_panOrMoveMainScroll('y', delta);

							_roundPoint(_panOffset);
							_applyCurrentZoomPan();
						}

					}

				},

				// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
				_onDragRelease = function (e) {

					if (_features.isOldAndroid) {

						if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
							return;
						}

						// on Android (v4.1, 4.2, 4.3 & possibly older) 
						// ghost mousedown/up event isn't preventable via e.preventDefault,
						// which causes fake mousedown event
						// so we block mousedown/up for 600ms
						if (e.type.indexOf('touch') > -1) {
							clearTimeout(_oldAndroidTouchEndTimeout);
							_oldAndroidTouchEndTimeout = setTimeout(function () {
								_oldAndroidTouchEndTimeout = 0;
							}, 600);
						}

					}

					_shout('pointerUp');

					if (_preventDefaultEventBehaviour(e, false)) {
						e.preventDefault();
					}

					var releasePoint;

					if (_pointerEventEnabled) {
						var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

						if (pointerIndex > -1) {
							releasePoint = _currPointers.splice(pointerIndex, 1)[0];

							if (navigator.pointerEnabled) {
								releasePoint.type = e.pointerType || 'mouse';
							} else {
								var MSPOINTER_TYPES = {
									4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
									2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
									3: 'pen' // event.MSPOINTER_TYPE_PEN
								};
								releasePoint.type = MSPOINTER_TYPES[e.pointerType];

								if (!releasePoint.type) {
									releasePoint.type = e.pointerType || 'mouse';
								}
							}

						}
					}

					var touchList = _getTouchPoints(e),
						gestureType,
						numPoints = touchList.length;

					if (e.type === 'mouseup') {
						numPoints = 0;
					}

					// Do nothing if there were 3 touch points or more
					if (numPoints === 2) {
						_currentPoints = null;
						return true;
					}

					// if second pointer released
					if (numPoints === 1) {
						_equalizePoints(_startPoint, touchList[0]);
					}


					// pointer hasn't moved, send "tap release" point
					if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
						if (!releasePoint) {
							if (e.type === 'mouseup') {
								releasePoint = {
									x: e.pageX,
									y: e.pageY,
									type: 'mouse'
								};
							} else if (e.changedTouches && e.changedTouches[0]) {
								releasePoint = {
									x: e.changedTouches[0].pageX,
									y: e.changedTouches[0].pageY,
									type: 'touch'
								};
							}
						}

						_shout('touchRelease', e, releasePoint);
					}

					// Difference in time between releasing of two last touch points (zoom gesture)
					var releaseTimeDiff = -1;

					// Gesture completed, no pointers left
					if (numPoints === 0) {
						_isDragging = false;
						framework.unbind(window, _upMoveEvents, self);

						_stopDragUpdateLoop();

						if (_isZooming) {
							// Two points released at the same time
							releaseTimeDiff = 0;
						} else if (_lastReleaseTime !== -1) {
							releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
						}
					}
					_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

					if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
						gestureType = 'zoom';
					} else {
						gestureType = 'swipe';
					}

					if (_isZooming && numPoints < 2) {
						_isZooming = false;

						// Only second point released
						if (numPoints === 1) {
							gestureType = 'zoomPointerUp';
						}
						_shout('zoomGestureEnded');
					}

					_currentPoints = null;
					if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
						// nothing to animate
						return;
					}

					_stopAllAnimations();


					if (!_releaseAnimData) {
						_releaseAnimData = _initDragReleaseAnimationData();
					}

					_releaseAnimData.calculateSwipeSpeed('x');


					if (_verticalDragInitiated) {

						var opacityRatio = _calculateVerticalDragOpacityRatio();

						if (opacityRatio < 0.6) {
							self.close();
						} else {
							var initalPanY = _panOffset.y,
								initialBgOpacity = _bgOpacity;

							_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function (now) {

								_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

								_applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
								_applyCurrentZoomPan();
							});

							_shout('onVerticalDrag', 1);
						}

						return;
					}


					// main scroll 
					if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
						var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
						if (itemChanged) {
							return;
						}
						gestureType = 'zoomPointerUp';
					}

					// prevent zoom/pan animation when main scroll animation runs
					if (_mainScrollAnimating) {
						return;
					}

					// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
					if (gestureType !== 'swipe') {
						_completeZoomGesture();
						return;
					}

					// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
					if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
						_completePanGesture(_releaseAnimData);
					}
				},


				// Returns object with data about gesture
				// It's created only once and then reused
				_initDragReleaseAnimationData = function () {
					// temp local vars
					var lastFlickDuration,
						tempReleasePos;

					// s = this
					var s = {
						lastFlickOffset: {},
						lastFlickDist: {},
						lastFlickSpeed: {},
						slowDownRatio: {},
						slowDownRatioReverse: {},
						speedDecelerationRatio: {},
						speedDecelerationRatioAbs: {},
						distanceOffset: {},
						backAnimDestination: {},
						backAnimStarted: {},
						calculateSwipeSpeed: function (axis) {


							if (_posPoints.length > 1) {
								lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
								tempReleasePos = _posPoints[_posPoints.length - 2][axis];
							} else {
								lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
								tempReleasePos = _startPoint[axis];
							}
							s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
							s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
							if (s.lastFlickDist[axis] > 20) {
								s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
							} else {
								s.lastFlickSpeed[axis] = 0;
							}
							if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
								s.lastFlickSpeed[axis] = 0;
							}

							s.slowDownRatio[axis] = 0.95;
							s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
							s.speedDecelerationRatio[axis] = 1;
						},

						calculateOverBoundsAnimOffset: function (axis, speed) {
							if (!s.backAnimStarted[axis]) {

								if (_panOffset[axis] > _currPanBounds.min[axis]) {
									s.backAnimDestination[axis] = _currPanBounds.min[axis];

								} else if (_panOffset[axis] < _currPanBounds.max[axis]) {
									s.backAnimDestination[axis] = _currPanBounds.max[axis];
								}

								if (s.backAnimDestination[axis] !== undefined) {
									s.slowDownRatio[axis] = 0.7;
									s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
									if (s.speedDecelerationRatioAbs[axis] < 0.05) {

										s.lastFlickSpeed[axis] = 0;
										s.backAnimStarted[axis] = true;

										_animateProp('bounceZoomPan' + axis, _panOffset[axis],
											s.backAnimDestination[axis],
											speed || 300,
											framework.easing.sine.out,
											function (pos) {
												_panOffset[axis] = pos;
												_applyCurrentZoomPan();
											}
										);

									}
								}
							}
						},

						// Reduces the speed by slowDownRatio (per 10ms)
						calculateAnimOffset: function (axis) {
							if (!s.backAnimStarted[axis]) {
								s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
									s.slowDownRatioReverse[axis] -
									s.slowDownRatioReverse[axis] * s.timeDiff / 10);

								s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
								s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
								_panOffset[axis] += s.distanceOffset[axis];

							}
						},

						panAnimLoop: function () {
							if (_animations.zoomPan) {
								_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

								s.now = _getCurrentTime();
								s.timeDiff = s.now - s.lastNow;
								s.lastNow = s.now;

								s.calculateAnimOffset('x');
								s.calculateAnimOffset('y');

								_applyCurrentZoomPan();

								s.calculateOverBoundsAnimOffset('x');
								s.calculateOverBoundsAnimOffset('y');


								if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

									// round pan position
									_panOffset.x = Math.round(_panOffset.x);
									_panOffset.y = Math.round(_panOffset.y);
									_applyCurrentZoomPan();

									_stopAnimation('zoomPan');
									return;
								}
							}

						}
					};
					return s;
				},

				_completePanGesture = function (animData) {
					// calculate swipe speed for Y axis (paanning)
					animData.calculateSwipeSpeed('y');

					_currPanBounds = self.currItem.bounds;

					animData.backAnimDestination = {};
					animData.backAnimStarted = {};

					// Avoid acceleration animation if speed is too low
					if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
						animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

						// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
						animData.calculateOverBoundsAnimOffset('x');
						animData.calculateOverBoundsAnimOffset('y');
						return true;
					}

					// Animation loop that controls the acceleration after pan gesture ends
					_registerStartAnimation('zoomPan');
					animData.lastNow = _getCurrentTime();
					animData.panAnimLoop();
				},


				_finishSwipeMainScrollGesture = function (gestureType, _releaseAnimData) {
					var itemChanged;
					if (!_mainScrollAnimating) {
						_currZoomedItemIndex = _currentItemIndex;
					}



					var itemsDiff;

					if (gestureType === 'swipe') {
						var totalShiftDist = _currPoint.x - _startPoint.x,
							isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

						// if container is shifted for more than MIN_SWIPE_DISTANCE, 
						// and last flick gesture was in right direction
						if (totalShiftDist > MIN_SWIPE_DISTANCE &&
							(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
							// go to prev item
							itemsDiff = -1;
						} else if (totalShiftDist < -MIN_SWIPE_DISTANCE &&
							(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
							// go to next item
							itemsDiff = 1;
						}
					}

					var nextCircle;

					if (itemsDiff) {

						_currentItemIndex += itemsDiff;

						if (_currentItemIndex < 0) {
							_currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
							nextCircle = true;
						} else if (_currentItemIndex >= _getNumItems()) {
							_currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
							nextCircle = true;
						}

						if (!nextCircle || _options.loop) {
							_indexDiff += itemsDiff;
							_currPositionIndex -= itemsDiff;
							itemChanged = true;
						}



					}

					var animateToX = _slideSize.x * _currPositionIndex;
					var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
					var finishAnimDuration;


					if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
						// "return to current" duration, e.g. when dragging from slide 0 to -1
						finishAnimDuration = 333;
					} else {
						finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
							animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
							333;

						finishAnimDuration = Math.min(finishAnimDuration, 400);
						finishAnimDuration = Math.max(finishAnimDuration, 250);
					}

					if (_currZoomedItemIndex === _currentItemIndex) {
						itemChanged = false;
					}

					_mainScrollAnimating = true;

					_shout('mainScrollAnimStart');

					_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
						_moveMainScroll,
						function () {
							_stopAllAnimations();
							_mainScrollAnimating = false;
							_currZoomedItemIndex = -1;

							if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
								self.updateCurrItem();
							}

							_shout('mainScrollAnimComplete');
						}
					);

					if (itemChanged) {
						self.updateCurrItem(true);
					}

					return itemChanged;
				},

				_calculateZoomLevel = function (touchesDistance) {
					return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
				},

				// Resets zoom if it's out of bounds
				_completeZoomGesture = function () {
					var destZoomLevel = _currZoomLevel,
						minZoomLevel = _getMinZoomLevel(),
						maxZoomLevel = _getMaxZoomLevel();

					if (_currZoomLevel < minZoomLevel) {
						destZoomLevel = minZoomLevel;
					} else if (_currZoomLevel > maxZoomLevel) {
						destZoomLevel = maxZoomLevel;
					}

					var destOpacity = 1,
						onUpdate,
						initialOpacity = _bgOpacity;

					if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
						//_closedByScroll = true;
						self.close();
						return true;
					}

					if (_opacityChanged) {
						onUpdate = function (now) {

							_applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);

						};
					}

					self.zoomTo(destZoomLevel, 0, 300, framework.easing.cubic.out, onUpdate);
					return true;
				};


			_registerModule('Gestures', {
				publicMethods: {

					initGestures: function () {

						// helper function that builds touch/pointer/mouse events
						var addEventNames = function (pref, down, move, up, cancel) {
							_dragStartEvent = pref + down;
							_dragMoveEvent = pref + move;
							_dragEndEvent = pref + up;
							if (cancel) {
								_dragCancelEvent = pref + cancel;
							} else {
								_dragCancelEvent = '';
							}
						};

						_pointerEventEnabled = _features.pointerEvent;
						if (_pointerEventEnabled && _features.touch) {
							// we don't need touch events, if browser supports pointer events
							_features.touch = false;
						}

						if (_pointerEventEnabled) {
							if (navigator.pointerEnabled) {
								addEventNames('pointer', 'down', 'move', 'up', 'cancel');
							} else {
								// IE10 pointer events are case-sensitive
								addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
							}
						} else if (_features.touch) {
							addEventNames('touch', 'start', 'move', 'end', 'cancel');
							_likelyTouchDevice = true;
						} else {
							addEventNames('mouse', 'down', 'move', 'up');
						}

						_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
						_downEvents = _dragStartEvent;

						if (_pointerEventEnabled && !_likelyTouchDevice) {
							_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
						}
						// make variable public
						self.likelyTouchDevice = _likelyTouchDevice;

						_globalEventHandlers[_dragStartEvent] = _onDragStart;
						_globalEventHandlers[_dragMoveEvent] = _onDragMove;
						_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

						if (_dragCancelEvent) {
							_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
						}

						// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
						if (_features.touch) {
							_downEvents += ' mousedown';
							_upMoveEvents += ' mousemove mouseup';
							_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
							_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
							_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
						}

						if (!_likelyTouchDevice) {
							// don't allow pan to next slide from zoomed state on Desktop
							_options.allowPanToNext = false;
						}
					}

				}
			});


			/*>>gestures*/

			/*>>show-hide-transition*/
			/**
			 * show-hide-transition.js:
			 *
			 * Manages initial opening or closing transition.
			 *
			 * If you're not planning to use transition for gallery at all,
			 * you may set options hideAnimationDuration and showAnimationDuration to 0,
			 * and just delete startAnimation function.
			 *
			 */


			var _showOrHideTimeout,
				_showOrHide = function (item, img, out, completeFn) {

					if (_showOrHideTimeout) {
						clearTimeout(_showOrHideTimeout);
					}

					_initialZoomRunning = true;
					_initialContentSet = true;

					// dimensions of small thumbnail {x:,y:,w:}.
					// Height is optional, as calculated based on large image.
					var thumbBounds;
					if (item.initialLayout) {
						thumbBounds = item.initialLayout;
						item.initialLayout = null;
					} else {
						thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
					}

					var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

					var onComplete = function () {
						_stopAnimation('initialZoom');
						if (!out) {
							_applyBgOpacity(1);
							if (img) {
								img.style.display = 'block';
							}
							framework.addClass(template, 'pswp--animated-in');
							_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
						} else {
							self.template.removeAttribute('style');
							self.bg.removeAttribute('style');
						}

						if (completeFn) {
							completeFn();
						}
						_initialZoomRunning = false;
					};

					// if bounds aren't provided, just open gallery without animation
					if (!duration || !thumbBounds || thumbBounds.x === undefined) {

						var finishWithoutAnimation = function () {
							_shout('initialZoom' + (out ? 'Out' : 'In'));

							_currZoomLevel = item.initialZoomLevel;
							_equalizePoints(_panOffset, item.initialPosition);
							_applyCurrentZoomPan();

							// no transition
							template.style.opacity = out ? 0 : 1;
							_applyBgOpacity(1);

							onComplete();
						};
						finishWithoutAnimation();

						return;
					}

					var startAnimation = function () {
						var closeWithRaf = _closedByScroll,
							fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

						// apply hw-acceleration to image
						if (item.miniImg) {
							item.miniImg.style.webkitBackfaceVisibility = 'hidden';
						}

						if (!out) {
							_currZoomLevel = thumbBounds.w / item.w;
							_panOffset.x = thumbBounds.x;
							_panOffset.y = thumbBounds.y - _initalWindowScrollY;

							self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
							_applyCurrentZoomPan();
						}

						_registerStartAnimation('initialZoom');

						if (out && !closeWithRaf) {
							framework.removeClass(template, 'pswp--animated-in');
						}

						if (fadeEverything) {
							if (out) {
								framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
							} else {
								setTimeout(function () {
									framework.addClass(template, 'pswp--animate_opacity');
								}, 30);
							}
						}

						_showOrHideTimeout = setTimeout(function () {

							_shout('initialZoom' + (out ? 'Out' : 'In'));


							if (!out) {

								// "in" animation always uses CSS transitions (instead of rAF).
								// CSS transition work faster here, 
								// as developer may also want to animate other things, 
								// like ui on top of sliding area, which can be animated just via CSS

								_currZoomLevel = item.initialZoomLevel;
								_equalizePoints(_panOffset, item.initialPosition);
								_applyCurrentZoomPan();
								_applyBgOpacity(1);

								if (fadeEverything) {
									template.style.opacity = 1;
								} else {
									_applyBgOpacity(1);
								}

								_showOrHideTimeout = setTimeout(onComplete, duration + 20);
							} else {

								// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
								var destZoomLevel = thumbBounds.w / item.w,
									initialPanOffset = {
										x: _panOffset.x,
										y: _panOffset.y
									},
									initialZoomLevel = _currZoomLevel,
									initalBgOpacity = _bgOpacity,
									onUpdate = function (now) {

										if (now === 1) {
											_currZoomLevel = destZoomLevel;
											_panOffset.x = thumbBounds.x;
											_panOffset.y = thumbBounds.y - _currentWindowScrollY;
										} else {
											_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
											_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
											_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
										}

										_applyCurrentZoomPan();
										if (fadeEverything) {
											template.style.opacity = 1 - now;
										} else {
											_applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
										}
									};

								if (closeWithRaf) {
									_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
								} else {
									onUpdate(1);
									_showOrHideTimeout = setTimeout(onComplete, duration + 20);
								}
							}

						}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
						// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
						// Which avoids lag at the beginning of scale transition.
					};
					startAnimation();


				};

			/*>>show-hide-transition*/

			/*>>items-controller*/
			/**
			 *
			 * Controller manages gallery items, their dimensions, and their content.
			 *
			 */

			var _items,
				_tempPanAreaSize = {},
				_imagesToAppendPool = [],
				_initialContentSet,
				_initialZoomRunning,
				_controllerDefaultOptions = {
					index: 0,
					errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
					forceProgressiveLoading: false, // TODO
					preload: [1, 1],
					getNumItemsFn: function () {
						return _items.length;
					}
				};


			var _getItemAt,
				_getNumItems,
				_initialIsLoop,
				_getZeroBounds = function () {
					return {
						center: {
							x: 0,
							y: 0
						},
						max: {
							x: 0,
							y: 0
						},
						min: {
							x: 0,
							y: 0
						}
					};
				},
				_calculateSingleItemPanBounds = function (item, realPanElementW, realPanElementH) {
					var bounds = item.bounds;

					// position of element when it's centered
					bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
					bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

					// maximum pan position
					bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
						Math.round(_tempPanAreaSize.x - realPanElementW) :
						bounds.center.x;

					bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
						Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
						bounds.center.y;

					// minimum pan position
					bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
					bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
				},
				_calculateItemSize = function (item, viewportSize, zoomLevel) {

					if (item.src && !item.loadError) {
						var isInitial = !zoomLevel;

						if (isInitial) {
							if (!item.vGap) {
								item.vGap = {
									top: 0,
									bottom: 0
								};
							}
							// allows overriding vertical margin for individual items
							_shout('parseVerticalMargin', item);
						}


						_tempPanAreaSize.x = viewportSize.x;
						_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

						if (isInitial) {
							var hRatio = _tempPanAreaSize.x / item.w;
							var vRatio = _tempPanAreaSize.y / item.h;

							item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
							//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

							var scaleMode = _options.scaleMode;

							if (scaleMode === 'orig') {
								zoomLevel = 1;
							} else if (scaleMode === 'fit') {
								zoomLevel = item.fitRatio;
							}

							if (zoomLevel > 1) {
								zoomLevel = 1;
							}

							item.initialZoomLevel = zoomLevel;

							if (!item.bounds) {
								// reuse bounds object
								item.bounds = _getZeroBounds();
							}
						}

						if (!zoomLevel) {
							return;
						}

						_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

						if (isInitial && zoomLevel === item.initialZoomLevel) {
							item.initialPosition = item.bounds.center;
						}

						return item.bounds;
					} else {
						item.w = item.h = 0;
						item.initialZoomLevel = item.fitRatio = 1;
						item.bounds = _getZeroBounds();
						item.initialPosition = item.bounds.center;

						// if it's not image, we return zero bounds (content is not zoomable)
						return item.bounds;
					}
					return false;
				},




				_appendImage = function (index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


					if (item.loadError) {
						return;
					}

					var animate,
						isSwiping = self.isDragging() && !self.isZooming(),
						slideMightBeVisible = index === _currentItemIndex || self.isMainScrollAnimating() || isSwiping;

					// fade in loaded image only when current holder is active, or might be visible
					if (!preventAnimation && (_likelyTouchDevice || _options.alwaysFadeIn) && slideMightBeVisible) {
						animate = true;
					}

					if (img) {
						if (animate) {
							img.style.opacity = 0;
						}

						item.imageAppended = true;
						_setImageSize(img, item.w, item.h);

						baseDiv.appendChild(img);

						if (animate) {
							setTimeout(function () {
								img.style.opacity = 1;
								if (keepPlaceholder) {
									setTimeout(function () {
										// hide image placeholder "behind"
										if (item && item.loaded && item.placeholder) {
											item.placeholder.style.display = 'none';
											item.placeholder = null;
										}
									}, 500);
								}
							}, 50);
						}
					}
				},



				_preloadImage = function (item) {
					item.loading = true;
					item.loaded = false;
					var img = item.img = framework.createEl('pswp__img', 'img');
					var onComplete = function () {
						item.loading = false;
						item.loaded = true;

						if (item.loadComplete) {
							item.loadComplete(item);
						} else {
							item.img = null; // no need to store image object
						}
						img.onload = img.onerror = null;
						img = null;
					};
					img.onload = onComplete;
					img.onerror = function () {
						item.loadError = true;
						onComplete();
					};

					img.src = item.src; // + '?a=' + Math.random();

					return img;
				},
				_checkForError = function (item, cleanUp) {
					if (item.src && item.loadError && item.container) {

						if (cleanUp) {
							item.container.innerHTML = '';
						}

						item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
						return true;

					}
				},
				_setImageSize = function (img, w, h) {
					img.style.width = w + 'px';
					img.style.height = h + 'px';
				},
				_appendImagesPool = function () {

					if (_imagesToAppendPool.length) {
						var poolItem;

						for (var i = 0; i < _imagesToAppendPool.length; i++) {
							poolItem = _imagesToAppendPool[i];
							if (poolItem.holder.index === poolItem.index) {
								_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img);
							}
						}
						_imagesToAppendPool = [];
					}
				};



			_registerModule('Controller', {

				publicMethods: {

					lazyLoadItem: function (index) {
						index = _getLoopedId(index);
						var item = _getItemAt(index);

						if (!item || item.loaded || item.loading) {
							return;
						}

						_shout('gettingData', index, item);

						if (!item.src) {
							return;
						}

						_preloadImage(item);
					},
					initController: function () {
						framework.extend(_options, _controllerDefaultOptions, true);
						self.items = _items = items;
						_getItemAt = self.getItemAt;
						_getNumItems = _options.getNumItemsFn; //self.getNumItems;



						_initialIsLoop = _options.loop;
						if (_getNumItems() < 3) {
							_options.loop = false; // disable loop if less then 3 items
						}

						_listen('beforeChange', function (diff) {

							var p = _options.preload,
								isNext = diff === null ? true : (diff > 0),
								preloadBefore = Math.min(p[0], _getNumItems()),
								preloadAfter = Math.min(p[1], _getNumItems()),
								i;


							for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
								self.lazyLoadItem(_currentItemIndex + i);
							}
							for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
								self.lazyLoadItem(_currentItemIndex - i);
							}
						});

						_listen('initialLayout', function () {
							self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
						});

						_listen('mainScrollAnimComplete', _appendImagesPool);
						_listen('initialZoomInEnd', _appendImagesPool);



						_listen('destroy', function () {
							var item;
							for (var i = 0; i < _items.length; i++) {
								item = _items[i];
								// remove reference to DOM elements, for GC
								if (item.container) {
									item.container = null;
								}
								if (item.placeholder) {
									item.placeholder = null;
								}
								if (item.img) {
									item.img = null;
								}
								if (item.preloader) {
									item.preloader = null;
								}
								if (item.loadError) {
									item.loaded = item.loadError = false;
								}
							}
							_imagesToAppendPool = null;
						});
					},


					getItemAt: function (index) {
						if (index >= 0) {
							return _items[index] !== undefined ? _items[index] : false;
						}
						return false;
					},

					allowProgressiveImg: function () {
						// 1. Progressive image loading isn't working on webkit/blink 
						//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
						//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
						//    
						// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
						//    That's why it's disabled on touch devices (mainly because of swipe transition)
						//    
						// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

						// Don't allow progressive loading on non-large touch devices
						return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
						// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
					},

					setContent: function (holder, index) {

						if (_options.loop) {
							index = _getLoopedId(index);
						}

						var prevItem = self.getItemAt(holder.index);
						if (prevItem) {
							prevItem.container = null;
						}

						var item = self.getItemAt(index),
							img;

						if (!item) {
							holder.el.innerHTML = '';
							return;
						}

						// allow to override data
						_shout('gettingData', index, item);

						holder.index = index;
						holder.item = item;

						// base container DIV is created only once for each of 3 holders
						var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



						if (!item.src && item.html) {
							if (item.html.tagName) {
								baseDiv.appendChild(item.html);
							} else {
								baseDiv.innerHTML = item.html;
							}
						}

						_checkForError(item);

						if (item.src && !item.loadError && !item.loaded) {

							item.loadComplete = function (item) {

								// gallery closed before image finished loading
								if (!_isOpen) {
									return;
								}

								// Apply hw-acceleration only after image is loaded.
								// This is webkit progressive image loading bugfix.
								// https://bugs.webkit.org/show_bug.cgi?id=108630
								// https://code.google.com/p/chromium/issues/detail?id=404547
								if (item.img) {
									item.img.style.webkitBackfaceVisibility = 'hidden';
								}

								// check if holder hasn't changed while image was loading
								if (holder && holder.index === index) {
									if (_checkForError(item, true)) {
										item.loadComplete = item.img = null;
										_calculateItemSize(item, _viewportSize);
										_applyZoomPanToItem(item);

										if (holder.index === _currentItemIndex) {
											// recalculate dimensions
											self.updateCurrZoomItem();
										}
										return;
									}
									if (!item.imageAppended) {
										if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
											_imagesToAppendPool.push({
												item: item,
												baseDiv: baseDiv,
												img: item.img,
												index: index,
												holder: holder
											});
										} else {
											_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning);
										}
									} else {
										// remove preloader & mini-img
										if (!_initialZoomRunning && item.placeholder) {
											item.placeholder.style.display = 'none';
											item.placeholder = null;
										}
									}
								}

								item.loadComplete = null;
								item.img = null; // no need to store image element after it's added

								_shout('imageLoadComplete', index, item);
							};

							if (framework.features.transform) {

								var placeholderClassName = 'pswp__img pswp__img--placeholder';
								placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

								var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
								if (item.msrc) {
									placeholder.src = item.msrc;
								}

								_setImageSize(placeholder, item.w, item.h);

								baseDiv.appendChild(placeholder);
								item.placeholder = placeholder;

							}




							if (!item.loading) {
								_preloadImage(item);
							}


							if (self.allowProgressiveImg()) {
								// just append image
								if (!_initialContentSet && _features.transform) {
									_imagesToAppendPool.push({
										item: item,
										baseDiv: baseDiv,
										img: item.img,
										index: index,
										holder: holder
									});
								} else {
									_appendImage(index, item, baseDiv, item.img, true, true);
								}
							}

						} else if (item.src && !item.loadError) {
							// image object is created every time, due to bugs of image loading & delay when switching images
							img = framework.createEl('pswp__img', 'img');
							img.style.webkitBackfaceVisibility = 'hidden';
							img.style.opacity = 1;
							img.src = item.src;
							_setImageSize(img, item.w, item.h);
							_appendImage(index, item, baseDiv, img, true);
						}

						_calculateItemSize(item, _viewportSize);

						if (!_initialContentSet && index === _currentItemIndex) {
							_currZoomElementStyle = baseDiv.style;
							_showOrHide(item, (img || item.img));
						} else {
							_applyZoomPanToItem(item);
						}

						holder.el.innerHTML = '';
						holder.el.appendChild(baseDiv);
					},

					cleanSlide: function (item) {
						if (item.img) {
							item.img.onload = item.img.onerror = null;
						}
						item.loaded = item.loading = item.img = item.imageAppended = false;
					}

				}
			});

			/*>>items-controller*/

			/*>>tap*/
			/**
			 * tap.js:
			 *
			 * Displatches tap and double-tap events.
			 *
			 */

			var tapTimer,
				tapReleasePoint = {},
				_dispatchTapEvent = function (origEvent, releasePoint, pointerType) {
					var e = document.createEvent('CustomEvent'),
						eDetail = {
							origEvent: origEvent,
							target: origEvent.target,
							releasePoint: releasePoint,
							pointerType: pointerType || 'touch'
						};

					e.initCustomEvent('pswpTap', true, true, eDetail);
					origEvent.target.dispatchEvent(e);
				};

			_registerModule('Tap', {
				publicMethods: {
					initTap: function () {
						_listen('firstTouchStart', self.onTapStart);
						_listen('touchRelease', self.onTapRelease);
						_listen('destroy', function () {
							tapReleasePoint = {};
							tapTimer = null;
						});
					},
					onTapStart: function (touchList) {
						if (touchList.length > 1) {
							clearTimeout(tapTimer);
							tapTimer = null;
						}
					},
					onTapRelease: function (e, releasePoint) {
						if (!releasePoint) {
							return;
						}

						if (!_moved && !_isMultitouch && !_numAnimations) {
							var p0 = releasePoint;
							if (tapTimer) {
								clearTimeout(tapTimer);
								tapTimer = null;

								// Check if taped on the same place
								if (_isNearbyPoints(p0, tapReleasePoint)) {
									_shout('doubleTap', p0);
									return;
								}
							}

							if (releasePoint.type === 'mouse') {
								_dispatchTapEvent(e, releasePoint, 'mouse');
								return;
							}

							var clickedTagName = e.target.tagName.toUpperCase();
							// avoid double tap delay on buttons and elements that have class pswp__single-tap
							if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
								_dispatchTapEvent(e, releasePoint);
								return;
							}

							_equalizePoints(tapReleasePoint, p0);

							tapTimer = setTimeout(function () {
								_dispatchTapEvent(e, releasePoint);
								tapTimer = null;
							}, 300);
						}
					}
				}
			});

			/*>>tap*/

			/*>>desktop-zoom*/
			/**
			 *
			 * desktop-zoom.js:
			 *
			 * - Binds mousewheel event for paning zoomed image.
			 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
			 *   (which are used for cursors and zoom icon)
			 * - Adds toggleDesktopZoom function.
			 *
			 */

			var _wheelDelta;

			_registerModule('DesktopZoom', {

				publicMethods: {

					initDesktopZoom: function () {

						if (_oldIE) {
							// no zoom for old IE (<=8)
							return;
						}

						if (_likelyTouchDevice) {
							// if detected hardware touch support, we wait until mouse is used,
							// and only then apply desktop-zoom features
							_listen('mouseUsed', function () {
								self.setupDesktopZoom();
							});
						} else {
							self.setupDesktopZoom(true);
						}

					},

					setupDesktopZoom: function (onInit) {

						_wheelDelta = {};

						var events = 'wheel mousewheel DOMMouseScroll';

						_listen('bindEvents', function () {
							framework.bind(template, events, self.handleMouseWheel);
						});

						_listen('unbindEvents', function () {
							if (_wheelDelta) {
								framework.unbind(template, events, self.handleMouseWheel);
							}
						});

						self.mouseZoomedIn = false;

						var hasDraggingClass,
							updateZoomable = function () {
								if (self.mouseZoomedIn) {
									framework.removeClass(template, 'pswp--zoomed-in');
									self.mouseZoomedIn = false;
								}
								if (_currZoomLevel < 1) {
									framework.addClass(template, 'pswp--zoom-allowed');
								} else {
									framework.removeClass(template, 'pswp--zoom-allowed');
								}
								removeDraggingClass();
							},
							removeDraggingClass = function () {
								if (hasDraggingClass) {
									framework.removeClass(template, 'pswp--dragging');
									hasDraggingClass = false;
								}
							};

						_listen('resize', updateZoomable);
						_listen('afterChange', updateZoomable);
						_listen('pointerDown', function () {
							if (self.mouseZoomedIn) {
								hasDraggingClass = true;
								framework.addClass(template, 'pswp--dragging');
							}
						});
						_listen('pointerUp', removeDraggingClass);

						if (!onInit) {
							updateZoomable();
						}

					},

					handleMouseWheel: function (e) {

						if (_currZoomLevel <= self.currItem.fitRatio) {
							if (!_options.closeOnScroll) {
								e.preventDefault();
							} else {

								// close PhotoSwipe
								// if browser supports transforms & scroll changed enough
								if (_transformKey && Math.abs(e.deltaY) > 2) {
									_closedByScroll = true;
									self.close();
								}

							}
							return true;
						}

						e.preventDefault();
						// allow just one event to fire
						e.stopPropagation();

						// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
						_wheelDelta.x = 0;

						if ('deltaX' in e) {
							if (e.deltaMode === 1 /* DOM_DELTA_LINE */ ) {
								// 18 - average line height
								_wheelDelta.x = e.deltaX * 18;
								_wheelDelta.y = e.deltaY * 18;
							} else {
								_wheelDelta.x = e.deltaX;
								_wheelDelta.y = e.deltaY;
							}
						} else if ('wheelDelta' in e) {
							if (e.wheelDeltaX) {
								_wheelDelta.x = -0.16 * e.wheelDeltaX;
							}
							if (e.wheelDeltaY) {
								_wheelDelta.y = -0.16 * e.wheelDeltaY;
							} else {
								_wheelDelta.y = -0.16 * e.wheelDelta;
							}
						} else if ('detail' in e) {
							_wheelDelta.y = e.detail;
						} else {
							return;
						}

						// TODO: use rAF instead of mousewheel?
						_calculatePanBounds(_currZoomLevel, true);
						self.panTo(_panOffset.x - _wheelDelta.x, _panOffset.y - _wheelDelta.y);
					},

					toggleDesktopZoom: function (centerPoint) {
						centerPoint = centerPoint || {
							x: _viewportSize.x / 2,
							y: _viewportSize.y / 2 + _currentWindowScrollY
						};

						var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
						var zoomOut = _currZoomLevel === doubleTapZoomLevel;

						self.mouseZoomedIn = !zoomOut;

						self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
						framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
					}

				}
			});

			/*>>desktop-zoom*/

			/*>>history*/
			/**
			 *
			 * history.js:
			 *
			 * - Back button to close gallery.
			 *
			 * - Unique URL for each slide: example.com/&pid=1&gid=3
			 *   (where PID is picture index, and GID and gallery index)
			 *
			 * - Switch URL when slides change.
			 *
			 */


			var _historyDefaultOptions = {
				history: true,
				galleryUID: 1
			};

			var _historyUpdateTimeout,
				_hashChangeTimeout,
				_hashAnimCheckTimeout,
				_hashChangedByScript,
				_hashChangedByHistory,
				_hashReseted,
				_initialHash,
				_historyChanged,
				_closedFromURL,
				_urlChangedOnce,
				_windowLoc,

				_supportsPushState,

				_getHash = function () {
					return _windowLoc.hash.substring(1);
				},
				_cleanHistoryTimeouts = function () {

					if (_historyUpdateTimeout) {
						clearTimeout(_historyUpdateTimeout);
					}

					if (_hashAnimCheckTimeout) {
						clearTimeout(_hashAnimCheckTimeout);
					}
				},

				// pid - Picture index
				// gid - Gallery index
				_parseItemIndexFromURL = function () {
					var hash = _getHash(),
						params = {};

					if (hash.length < 5) { // pid=1
						return params;
					}

					var vars = hash.split('&');
					for (var i = 0; i < vars.length; i++) {
						if (!vars[i]) {
							continue;
						}
						var pair = vars[i].split('=');
						if (pair.length < 2) {
							continue;
						}
						params[pair[0]] = pair[1];
					}
					params.pid = parseInt(params.pid, 10) - 1;
					if (params.pid < 0) {
						params.pid = 0;
					}
					return params;
				},
				_updateHash = function () {

					if (_hashAnimCheckTimeout) {
						clearTimeout(_hashAnimCheckTimeout);
					}


					if (_numAnimations || _isDragging) {
						// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
						// that's why we update hash only when no animations running
						_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
						return;
					}

					if (_hashChangedByScript) {
						clearTimeout(_hashChangeTimeout);
					} else {
						_hashChangedByScript = true;
					}


					var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + (_currentItemIndex + 1);

					if (!_historyChanged) {
						if (_windowLoc.hash.indexOf(newHash) === -1) {
							_urlChangedOnce = true;
						}
						// first time - add new hisory record, then just replace
					}

					var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

					if (_supportsPushState) {

						if ('#' + newHash !== window.location.hash) {
							history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
						}

					} else {
						if (_historyChanged) {
							_windowLoc.replace(newURL);
						} else {
							_windowLoc.hash = newHash;
						}
					}



					_historyChanged = true;
					_hashChangeTimeout = setTimeout(function () {
						_hashChangedByScript = false;
					}, 60);
				};





			_registerModule('History', {



				publicMethods: {
					initHistory: function () {

						framework.extend(_options, _historyDefaultOptions, true);

						if (!_options.history) {
							return;
						}


						_windowLoc = window.location;
						_urlChangedOnce = false;
						_closedFromURL = false;
						_historyChanged = false;
						_initialHash = _getHash();
						_supportsPushState = ('pushState' in history);


						if (_initialHash.indexOf('gid=') > -1) {
							_initialHash = _initialHash.split('&gid=')[0];
							_initialHash = _initialHash.split('?gid=')[0];
						}


						_listen('afterChange', self.updateURL);
						_listen('unbindEvents', function () {
							framework.unbind(window, 'hashchange', self.onHashChange);
						});


						var returnToOriginal = function () {
							_hashReseted = true;
							if (!_closedFromURL) {

								if (_urlChangedOnce) {
									history.back();
								} else {

									if (_initialHash) {
										_windowLoc.hash = _initialHash;
									} else {
										if (_supportsPushState) {

											// remove hash from url without refreshing it or scrolling to top
											history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
										} else {
											_windowLoc.hash = '';
										}
									}
								}

							}

							_cleanHistoryTimeouts();
						};


						_listen('unbindEvents', function () {
							if (_closedByScroll) {
								// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
								// this is done to keep the scroll position
								returnToOriginal();
							}
						});
						_listen('destroy', function () {
							if (!_hashReseted) {
								returnToOriginal();
							}
						});
						_listen('firstUpdate', function () {
							_currentItemIndex = _parseItemIndexFromURL().pid;
						});




						var index = _initialHash.indexOf('pid=');
						if (index > -1) {
							_initialHash = _initialHash.substring(0, index);
							if (_initialHash.slice(-1) === '&') {
								_initialHash = _initialHash.slice(0, -1);
							}
						}


						setTimeout(function () {
							if (_isOpen) { // hasn't destroyed yet
								framework.bind(window, 'hashchange', self.onHashChange);
							}
						}, 40);

					},
					onHashChange: function () {

						if (_getHash() === _initialHash) {

							_closedFromURL = true;
							self.close();
							return;
						}
						if (!_hashChangedByScript) {

							_hashChangedByHistory = true;
							self.goTo(_parseItemIndexFromURL().pid);
							_hashChangedByHistory = false;
						}

					},
					updateURL: function () {

						// Delay the update of URL, to avoid lag during transition, 
						// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

						_cleanHistoryTimeouts();


						if (_hashChangedByHistory) {
							return;
						}

						if (!_historyChanged) {
							_updateHash(); // first time
						} else {
							_historyUpdateTimeout = setTimeout(_updateHash, 800);
						}
					}

				}
			});

			/*>>history*/
			framework.extend(self, publicMethods);
		};
		return PhotoSwipe;
	});
	/*! PhotoSwipe Default UI - 4.0.7 - 2015-03-18
	 * http://photoswipe.com
	 * Copyright (c) 2015 Dmitry Semenov; */
	/**
	 *
	 * UI on top of main sliding area (caption, arrows, close button, etc.).
	 * Built just using public methods/properties of PhotoSwipe.
	 *
	 */
	(function (root, factory) {
		if (typeof define === 'function' && define.amd) {
			define(factory);
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.PhotoSwipeUI_Default = factory();
		}
	})(this, function () {

		'use strict';



		var PhotoSwipeUI_Default =
			function (pswp, framework) {

				var ui = this;
				var _overlayUIUpdated = false,
					_controlsVisible = true,
					_fullscrenAPI,
					_controls,
					_captionContainer,
					_fakeCaptionContainer,
					_indexIndicator,
					_shareButton,
					_shareModal,
					_shareModalHidden = true,
					_initalCloseOnScrollValue,
					_isIdle,
					_listen,

					_loadingIndicator,
					_loadingIndicatorHidden,
					_loadingIndicatorTimeout,

					_galleryHasOneSlide,

					_options,
					_defaultUIOptions = {
						barsSize: {
							top: 44,
							bottom: 'auto'
						},
						closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
						timeToIdle: 4000,
						timeToIdleOutside: 1000,
						loadingIndicatorDelay: 1000, // 2s

						addCaptionHTMLFn: function (item, captionEl /*, isFake */ ) {
							if (!item.title) {
								captionEl.children[0].innerHTML = '';
								return false;
							}
							captionEl.children[0].innerHTML = item.title;
							return true;
						},

						closeEl: true,
						captionEl: true,
						fullscreenEl: true,
						zoomEl: true,
						shareEl: true,
						counterEl: true,
						arrowEl: true,
						preloaderEl: true,

						tapToClose: false,
						tapToToggleControls: true,

						clickToCloseNonZoomable: true,

						shareButtons: [
							{
								id: 'facebook',
								label: 'Share on Facebook',
								url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
							},
							{
								id: 'twitter',
								label: 'Tweet',
								url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
							},
							{
								id: 'pinterest',
								label: 'Pin it',
								url: 'http://www.pinterest.com/pin/create/button/' +
									'?url={{url}}&media={{image_url}}&description={{text}}'
							},
							{
								id: 'download',
								label: 'Download image',
								url: '{{raw_image_url}}',
								download: true
							}
			],
						getImageURLForShare: function ( /* shareButtonData */ ) {
							return pswp.currItem.src || '';
						},
						getPageURLForShare: function ( /* shareButtonData */ ) {
							return window.location.href;
						},
						getTextForShare: function ( /* shareButtonData */ ) {
							return pswp.currItem.title || '';
						},

						indexIndicatorSep: ' / '

					},
					_blockControlsTap,
					_blockControlsTapTimeout;



				var _onControlsTap = function (e) {
						if (_blockControlsTap) {
							return true;
						}


						e = e || window.event;

						if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
							// reset idle timer
							_onIdleMouseMove();
						}


						var target = e.target || e.srcElement,
							uiElement,
							clickedClass = target.className,
							found;

						for (var i = 0; i < _uiElements.length; i++) {
							uiElement = _uiElements[i];
							if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
								uiElement.onTap();
								found = true;

							}
						}

						if (found) {
							if (e.stopPropagation) {
								e.stopPropagation();
							}
							_blockControlsTap = true;

							// Some versions of Android don't prevent ghost click event 
							// when preventDefault() was called on touchstart and/or touchend.
							// 
							// This happens on v4.3, 4.2, 4.1, 
							// older versions strangely work correctly, 
							// but just in case we add delay on all of them)	
							var tapDelay = framework.features.isOldAndroid ? 600 : 30;
							_blockControlsTapTimeout = setTimeout(function () {
								_blockControlsTap = false;
							}, tapDelay);
						}

					},
					_fitControlsInViewport = function () {
						return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
					},
					_togglePswpClass = function (el, cName, add) {
						framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
					},

					// add class when there is just one item in the gallery
					// (by default it hides left/right arrows and 1ofX counter)
					_countNumItems = function () {
						var hasOneSlide = (_options.getNumItemsFn() === 1);

						if (hasOneSlide !== _galleryHasOneSlide) {
							_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
							_galleryHasOneSlide = hasOneSlide;
						}
					},
					_toggleShareModalClass = function () {
						_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
					},
					_toggleShareModal = function () {

						_shareModalHidden = !_shareModalHidden;


						if (!_shareModalHidden) {
							_toggleShareModalClass();
							setTimeout(function () {
								if (!_shareModalHidden) {
									framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
								}
							}, 30);
						} else {
							framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
							setTimeout(function () {
								if (_shareModalHidden) {
									_toggleShareModalClass();
								}
							}, 300);
						}

						if (!_shareModalHidden) {
							_updateShareURLs();
						}
						return false;
					},

					_openWindowPopup = function (e) {
						e = e || window.event;
						var target = e.target || e.srcElement;

						pswp.shout('shareLinkClick', e, target);

						if (!target.href) {
							return false;
						}

						if (target.hasAttribute('download')) {
							return true;
						}

						window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' +
							'location=yes,width=550,height=420,top=100,left=' +
							(window.screen ? Math.round(screen.width / 2 - 275) : 100));

						if (!_shareModalHidden) {
							_toggleShareModal();
						}

						return false;
					},
					_updateShareURLs = function () {
						var shareButtonOut = '',
							shareButtonData,
							shareURL,
							image_url,
							page_url,
							share_text;

						for (var i = 0; i < _options.shareButtons.length; i++) {
							shareButtonData = _options.shareButtons[i];

							image_url = _options.getImageURLForShare(shareButtonData);
							page_url = _options.getPageURLForShare(shareButtonData);
							share_text = _options.getTextForShare(shareButtonData);

							shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url))
								.replace('{{image_url}}', encodeURIComponent(image_url))
								.replace('{{raw_image_url}}', image_url)
								.replace('{{text}}', encodeURIComponent(share_text));

							shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' +
								'class="pswp__share--' + shareButtonData.id + '"' +
								(shareButtonData.download ? 'download' : '') + '>' +
								shareButtonData.label + '</a>';

							if (_options.parseShareButtonOut) {
								shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
							}
						}
						_shareModal.children[0].innerHTML = shareButtonOut;
						_shareModal.children[0].onclick = _openWindowPopup;

					},
					_hasCloseClass = function (target) {
						for (var i = 0; i < _options.closeElClasses.length; i++) {
							if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
								return true;
							}
						}
					},
					_idleInterval,
					_idleTimer,
					_idleIncrement = 0,
					_onIdleMouseMove = function () {
						clearTimeout(_idleTimer);
						_idleIncrement = 0;
						if (_isIdle) {
							ui.setIdle(false);
						}
					},
					_onMouseLeaveWindow = function (e) {
						e = e ? e : window.event;
						var from = e.relatedTarget || e.toElement;
						if (!from || from.nodeName === 'HTML') {
							clearTimeout(_idleTimer);
							_idleTimer = setTimeout(function () {
								ui.setIdle(true);
							}, _options.timeToIdleOutside);
						}
					},
					_setupFullscreenAPI = function () {
						if (_options.fullscreenEl) {
							if (!_fullscrenAPI) {
								_fullscrenAPI = ui.getFullscreenAPI();
							}
							if (_fullscrenAPI) {
								framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
								ui.updateFullscreen();
								framework.addClass(pswp.template, 'pswp--supports-fs');
							} else {
								framework.removeClass(pswp.template, 'pswp--supports-fs');
							}
						}
					},
					_setupLoadingIndicator = function () {
						// Setup loading indicator
						if (_options.preloaderEl) {

							_toggleLoadingIndicator(true);

							_listen('beforeChange', function () {

								clearTimeout(_loadingIndicatorTimeout);

								// display loading indicator with delay
								_loadingIndicatorTimeout = setTimeout(function () {

									if (pswp.currItem && pswp.currItem.loading) {

										if (!pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)) {
											// show preloader if progressive loading is not enabled, 
											// or image width is not defined yet (because of slow connection)
											_toggleLoadingIndicator(false);
											// items-controller.js function allowProgressiveImg
										}

									} else {
										_toggleLoadingIndicator(true); // hide preloader
									}

								}, _options.loadingIndicatorDelay);

							});
							_listen('imageLoadComplete', function (index, item) {
								if (pswp.currItem === item) {
									_toggleLoadingIndicator(true);
								}
							});

						}
					},
					_toggleLoadingIndicator = function (hide) {
						if (_loadingIndicatorHidden !== hide) {
							_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
							_loadingIndicatorHidden = hide;
						}
					},
					_applyNavBarGaps = function (item) {
						var gap = item.vGap;

						if (_fitControlsInViewport()) {

							var bars = _options.barsSize;
							if (_options.captionEl && bars.bottom === 'auto') {
								if (!_fakeCaptionContainer) {
									_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
									_fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));
									_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
									framework.addClass(_controls, 'pswp__ui--fit');
								}
								if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {

									var captionSize = _fakeCaptionContainer.clientHeight;
									gap.bottom = parseInt(captionSize, 10) || 44;
								} else {
									gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
								}
							} else {
								gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
							}

							// height of top bar is static, no need to calculate it
							gap.top = bars.top;
						} else {
							gap.top = gap.bottom = 0;
						}
					},
					_setupIdle = function () {
						// Hide controls when mouse is used
						if (_options.timeToIdle) {
							_listen('mouseUsed', function () {

								framework.bind(document, 'mousemove', _onIdleMouseMove);
								framework.bind(document, 'mouseout', _onMouseLeaveWindow);

								_idleInterval = setInterval(function () {
									_idleIncrement++;
									if (_idleIncrement === 2) {
										ui.setIdle(true);
									}
								}, _options.timeToIdle / 2);
							});
						}
					},
					_setupHidingControlsDuringGestures = function () {

						// Hide controls on vertical drag
						_listen('onVerticalDrag', function (now) {
							if (_controlsVisible && now < 0.95) {
								ui.hideControls();
							} else if (!_controlsVisible && now >= 0.95) {
								ui.showControls();
							}
						});

						// Hide controls when pinching to close
						var pinchControlsHidden;
						_listen('onPinchClose', function (now) {
							if (_controlsVisible && now < 0.9) {
								ui.hideControls();
								pinchControlsHidden = true;
							} else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
								ui.showControls();
							}
						});

						_listen('zoomGestureEnded', function () {
							pinchControlsHidden = false;
							if (pinchControlsHidden && !_controlsVisible) {
								ui.showControls();
							}
						});

					};



				var _uiElements = [
					{
						name: 'caption',
						option: 'captionEl',
						onInit: function (el) {
							_captionContainer = el;
						}
		},
					{
						name: 'share-modal',
						option: 'shareEl',
						onInit: function (el) {
							_shareModal = el;
						},
						onTap: function () {
							_toggleShareModal();
						}
		},
					{
						name: 'button--share',
						option: 'shareEl',
						onInit: function (el) {
							_shareButton = el;
						},
						onTap: function () {
							_toggleShareModal();
						}
		},
					{
						name: 'button--zoom',
						option: 'zoomEl',
						onTap: pswp.toggleDesktopZoom
		},
					{
						name: 'counter',
						option: 'counterEl',
						onInit: function (el) {
							_indexIndicator = el;
						}
		},
					{
						name: 'button--close',
						option: 'closeEl',
						onTap: pswp.close
		},
					{
						name: 'button--arrow--left',
						option: 'arrowEl',
						onTap: pswp.prev
		},
					{
						name: 'button--arrow--right',
						option: 'arrowEl',
						onTap: pswp.next
		},
					{
						name: 'button--fs',
						option: 'fullscreenEl',
						onTap: function () {
							if (_fullscrenAPI.isFullscreen()) {
								_fullscrenAPI.exit();
							} else {
								_fullscrenAPI.enter();
							}
						}
		},
					{
						name: 'preloader',
						option: 'preloaderEl',
						onInit: function (el) {
							_loadingIndicator = el;
						}
		}

	];

				var _setupUIElements = function () {
					var item,
						classAttr,
						uiElement;

					var loopThroughChildElements = function (sChildren) {
						if (!sChildren) {
							return;
						}

						var l = sChildren.length;
						for (var i = 0; i < l; i++) {
							item = sChildren[i];
							classAttr = item.className;

							for (var a = 0; a < _uiElements.length; a++) {
								uiElement = _uiElements[a];

								if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {

									if (_options[uiElement.option]) { // if element is not disabled from options

										framework.removeClass(item, 'pswp__element--disabled');
										if (uiElement.onInit) {
											uiElement.onInit(item);
										}

										//item.style.display = 'block';
									} else {
										framework.addClass(item, 'pswp__element--disabled');
										//item.style.display = 'none';
									}
								}
							}
						}
					};
					loopThroughChildElements(_controls.children);

					var topBar = framework.getChildByClass(_controls, 'pswp__top-bar');
					if (topBar) {
						loopThroughChildElements(topBar.children);
					}
				};




				ui.init = function () {

					// extend options
					framework.extend(pswp.options, _defaultUIOptions, true);

					// create local link for fast access
					_options = pswp.options;

					// find pswp__ui element
					_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

					// create local link
					_listen = pswp.listen;


					_setupHidingControlsDuringGestures();

					// update controls when slides change
					_listen('beforeChange', ui.update);

					// toggle zoom on double-tap
					_listen('doubleTap', function (point) {
						var initialZoomLevel = pswp.currItem.initialZoomLevel;
						if (pswp.getZoomLevel() !== initialZoomLevel) {
							pswp.zoomTo(initialZoomLevel, point, 333);
						} else {
							pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
						}
					});

					// Allow text selection in caption
					_listen('preventDragEvent', function (e, isDown, preventObj) {
						var t = e.target || e.srcElement;
						if (
							t &&
							t.className && e.type.indexOf('mouse') > -1 &&
							(t.className.indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName))
						) {
							preventObj.prevent = false;
						}
					});

					// bind events for UI
					_listen('bindEvents', function () {
						framework.bind(_controls, 'pswpTap click', _onControlsTap);
						framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

						if (!pswp.likelyTouchDevice) {
							framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
						}
					});

					// unbind events for UI
					_listen('unbindEvents', function () {
						if (!_shareModalHidden) {
							_toggleShareModal();
						}

						if (_idleInterval) {
							clearInterval(_idleInterval);
						}
						framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
						framework.unbind(document, 'mousemove', _onIdleMouseMove);
						framework.unbind(_controls, 'pswpTap click', _onControlsTap);
						framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
						framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

						if (_fullscrenAPI) {
							framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
							if (_fullscrenAPI.isFullscreen()) {
								_options.hideAnimationDuration = 0;
								_fullscrenAPI.exit();
							}
							_fullscrenAPI = null;
						}
					});


					// clean up things when gallery is destroyed
					_listen('destroy', function () {
						if (_options.captionEl) {
							if (_fakeCaptionContainer) {
								_controls.removeChild(_fakeCaptionContainer);
							}
							framework.removeClass(_captionContainer, 'pswp__caption--empty');
						}

						if (_shareModal) {
							_shareModal.children[0].onclick = null;
						}
						framework.removeClass(_controls, 'pswp__ui--over-close');
						framework.addClass(_controls, 'pswp__ui--hidden');
						ui.setIdle(false);
					});


					if (!_options.showAnimationDuration) {
						framework.removeClass(_controls, 'pswp__ui--hidden');
					}
					_listen('initialZoomIn', function () {
						if (_options.showAnimationDuration) {
							framework.removeClass(_controls, 'pswp__ui--hidden');
						}
					});
					_listen('initialZoomOut', function () {
						framework.addClass(_controls, 'pswp__ui--hidden');
					});

					_listen('parseVerticalMargin', _applyNavBarGaps);

					_setupUIElements();

					if (_options.shareEl && _shareButton && _shareModal) {
						_shareModalHidden = true;
					}

					_countNumItems();

					_setupIdle();

					_setupFullscreenAPI();

					_setupLoadingIndicator();
				};

				ui.setIdle = function (isIdle) {
					_isIdle = isIdle;
					_togglePswpClass(_controls, 'ui--idle', isIdle);
				};

				ui.update = function () {
					// Don't update UI if it's hidden
					if (_controlsVisible && pswp.currItem) {

						ui.updateIndexIndicator();

						if (_options.captionEl) {
							_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

							_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
						}

						_overlayUIUpdated = true;

					} else {
						_overlayUIUpdated = false;
					}

					if (!_shareModalHidden) {
						_toggleShareModal();
					}

					_countNumItems();
				};

				ui.updateFullscreen = function (e) {

					if (e) {
						// some browsers change window scroll position during the fullscreen
						// so PhotoSwipe updates it just in case
						setTimeout(function () {
							pswp.setScrollOffset(0, framework.getScrollY());
						}, 50);
					}

					// toogle pswp--fs class on root element
					framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
				};

				ui.updateIndexIndicator = function () {
					if (_options.counterEl) {
						_indexIndicator.innerHTML = (pswp.getCurrentIndex() + 1) +
							_options.indexIndicatorSep +
							_options.getNumItemsFn();
					}
				};

				ui.onGlobalTap = function (e) {
					e = e || window.event;
					var target = e.target || e.srcElement;

					if (_blockControlsTap) {
						return;
					}

					if (e.detail && e.detail.pointerType === 'mouse') {

						// close gallery if clicked outside of the image
						if (_hasCloseClass(target)) {
							pswp.close();
							return;
						}

						if (framework.hasClass(target, 'pswp__img')) {
							if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
								if (_options.clickToCloseNonZoomable) {
									pswp.close();
								}
							} else {
								pswp.toggleDesktopZoom(e.detail.releasePoint);
							}
						}

					} else {

						// tap anywhere (except buttons) to toggle visibility of controls
						if (_options.tapToToggleControls) {
							if (_controlsVisible) {
								ui.hideControls();
							} else {
								ui.showControls();
							}
						}

						// tap to close gallery
						if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
							pswp.close();
							return;
						}

					}
				};
				ui.onMouseOver = function (e) {
					e = e || window.event;
					var target = e.target || e.srcElement;

					// add class when mouse is over an element that should close the gallery
					_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
				};

				ui.hideControls = function () {
					framework.addClass(_controls, 'pswp__ui--hidden');
					_controlsVisible = false;
				};

				ui.showControls = function () {
					_controlsVisible = true;
					if (!_overlayUIUpdated) {
						ui.update();
					}
					framework.removeClass(_controls, 'pswp__ui--hidden');
				};

				ui.supportsFullscreen = function () {
					var d = document;
					return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
				};

				ui.getFullscreenAPI = function () {
					var dE = document.documentElement,
						api,
						tF = 'fullscreenchange';

					if (dE.requestFullscreen) {
						api = {
							enterK: 'requestFullscreen',
							exitK: 'exitFullscreen',
							elementK: 'fullscreenElement',
							eventK: tF
						};

					} else if (dE.mozRequestFullScreen) {
						api = {
							enterK: 'mozRequestFullScreen',
							exitK: 'mozCancelFullScreen',
							elementK: 'mozFullScreenElement',
							eventK: 'moz' + tF
						};



					} else if (dE.webkitRequestFullscreen) {
						api = {
							enterK: 'webkitRequestFullscreen',
							exitK: 'webkitExitFullscreen',
							elementK: 'webkitFullscreenElement',
							eventK: 'webkit' + tF
						};

					} else if (dE.msRequestFullscreen) {
						api = {
							enterK: 'msRequestFullscreen',
							exitK: 'msExitFullscreen',
							elementK: 'msFullscreenElement',
							eventK: 'MSFullscreenChange'
						};
					}

					if (api) {
						api.enter = function () {
							// disable close-on-scroll in fullscreen
							_initalCloseOnScrollValue = _options.closeOnScroll;
							_options.closeOnScroll = false;

							if (this.enterK === 'webkitRequestFullscreen') {
								pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
							} else {
								return pswp.template[this.enterK]();
							}
						};
						api.exit = function () {
							_options.closeOnScroll = _initalCloseOnScrollValue;

							return document[this.exitK]();

						};
						api.isFullscreen = function () {
							return document[this.elementK];
						};
					}

					return api;
				};



			};
		return PhotoSwipeUI_Default;


	});

