parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OqZs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.str_syllables_count=exports.str_trim_non_alpha=exports.str_trim_char=exports.str_insert=exports.str_sanitize_strictly=exports.str_sanitize_loosely=exports.str_capitalize=exports.str_hash=void 0;var r=function(r){var t=0;if(0===r.length)return t;for(var e=0;e<r.length;e++){t=(t<<5)-t+r.charCodeAt(e),t&=t}return t+""};exports.str_hash=r;var t=function(r){return r.charAt(0).toUpperCase()+r.slice(1)};exports.str_capitalize=t;var e=function(r){return r.replace(/_-/g," ").replace(/[^\w ]+/g,"").toLowerCase().trim()};exports.str_sanitize_loosely=e;var s=function(r){return r.replace(/[^\w]+/g,"").toLowerCase().trim()};exports.str_sanitize_strictly=s;var n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return r.substring(0,t)+e+r.substring(t,r.length)};exports.str_insert=n;var o=function(r,t){return"]"===t&&(t="\\]"),"\\"===t&&(t="\\\\"),r.replace(new RegExp("^["+t+"]+|["+t+"]+$","g"),"")};exports.str_trim_char=o;var a=function(r){return r.replace(new RegExp("^[^a-z]+|[^a-z]+$","gi"),"")};exports.str_trim_non_alpha=a;var i=function(r){if((r=r.toLowerCase()).length<=3)return 1;var t=(r=(r=r.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"")).replace(/^y/,"")).match(/[aeiouy]{1,2}/g);return t?t.length:0};exports.str_syllables_count=i;
},{}],"HMUh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.querystring_from_object=o,exports.object_from_querystring=i,exports.querystring_replace_key_value=a;var r=require("./string.js");function e(r,e){var n;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return u=r.done,r},e:function(r){c=!0,a=r},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function t(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function o(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.keys(r).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])}).join("&");return e&&(e="?"+e),e}function i(){var r,t={},n=e((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace("?","").split("&"));try{for(n.s();!(r=n.n()).done;){var o=r.value;if(o){var i=o.split("="),a=i[0];a&&(t[a]=i[1]||"")}}}catch(c){n.e(c)}finally{n.f()}for(var u in t)t[u]=decodeURIComponent(t[u]||"").trim();return t}function a(e,t,n){e=(0,r.str_trim_char)(e,"&"),e=(0,r.str_trim_char)(e,"?");var o=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');o[t]=n;for(var i="?",a=0,u=Object.entries(o);a<u.length;a++){var c=u[a];i+=c[0]+"=",i+=c[1]+"&"}return(0,r.str_trim_char)(i,"&")}
},{"./string.js":"OqZs"}],"RWQU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.http_put=exports.http_post=exports.http_get=exports.parse_error_message=exports.load_script=void 0;var e=require("./urls.js");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!!e&&("object"===("undefined"==typeof window?"undefined":r(window))&&"object"===("undefined"==typeof document?"undefined":r(document))&&new Promise(function(r,t){var n=document.createElement("script");for(var s in n.async=!0,n.defer=!0,o)n[s]=o[s];function a(e,o){(o||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=null,n.onreadystatechange=null,n=void 0,o?t():r())}n.onload=a,n.onreadystatechange=a,n.src=e,window.document.body.append(n),r(!0)}))};exports.load_script=t;var o=function(e){if(!e)return"!error";if("object"!==r(e))return e.toString();var t=e.response?e.response.data?e.response.data:e.response:e.data||e,o=t;return t.errors?o=t.errors[0]||t.errors:t.warnings?o=t.warnings[0]||t.warnings:t.error?o=t.error:t.warning&&(o=t.warning),"object"!==r(o)?o.toString():o[0]&&o[0].length>3?o[0]:o.message||o.toString()};exports.parse_error_message=o;var n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(r+(0,e.querystring_from_object)(t),{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer"}).then(function(e){return e.json()}).then(function(e){return e.data})};exports.http_get=n;var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(r)}).then(function(e){return e.json()})};exports.http_post=s;var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(r)}).then(function(e){return e.json()})};exports.http_put=a;
},{"./urls.js":"HMUh"}]},{},["RWQU"], null)
//# sourceMappingURL=/requests.js.map