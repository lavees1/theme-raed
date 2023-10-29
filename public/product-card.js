(()=>{"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,o){for(var i=0;i<o.length;i++){var a=o[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(e=a.key,c=void 0,c=function(t,o){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,"string");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),"symbol"===n(c)?c:String(c)),a)}var e,c}function i(t,n,i){return n&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},a(t,n)}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function c(t,n,o){return c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,n,o){var i=[null];i.push.apply(i,n);var e=new(Function.bind.apply(t,i));return o&&a(e,o.prototype),e},c.apply(null,arguments)}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(o=t,-1===Function.toString.call(o).indexOf("[native code]")))return t;var o;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,i)}function i(){return c(t,arguments,e(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),a(i,t)},r(t)}function s(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=e(t);if(o){var c=e(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return function(t,o){if(o&&("object"===n(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,i)}}(function(){function n(){t(this,n)}return i(n,[{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}},{key:"initiate",value:function(t){if(t&&!t.includes(salla.config.get("page.slug")))return app.log("The Class For (".concat(t.join(","),") Skipped."));this.onReady(),this.registerEvents(),app.log("The Class For (".concat((null==t?void 0:t.join(","))||"*",") Loaded🎉"))}}]),n}()).initiateWhenReady=function(){var t,n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"ready"===(null===(t=window.app)||void 0===t?void 0:t.status)?(new this).initiate(o):document.addEventListener("theme::ready",(function(){return(new n).initiate(o)}))};var l=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&a(t,n)}(e,n);var o=s(e);function e(){return t(this,e),o.apply(this,arguments)}return i(e,[{key:"connectedCallback",value:function(){var t,n=this;this.product=this.product||JSON.parse(this.getAttribute("product")),"ready"===(null===(t=window.app)||void 0===t?void 0:t.status)?this.onReady():document.addEventListener("theme::ready",(function(){return n.onReady()}))}},{key:"onReady",value:function(){var t,n=this;this.fitImageHeight=salla.config.get("store.settings.product.fit_type"),salla.wishlist.event.onAdded((function(t,o){return n.toggleFavoriteIcon(o)})),salla.wishlist.event.onRemoved((function(t,o){return n.toggleFavoriteIcon(o,!1)})),this.placeholder=salla.url.asset(salla.config.get("theme.settings.placeholder")),this.getProps(),salla.lang.translationsLoaded||salla.lang.onLoaded((function(){n.initTranslation()})),this.render(),salla.config.isGuest()||salla.storage.get("salla::wishlist",[]).forEach((function(t){return n.toggleFavoriteIcon(t)})),null===(t=document.lazyLoadInstance)||void 0===t||t.update(this.querySelectorAll(".lazy"))}},{key:"initTranslation",value:function(){var t=this;salla.lang.onLoaded((function(){t.remained=salla.lang.get("pages.products.remained"),t.donationAmount=salla.lang.get("pages.products.donation_amount"),t.startingPrice=salla.lang.get("pages.products.starting_price"),t.addToCart=salla.lang.get("pages.cart.add_to_cart"),t.outOfStock=salla.lang.get("pages.products.out_of_stock")}))}},{key:"initCircleBar",value:function(){var t=100-this.product.quantity/(this.product.quantity>100?2*this.product.quantity:100)*100;this.pie.querySelector(".s-product-card-content-pie-svg-bar").style.strokeDashoffset=t}},{key:"toggleFavoriteIcon",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];document.querySelectorAll('.s-product-card-wishlist-btn[data-id="'+t+'"]').forEach((function(t){app.toggleElementClassIf(t,"s-product-card-wishlist-added","not-added",(function(){return n})),app.toggleElementClassIf(t,"pulse-anime","un-favorited",(function(){return n}))}))}},{key:"formatDate",value:function(t){var n=new Date(t);return"".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate())}},{key:"getProductBadge",value:function(){var t,n,o;return this.product.promotion_title?'<div class="s-product-card-promotion-title">'.concat(this.product.promotion_title,"</div>"):this.showQuantity&&null!==(t=this.product)&&void 0!==t&&t.quantity?'<div\n        class="s-product-card-quantity">'.concat(this.remained," ").concat(salla.helpers.number(null===(o=this.product)||void 0===o?void 0:o.quantity),"</div>"):this.showQuantity&&null!==(n=this.product)&&void 0!==n&&n.is_out_of_stock?'<div class="s-product-card-out-badge">'.concat(this.outOfStock,"</div>"):""}},{key:"getPriceFormat",value:function(t){return t&&0!=t?salla.money(t):salla.config.get("store.settings.product.show_price_as_dash")?"-":""}},{key:"getProductPrice",value:function(){var t,n;return this.product.is_on_sale?'<div class="s-product-card-sale-price">\n        <h4>'.concat(this.getPriceFormat(this.product.sale_price),"</h4>\n        <span>").concat(this.getPriceFormat(null===(n=this.product)||void 0===n?void 0:n.regular_price),"</span>\n      </div>"):this.product.starting_price?void 0:'<h4 class="s-product-card-price">'.concat(this.getPriceFormat(null===(t=this.product)||void 0===t?void 0:t.price),"</h4>")}},{key:"getAddButtonLabel",value:function(){return"sale"===this.product.status&&"booking"===this.product.type?salla.lang.get("pages.cart.book_now"):"sale"===this.product.status?salla.lang.get("pages.cart.add_to_cart"):"donating"!==this.product.type?salla.lang.get("pages.products.out_of_stock"):salla.lang.get("pages.products.donation_exceed")}},{key:"getProps",value:function(){this.horizontal=this.hasAttribute("horizontal"),this.shadowOnHover=this.hasAttribute("shadowOnHover"),this.hideAddBtn=this.hasAttribute("hideAddBtn"),this.fullImage=this.hasAttribute("fullImage"),this.minimal=this.hasAttribute("minimal"),this.isSpecial=this.hasAttribute("isSpecial"),this.showQuantity=this.hasAttribute("showQuantity")}},{key:"render",value:function(){var t,n,o,i,a,e,c,r,s,l,u,d,p,h,f,v,g,m,y=this;this.classList.add("s-product-card-entry"),this.setAttribute("id",this.product.id),!(this.horizontal||this.fullImage||this.minimal)&&this.classList.add("s-product-card-vertical"),this.horizontal&&!this.fullImage&&!this.minimal&&this.classList.add("s-product-card-horizontal"),this.fitImageHeight&&!this.isSpecial&&!this.fullImage&&!this.minimal&&this.classList.add("s-product-card-fit-height"),this.isSpecial&&this.classList.add("s-product-card-special"),this.fullImage&&this.classList.add("s-product-card-full-image"),this.minimal&&this.classList.add("s-product-card-minimal"),null!==(t=this.product)&&void 0!==t&&t.donation&&this.classList.add("s-product-card-donation"),this.shadowOnHover&&this.classList.add("s-product-card-shadow"),null!==(n=this.product)&&void 0!==n&&n.is_out_of_stock&&this.classList.add("s-product-card-out-of-stock"),this.innerHTML='\n        <div class="'.concat(this.fullImage?"s-product-card-image-full":"s-product-card-image",'">\n          <a href="').concat(null===(o=this.product)||void 0===o?void 0:o.url,'">\n            <img class="s-product-card-image-').concat(salla.url.is_placeholder(null===(i=this.product)||void 0===i||null===(i=i.image)||void 0===i?void 0:i.url)?"contain":this.fitImageHeight?this.fitImageHeight:"cover",' lazy"\n              src=').concat(this.placeholder,"\n              alt=").concat(null===(a=this.product)||void 0===a||null===(a=a.image)||void 0===a?void 0:a.alt,"\n              data-src=").concat((null===(e=this.product)||void 0===e||null===(e=e.image)||void 0===e?void 0:e.url)||(null===(c=this.product)||void 0===c?void 0:c.thumbnail),"\n            />\n            ").concat(this.fullImage||this.minimal?"":this.getProductBadge(),"\n          </a>\n          ").concat(this.fullImage?'<a href="'.concat(null===(r=this.product)||void 0===r?void 0:r.url,'" class="s-product-card-overlay"></a>'):"","\n          ").concat(this.horizontal||this.fullImage?"":'<salla-button\n              shape="icon"\n              fill="outline"\n              color="light"\n              name="product-name-'.concat(this.product.id,'"\n              aria-label="Add or remove to wishlist"\n              class="s-product-card-wishlist-btn animated "\n              onclick="salla.wishlist.toggle(').concat(this.product.id,')"\n              data-id="').concat(this.product.id,'">\n              <i class="sicon-heart"></i>\n            </salla-button>'),'\n        </div>\n        <div class="s-product-card-content">\n          ').concat(this.isSpecial&&null!==(s=this.product)&&void 0!==s&&s.quantity?'<div class="s-product-card-content-pie">\n              <span>\n                <b>'.concat(salla.helpers.number(null===(l=this.product)||void 0===l?void 0:l.quantity),"</b>\n                ").concat(this.remained,'\n              </span>\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 36 34" class="s-product-card-content-pie-svg">\n                <circle cx="16" cy="16" r="15.9155" class="s-product-card-content-pie-svg-base" />\n                <circle cx="16" cy="16" r="15.9155" class="s-product-card-content-pie-svg-bar" />\n              </svg>\n            </div>'):"",'\n\n          <div class="s-product-card-content-main ').concat(this.isSpecial?"s-product-card-content-extra-padding":"",'">\n            <h3 class="s-product-card-content-title">\n              <a href="').concat(null===(u=this.product)||void 0===u?void 0:u.url,'">').concat(null===(d=this.product)||void 0===d?void 0:d.name,"</a>\n            </h3>\n\n            ").concat(null!==(p=this.product)&&void 0!==p&&p.subtitle&&!this.minimal?'<p class="s-product-card-content-subtitle">'.concat(null===(h=this.product)||void 0===h?void 0:h.subtitle,"</p>"):"","\n          </div>\n          ").concat(null===(f=this.product)||void 0===f||!f.donation||this.minimal||this.fullImage?"":"[<salla-progress-bar donation=".concat(null===(v=this.product)||void 0===v?void 0:v.donation,' />\n          <div class="s-product-card-donation-input">\n            ').concat(null!==(g=this.product)&&void 0!==g&&null!==(g=g.donation)&&void 0!==g&&g.can_donate?'[<label htmlFor="donation-amount">'.concat(this.donationAmount,' <span>*</span></label>,\n              <input\n                type="text"\n                onInput="').concat((function(t){salla.helpers.inputDigitsOnly(t.target),y.addBtn.donatingAmount=t.target.value}),'"\n                id="donation-amount"\n                name="donating_amount"\n                class="s-form-control"\n                placeholder="').concat(this.donationAmount,'" />]'):"","\n          </div>]"),'\n          <div class="s-product-card-content-sub ').concat(this.isSpecial?"s-product-card-content-extra-padding":"",'">\n            ').concat(this.getProductPrice(),"\n            ").concat(null!==(m=this.product)&&void 0!==m&&null!==(m=m.rating)&&void 0!==m&&m.stars&&!this.minimal?'<div class="s-product-card-rating">\n                <span innerHTML='.concat(Star,"/>\n                <span>").concat(this.product.rating.stars,"</span>\n              </div>"):"","\n          </div>\n\n          ").concat(this.isSpecial&&this.product.discount_ends?'<salla-count-down date="'.concat(this.formatDate(this.product.discount_ends),'" end-of-day=',!0," boxed=",!0,"\n              labeled=",!0," />"):"","\n\n\n          ").concat(this.hideAddBtn?"":'<div class="s-product-card-content-footer gap-2">\n              <salla-add-product-button fill="outline" width="wide"\n                product-id="'.concat(this.product.id,'"\n                product-status="').concat(this.product.status,'"\n                product-type="').concat(this.product.type,'">\n                ').concat("sale"==this.product.status?'<i class="text-[16px] sicon-'.concat("booking"==this.product.type?"calendar-time":"shopping-bag",'"></i>'):"","\n                ").concat(this.product.add_to_cart_label?this.product.add_to_cart_label:this.getAddButtonLabel(),"\n              </salla-add-product-button>\n\n              ").concat(this.horizontal||this.fullImage?'<salla-button \n                  shape="icon" \n                  fill="outline" \n                  color="light" \n                  id="card-wishlist-btn-'.concat(this.product.id,'-horizontal"\n                  aria-label="Add or remove to wishlist"\n                  class="s-product-card-wishlist-btn animated"\n                  onclick="salla.wishlist.toggle(').concat(this.product.id,')"\n                  data-id="').concat(this.product.id,'">\n                  <i class="sicon-heart"></i> \n                </salla-button>'):"","\n            </div>"),"\n        </div>\n      ")}}]),e}(r(HTMLElement));customElements.define("custom-salla-product-card",l)})();