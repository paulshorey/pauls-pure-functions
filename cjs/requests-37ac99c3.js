'use strict';

var exports$1 = require('.');
var urls = require('./urls-22aa4507.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

/**
 * Parse Axios error message
 * @param {string} source - external URL to load
 * @param {object} beforeEl - DOM element before which to insert the new <script> tag
 * @param {object} scriptAttrs - object of attributes to add to the new <script> tag
 */
const load_script = function (source, beforeEl, scriptAttrs = {}) {
  if (!source) return false
  if (typeof window !== "object" || typeof document !== "object") return false
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");

    // force certain attributes
    script.async = true;
    script.defer = true;
    for (let key in scriptAttrs) {
      script[key] = scriptAttrs[key];
    }

    // NOTE: needs refactor: maybe .bind(script)
    function onloadHander(_, isAbort) {
      if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
        script.onload = null;
        script.onreadystatechange = null;
        script = undefined;

        if (isAbort) {
          reject();
        } else {
          resolve();
        }
      }
    }

    script.onload = onloadHander;
    script.onreadystatechange = onloadHander;

    script.src = source;
    window.document.body.append(script);
    resolve(true);
  })
};

/**
 * Parse simple message string from HTTP JSON response, GraphQL, or Error() object
 *    Too many libraries to fetch HTTP requests, too many non-standard response formats.
 *    This handles Axios or standard XMLHTTPRequest, or an Error() object
 *    Supports either convention, of Twitter or Facebook
 *    Supports "non-legacy" format described in: https://www.mediawiki.org/wiki/API:Errors_and_warnings
 *    Response and parsed error can be any type. This will figure it out, with just a few if/else rules.
 *      NOTE:
 *      Unless you don't care about performance, this should NOT be used to detect if a variable is an error,
 *      only to parse the message string from some object/response which you know contains an error message.
 * @param {object} response - response from HTTP request or Error object
 * @returns {string} - nice readable text, meant for an alert popup in your front-end user interface
 */
const parse_error_message = function (response) {
  if (!response) return "!error"
  //
  // maybe input was a string, which is already an error message,
  // or null/undefined/false, whatever, just output that as is
  if (typeof response !== "object") return response.toString()
  //
  // content from HTTP response:
  let content = response.response
    ? response.response.data
      ? response.response.data
      : response.response
    : response.data || response;
  //
  // error object:
  let error = content;
  if (content.errors) error = content.errors[0] || content.errors;
  else if (content.warnings) error = content.warnings[0] || content.warnings;
  else if (content.error) error = content.error;
  else if (content.warning) error = content.warning;
  //
  // something weird:
  if (typeof error !== "object") return error.toString()
  //
  // JS Error object - cut off extra stuff about files/lines:
  if (error[0] && error[0].length > 3) return error[0]
  //
  // JSON object:
  return error.message || error.toString()
};

/**
 * GET request
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
const http_get = function (url = ``, data = {}) {
  // Auth
  // url = url;
  // Default options are marked with *
  return fetch(url + urls.querystring_from_object(data), {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  })
    .then((response) => response.json()) // parses response to JSON
    .then((response) => response.data)
};

/**
 * POST request
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
const http_post = function (url = ``, data = {}) {
  // Auth
  // url = url;
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((response) => response.json()) // parses response to JSON
};

/**
 * PUT request
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
const http_put = function (url = ``, data = {}) {
  // Auth
  // url = url;
  // Default options are marked with *
  return fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((response) => response.json()) // parses response to JSON
};
if (typeof window === 'object') {
  // set up for export
  window.ppf = window.ppf||{};
  // flatten
  for (let func in exports__default['default']) {
    window.ppf[func] = exports__default['default'][func];
  }
  // alternatively, maybe export to namespace?
  // window.ppf['arrays'] = exports// flatten
}

var requests = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load_script: load_script,
  parse_error_message: parse_error_message,
  http_get: http_get,
  http_post: http_post,
  http_put: http_put
});

exports.http_get = http_get;
exports.http_post = http_post;
exports.http_put = http_put;
exports.load_script = load_script;
exports.parse_error_message = parse_error_message;
exports.requests = requests;
