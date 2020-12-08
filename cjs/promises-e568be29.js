'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

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
if (typeof window === 'object') {
  // export to window object
  window.ppf = window.ppf||{};
  // flatten
  for (let func in exports__default['default']) {
    window.ppf[func] = exports__default['default'][func];
  }
}

var promises = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sleep: sleep,
  for_each_promise_all: for_each_promise_all
});

exports.for_each_promise_all = for_each_promise_all;
exports.promises = promises;
exports.sleep = sleep;
