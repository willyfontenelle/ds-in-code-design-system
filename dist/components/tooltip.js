!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("lit"),require("lit/directives/class-map.js")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js"],e):"object"==typeof exports?exports["dsc-design-system-core"]=e(require("lit"),require("lit/directives/class-map.js")):t["dsc-design-system-core"]=e(t.lit,t["lit/directives/class-map.js"])}(self,((t,e)=>(()=>{"use strict";var o={870:e=>{e.exports=t},536:t=>{t.exports=e}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return o[t](n,n.exports,i),n.exports}i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{i.r(n),i.d(n,{DscTooltip:()=>f});var t,e=i(870),o=i(536);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function s(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var f=function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(y,r);var i,n,f,u,b,d=(u=y,b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(u);if(b){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return s(this,t)});function y(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),(t=d.call(this)).label="",t.placement="",t}return i=y,f=[{key:"styles",get:function(){return(0,e.unsafeCSS)(".tooltip{position:relative;display:flex}.tooltip__label{background-color:var(--neutral-elements-pure);border-radius:var(--border-radius-sm);padding:var(--spacing-inset-size-sm);box-shadow:var(--shadow-level-2) rgba(var(--neutral-dark-pure-rgb), var(--opacity-level-light));max-width:224px;color:var(--neutral-surface-pure);font-size:var(--font-size-xxs);font-family:var(--font-family-01);font-weight:var(--font-weight-regular);line-height:var(--line-height-md);text-align:left;visibility:hidden;display:none;box-sizing:border-box;position:absolute}.tooltip--top{justify-content:center}.tooltip--top .tooltip__label{bottom:100%}.tooltip--top-start .tooltip__label{bottom:100%;left:0}.tooltip--top-end .tooltip__label{bottom:100%;right:0}.tooltip--right .tooltip__label{left:100%}.tooltip--right-start{align-items:flex-start}.tooltip--right-start .tooltip__label{left:100%}.tooltip--right-end{align-items:flex-end}.tooltip--right-end .tooltip__label{left:100%}.tooltip--bottom{justify-content:center}.tooltip--bottom .tooltip__label{top:100%}.tooltip--bottom-start .tooltip__label{top:100%;left:0}.tooltip--bottom-end .tooltip__label{top:100%;right:0}.tooltip--left .tooltip__label{right:100%}.tooltip--left-start{align-items:flex-start}.tooltip--left-start .tooltip__label{right:100%}.tooltip--left-end{align-items:flex-end}.tooltip--left-end .tooltip__label{right:100%}.tooltip:hover .tooltip__label{visibility:visible;display:inline-flex}")}},{key:"properties",get:function(){return{label:{type:String},placement:{type:String}}}}],(n=[{key:"patternPlacement",get:function(){return["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"].includes(this.placement)?this.placement:"top"}},{key:"render",value:function(){var r,i,n;return(0,e.html)(t||(i=['\n        <div class="','">\n            <span class="tooltip__label">',"</span>\n            <slot></slot>\n        </div>\n    "],n||(n=i.slice(0)),t=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(n)}}))),(0,o.classMap)((l(r={},"tooltip",!0),l(r,"tooltip--".concat(this.patternPlacement),!0),r)),this.label)}}])&&a(i.prototype,n),f&&a(i,f),Object.defineProperty(i,"prototype",{writable:!1}),y}(e.LitElement);customElements.get("dsc-tooltip")||customElements.define("dsc-tooltip",f)})(),n})()));