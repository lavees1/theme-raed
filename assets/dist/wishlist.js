(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function i(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(s,e);var t,c,a,l,f=(a=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(a);if(l){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function s(){return n(this,s),f.apply(this,arguments)}return t=s,(c=[{key:"registerEvents",value:function(){var e=this;salla.document.event.onClick(".btn-remove",this.removingAnimation),salla.wishlist.event.onRemoved((function(t,n){return e.removeItem(t,n)}))}},{key:"removingAnimation",value:function(e){var t=e.target;t.querySelector(".sicon-cancel").style.display="none",t.querySelector(".spinner-loader").removeAttribute("style")}},{key:"removeItem",value:function(e,t){var n=document.querySelector("#product_"+t);this.anime(n,!1).height(0).paddingBottom(0).paddingTop(0).easing("easeInOutQuad").duration(300).complete((function(){return n.remove()||document.querySelector("#wishlist>*")||window.location.reload()})).play()}}])&&r(t.prototype,c),s}(function(){function t(){var e=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),window.page=this,document.addEventListener("DOMContentLoaded",(function(){return e.loadApp().then((function(){return e.onReady()||e.registerEvents()}))}))}var n,r;return n=t,(r=[{key:"loadApp",value:function(){var e=0;return new Promise((function(t,n){return setInterval((function(){window.app&&window.app.isThemeApp&&(t(!0),clearInterval(this)),e>10&&(n("Failed to Find `window.app`😢"),clearInterval(this)),e++}),100)}))}},{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}}])&&e(n.prototype,r),t}()))})();