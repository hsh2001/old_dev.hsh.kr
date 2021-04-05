/*! For license information please see 3.ca98cf4c.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[3],{29:function(e,t,n){"use strict";var r,a,o,i=n(32),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){o=!1}function u(e){if(e){if(e!==r){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,s()}}else r!==c&&(r=c,s())}function l(){return o||(o=function(){r||u(c);for(var e,t=r.split(""),n=[],a=i.nextValue();t.length>0;)a=i.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||c},characters:function(e){return u(e),r},seed:function(e){i.seed(e),a!==e&&(s(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},30:function(e,t,n){"use strict";e.exports=n(31)},31:function(e,t,n){"use strict";var r=n(29),a=n(33),o=n(37),i=n(38)||0;function c(){return a(i)}e.exports=c,e.exports.generate=c,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=o},32:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},33:function(e,t,n){"use strict";var r,a,o=n(34);n(29);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=o(7),t+=o(e),r>0&&(t+=o(r)),t+=o(n)}},34:function(e,t,n){"use strict";var r=n(29),a=n(35),o=n(36);e.exports=function(e){for(var t,n=0,i="";!t;)i+=o(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}},35:function(e,t,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},36:function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),o="";;)for(var i=e(a),c=a;c--;)if((o+=t[i[c]&r]||"").length===+n)return o}},37:function(e,t,n){"use strict";var r=n(29);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},38:function(e,t,n){"use strict";e.exports=0},39:function(e,t,n){"use strict";var r=n(1),a=n(0);t.a=function(e,t){var n=Object(a.useState)(0),o=Object(r.a)(n,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){function n(){var n=document.getElementById(e),r=document.getElementById(t),a=n.getBoundingClientRect().top;if(Math.abs(a)<100){var o=r.getBoundingClientRect(),i=o.height,s=o.y,u=window.innerHeight,l=(i+s-u)/(2*u),f=1-Math.max(0,Math.min(1,l));c(f)}}n(),window.addEventListener("scroll",n),window.addEventListener("resize",n),setInterval(n,30)}),[]),i}},40:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(30),c=n.n(i),s=n(41),u=n.n(s),l=n(42),f=n.n(l);t.a=function(e){var t=e.children,n=e.className,i=Object(a.useState)(c.a.generate()+Date.now()),s=Object(r.a)(i,1)[0],l=Object(a.useState)(0),p=Object(r.a)(l,2),h=p[0],g=p[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function e(){document.getElementById(s).getBoundingClientRect().y<window.innerHeight/2&&(g(1),window.removeEventListener("scroll",e))}))}),[]),o.a.createElement("div",{className:u()(f.a.wrapper,n),id:s},o.a.createElement("div",{style:{opacity:h}},t))}},41:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},42:function(e,t,n){e.exports={wrapper:"FadeInView_wrapper__jsXEg"}},47:function(e,t,n){e.exports={animationWrapper:"ReversChangePage_animationWrapper__Zj3oC",blackBlock:"ReversChangePage_blackBlock__tWiUt",whiteBlock:"ReversChangePage_whiteBlock__2kafI",mainContentWrapper:"ReversChangePage_mainContentWrapper__Orp5d"}},65:function(e,t,n){"use strict";n.r(t);var r=n(5);var a=n(12);var o=n(0),i=n.n(o),c=n(47),s=n.n(c),u=n(40),l=n(39);(new Image).src="/image/reverse-change-mac-book.png";var f,p=Object.keys(Array(Math.pow(10,2)).fill(null)),h=function(e){if(Array.isArray(e))return Object(r.a)(e)}(f=p)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(f)||Object(a.a)(f)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();h.sort((function(){return.5-Math.random()}));t.default=function(){var e=Object(l.a)("reverse-change-animatin-section","reverse-change-wrapper"),t=Object(o.useMemo)((function(){var t=Math.pow(10,2)*e,n=h.slice(0,Math.floor(t));return p.map((function(e){return i.a.createElement("div",{key:e+"-reverse-change-animation-block",style:{height:window.innerHeight/10+"px"},className:n.includes(e)?s.a.blackBlock:s.a.whiteBlock})}))}),[e]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s.a.animationWrapper,id:"reverse-change-wrapper"},i.a.createElement("div",{id:"reverse-change-animatin-section",style:{gridTemplateColumns:"1fr ".repeat(10)}},t)),i.a.createElement(u.a,{className:s.a.mainContentWrapper},i.a.createElement("h2",null,"Reverse Change"),i.a.createElement("h3",null,"Simple play board game"),i.a.createElement("img",{src:"/image/reverse-change-mac-book.png",alt:"Reverse change on laptop"}),i.a.createElement("a",{href:"https://hsh-game.github.io/reverse-change",target:"_blank",rel:"noopener noreferrer"},"Play")," / ",i.a.createElement("a",{href:"https://github.com/hsh-game/reverse-change",target:"_blank",rel:"noopener noreferrer"},"Github")))}}}]);
//# sourceMappingURL=3.ca98cf4c.chunk.js.map