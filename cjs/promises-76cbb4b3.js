'use strict';

const sleep = function(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
};

/**
 * Returns output of function for each item in array
 *    when fn is asynchronous (returns a Promise)
 */
const for_each_async = function(array, fn) {
  return Promise.all(array.map(function(item){
    return fn(item)
  }))
};

var promises = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sleep: sleep,
  for_each_async: for_each_async
});

exports.for_each_async = for_each_async;
exports.promises = promises;
exports.sleep = sleep;
