(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),s=r("Bnag");e.exports=function(e){return n(e)||o(e)||c(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),s=r("8OQS");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=r("q1tI"),i=r("7ljp").mdx,l=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=s(e,["scope","children"]),u=l(t),f=a.useMemo((function(){if(!r)return null;var e=p({React:a,mdx:i},u),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return a.createElement(f,p({},c))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function c(t,r,s){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},xdpm:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),c=r("2A+t"),s=r("izhR"),u=r("A2+M"),p=r("Q3iF"),a=r("GIzu"),i=(["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),function(e){var t=e.data.post;return Object(c.c)(p.a,null,Object(c.c)(a.a,{title:t.title,description:t.description?t.description:t.excerpt,image:t.banner?t.banner.childImageSharp.resize.src:void 0,pathname:t.slug,canonicalUrl:t.canonicalUrl}),Object(c.c)(s.d,{as:"h1",variant:"styles.h4"},t.title),Object(c.c)("p",{sx:{color:"secondary",mt:2,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.c)("time",null,t.date)),Object(c.c)("section",null,Object(c.c)(u.MDXRenderer,null,t.body)))});t.default=function(e){var t=Object.assign({},e);return o.a.createElement(i,t)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-d5d894eafb619d3dff9c.js.map