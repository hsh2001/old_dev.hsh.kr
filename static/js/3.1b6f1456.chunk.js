/*! For license information please see 3.1b6f1456.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[3],[,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var l,r,a,c=n(20),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function h(){a=!1}function o(e){if(e){if(e!==l){if(e.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+t.join(", "));l=e,h()}}else l!==u&&(l=u,h())}function i(){return a||(a=function(){l||o(u);for(var e,t=l.split(""),n=[],r=c.nextValue();t.length>0;)r=c.nextValue(),e=Math.floor(r*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return l||u},characters:function(e){return o(e),l},seed:function(e){c.seed(e),r!==e&&(h(),r=e)},lookup:function(e){return i()[e]},shuffled:i}},function(e,t,n){"use strict";e.exports=n(19)},function(e,t,n){"use strict";var l=n(17),r=n(21),a=n(25),c=n(26)||0;function u(){return r(c)}e.exports=u,e.exports.generate=u,e.exports.seed=function(t){return l.seed(t),e.exports},e.exports.worker=function(t){return c=t,e.exports},e.exports.characters=function(e){return void 0!==e&&l.characters(e),l.shuffled()},e.exports.isValid=a},function(e,t,n){"use strict";var l=1;e.exports={nextValue:function(){return(l=(9301*l+49297)%233280)/233280},seed:function(e){l=e}}},function(e,t,n){"use strict";var l,r,a=n(22);n(17);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===r?l++:(l=0,r=n),t+=a(7),t+=a(e),l>0&&(t+=a(l)),t+=a(n)}},function(e,t,n){"use strict";var l=n(17),r=n(23),a=n(24);e.exports=function(e){for(var t,n=0,c="";!t;)c+=a(r,l.get(),1),t=e<Math.pow(16,n+1),n++;return c}},function(e,t,n){"use strict";var l,r="object"===typeof window&&(window.crypto||window.msCrypto);l=r&&r.getRandomValues?function(e){return r.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=l},function(e,t){e.exports=function(e,t,n){for(var l=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*l*n/t.length),a="";;)for(var c=e(r),u=r;u--;)if((a+=t[c[u]&l]||"").length===+n)return a}},function(e,t,n){"use strict";var l=n(17);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+l.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},function(e,t,n){"use strict";e.exports=0},,function(e,t,n){"use strict";var l=n(1),r=n(0),a=n.n(r),c=n(18),u=n.n(c),h=n(29),o=n.n(h),i=n(30),s=n.n(i);t.a=function(e){var t=e.children,n=e.className,c=Object(r.useState)(u.a.generate()+Date.now()),h=Object(l.a)(c,1)[0],i=Object(r.useState)(0),m=Object(l.a)(i,2),p=m[0],v=m[1];return Object(r.useEffect)((function(){window.addEventListener("scroll",(function e(){document.getElementById(h).getBoundingClientRect().y<window.innerHeight/2&&(v(1),window.removeEventListener("scroll",e))}))}),[]),a.a.createElement("div",{className:o()(s.a.wrapper,n),id:h},a.a.createElement("div",{style:{opacity:p}},t))}},function(e,t,n){var l;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)&&l.length){var c=r.apply(null,l);c&&e.push(c)}else if("object"===a)for(var u in l)n.call(l,u)&&l[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()},function(e,t,n){e.exports={wrapper:"FadeInView_wrapper__jsXEg"}},,,,,,,,function(e,t,n){e.exports={wrapper:"SkillPage_wrapper__201Dq"}},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(28),c=n(38),u=n.n(c),h=function(){return r.a.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"}))},o=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M24 8h-24v4h24v-4zm-22 3l.863-2h1.275l-.863 2h-1.275zm2.066 0l.864-2h1.275l-.863 2h-1.276zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm3 3h-24v4h24v-4zm-22 3l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm3 3h-24v4h24v-4zm-22 3l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm1-17h-20l4-6h12l4 6z"}))},i=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"}))},s=function(){return r.a.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M23.548 10.931l-10.479-10.478c-.302-.302-.698-.453-1.093-.453-.396 0-.791.151-1.093.453l-2.176 2.176 2.76 2.76c.642-.216 1.377-.071 1.889.44.513.515.658 1.256.435 1.9l2.66 2.66c.644-.222 1.387-.078 1.901.437.718.718.718 1.881 0 2.6-.719.719-1.883.719-2.602 0-.54-.541-.674-1.334-.4-2l-2.481-2.481v6.529c.175.087.34.202.487.348.717.717.717 1.881 0 2.601-.719.718-1.884.718-2.601 0-.719-.72-.719-1.884 0-2.601.177-.178.383-.312.602-.402v-6.589c-.219-.089-.425-.223-.602-.401-.544-.544-.676-1.343-.396-2.011l-2.721-2.721-7.185 7.185c-.302.302-.453.697-.453 1.093 0 .395.151.791.453 1.093l10.479 10.478c.302.302.697.452 1.092.452.396 0 .791-.15 1.093-.452l10.431-10.428c.302-.303.452-.699.452-1.094 0-.396-.15-.791-.452-1.093"}))},m=function(){return r.a.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M5.25 17.322l-2.25-1.221 2.234-3.067-2.234-1.96 4.713-2.562c.204.231.41.504.604.807l-3.584 1.948 1.181 1.037 3.058-1.686c.119.314.216.641.282.977l-3.261 1.801 6.018 3.109 5.989-3.105-3.152-1.745c.061-.347.144-.667.248-.968l2.933 1.615 1.234-1.095-3.5-1.855c.183-.275.388-.54.614-.803l4.623 2.449-2.261 2.008.011.006 2.25 3.081-2.25 1.224v3.087l-6.75 3.596-6.75-3.596v-3.082zm7.246-.094v5.377l5.255-2.799v-1.946l-3.501 1.905-1.754-2.537zm-6.247.636v1.942l5.248 2.796v-5.373l-1.747 2.536-3.501-1.901zm-1.772-2.096l4.96 2.692 1.099-1.594-4.983-2.575-1.076 1.477zm8.988 1.107l1.096 1.585 4.961-2.698-1.073-1.471-4.984 2.584zm-1.192-2.915h-.521c-.136 0-.268-.046-.358-.127l-.692-.455h2.621l-.692.455c-.089.081-.221.127-.358.127zm1.075-1.164h-2.655c-.161 0-.291-.129-.291-.29 0-.161.13-.291.291-.291h2.655c.161 0 .291.13.291.291 0 .161-.13.29-.291.29zm.287-1.163h-3.245c0-2.297-1.872-3.291-1.872-5.367 0-2.166 1.746-3.358 3.493-3.358 1.748 0 3.497 1.194 3.497 3.358 0 2.076-1.872 3.038-1.873 5.367zm-.901-.997c.188-.954.624-1.689 1.018-2.356.424-.714.757-1.279.757-2.014 0-1.55-1.257-2.361-2.498-2.361-1.239 0-2.495.811-2.495 2.361 0 .739.337 1.312.763 2.035.392.664.822 1.396 1.012 2.335h1.443zm-5.357-4.321h-1.772v-.997h1.818c-.039.219-.059.445-.059.674l.013.323zm11.043 0h-1.761l.014-.323c0-.229-.02-.455-.06-.674h1.807v.997zm-9.983-3.011c-.227.247-.424.518-.584.809l-1.439-1.021.578-.813 1.445 1.025zm7.159-.005l1.437-1.02.578.813-1.43 1.015c-.161-.29-.358-.561-.585-.808zm-5.3-1.22c-.318.115-.619.261-.899.433l-.772-1.575.897-.438.774 1.58zm3.435-.004l.773-1.576.896.438-.769 1.57c-.28-.172-.581-.318-.9-.432zm-1.219-.271c-.162-.016-.327-.024-.494-.024-.17 0-.339.009-.505.025v-1.805h.999v1.804z"}))},p=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z"}))};t.default=function(){return r.a.createElement(a.a,{className:u.a.wrapper},r.a.createElement("h2",null,"Skills"),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(h,null)," Web (Front-end)"),r.a.createElement("p",null,"HTML"),r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"SCSS"),r.a.createElement("p",null,"JavaScript"),r.a.createElement("p",null,"TypeScript"),r.a.createElement("p",null,"React"),r.a.createElement("p",null,"React with TypeScript")),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(o,null)," Web (Back-end)"),r.a.createElement("p",null,"NodeJS"),r.a.createElement("p",null,"PHP")),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(i,null)," Mobile App"),r.a.createElement("p",null,"React Native"),r.a.createElement("p",null,"React Native with TypeScript")),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(s,null)," Version control"),r.a.createElement("p",null,"Git"),r.a.createElement("p",null,"Git flow"),r.a.createElement("p",null,"Collaborate with Github")),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(p,null)," Database"),r.a.createElement("p",null,"MySQL"),r.a.createElement("p",null,"SQLite")),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(m,null)," etc."),r.a.createElement("p",null,"C"),r.a.createElement("p",null,"R"),r.a.createElement("p",null,"Perl"),r.a.createElement("p",null,"Python"))))}}]]);
//# sourceMappingURL=3.1b6f1456.chunk.js.map