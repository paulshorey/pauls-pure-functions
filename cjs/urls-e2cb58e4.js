'use strict';

var exports$1 = require('.');
var string = require('./string-520962f4.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

/**
 * Convert JavaScript Object to URL querystring
 * ex: "?one=1&two=something"
 */
function querystring_from_object(params = {}) {
  let qs = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
  if (qs) {
    qs = "?" + qs;
  }
  return qs
}

/**
 * Convert URL querystring to JavaScript Object
 * ex: "?one=1&two=something" => {one:1,two:'something'}
 */
function object_from_querystring(str = "") {
  // make object
  let obj = {};
  let pairs = str.replace("?", "").split("&");
  for (let pair of pairs) {
    if (!pair) continue
    let tuple = pair.split("=");
    let key = tuple[0];
    if (!key) continue
    obj[key] = tuple[1] || "";
  }
  // decode value
  for (let key in obj) {
    obj[key] = decodeURIComponent(obj[key] || "").trim();
  }
  // done
  return obj
}

/**
 * Change a url (GET) parameter in queryString string
 * @param queryString {string} - ex: "?start=10&fruit=apple"
 * @param key {string} - ex: "fruit"
 * @param value {string} - ex: "species"
 * @return {string} - ex: "?start=10&species=apple"
 */
function querystring_replace_key_value(queryString, key, value) {
  // clean input
  queryString = string.str_trim_char(queryString, "&");
  queryString = string.str_trim_char(queryString, "?");
  let obj = JSON.parse(
    '{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  );
  // replace value
  obj[key] = value;
  // rebuild queryString with replaced value
  let output = "?";
  for (let pair of Object.entries(obj)) {
    output += pair[0] + "=";
    output += pair[1] + "&";
  }
  return string.str_trim_char(output, "&")
}
if (typeof window === 'object') {
  // set up for export
  window.__ = window.__||{};
  // flatten
  for (let func in exports__default['default']) {
    window.__[func] = exports__default['default'][func];
  }
  // alternatively, maybe export to namespace?
  // window.__['arrays'] = exports// flatten
}

var urls = /*#__PURE__*/Object.freeze({
  __proto__: null,
  querystring_from_object: querystring_from_object,
  object_from_querystring: object_from_querystring,
  querystring_replace_key_value: querystring_replace_key_value
});

exports.object_from_querystring = object_from_querystring;
exports.querystring_from_object = querystring_from_object;
exports.querystring_replace_key_value = querystring_replace_key_value;
exports.urls = urls;
