'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

/**
 * Parse and combine POST data and URL params into JavaScript object
 * @param req {object} - IMPORTANT: does not have to be real api request. Can be simple object.
 * @param req.body {object} - key/value pairs, already parsed and ready to use
 * @param req.query {object} - object of key/value pairs from URL query string
 *    This function will decodeURIComponent then parse each value.
 *    These req.query values will override values from req.body!
 * @returns {{}} - combined keys/values. Original request object will NOT be modified.
 */
const aggregate_req_body_query = function (req) {
  let query = {};
  // body (POST data)
  if (req.body) {
    query = req.body;
  }
  // query (URL parameters)
  if (req.query) {
    for (let key in req.query) {
      let val = req.query[key];
      if (val === 0) {
        query[key] = 0;
        continue
      }
      if (!val) continue
      val = decodeURIComponent(val).trim();
      if (!val) continue
      if (val === "undefined") {
        query[key] = "undefined";
        continue
      }
      if (val === "null") {
        query[key] = "null";
        continue
      }
      if (val === "true") {
        query[key] = true;
        continue
      }
      if (val === "false") {
        query[key] = false;
        continue
      }
      if (['"', "{", "["].includes(val[0])) {
        try {
          val = JSON.parse(val);
        } catch (e) {
          val = "";
        }
      }
      query[key] = val;
    }
  }
  // combined
  return query
};


/**
 * Export to browser window
 */
if (typeof window === 'object') {
(async function() {
    let exports = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('.')); });
    // export to window object
    window.ppf = window.ppf || {};
    // flatten
    for (let func in exports) {
      window.ppf[func] = exports[func];
    }
  }());
}

var req = /*#__PURE__*/Object.freeze({
  __proto__: null,
  aggregate_req_body_query: aggregate_req_body_query
});

exports.aggregate_req_body_query = aggregate_req_body_query;
exports.req = req;
