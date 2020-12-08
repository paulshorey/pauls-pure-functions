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

const sleep = function(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
};

/**
 * Returns output of function when executed on each item in array
 *    when fn is asynchronous (returns a Promise)
 */
const for_each_promise_all = function(array, fn) {
  return Promise.all(array.map(function(item){
    return fn(item)
  }))
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

var promises = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sleep: sleep,
  for_each_promise_all: for_each_promise_all
});

exports.for_each_promise_all = for_each_promise_all;
exports.promises = promises;
exports.sleep = sleep;
