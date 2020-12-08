'use strict';

const sleep = function(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
};

const for_each_async = async function(array, fn) {
  for (let t of array) {
    await fn(t);
  }
};

var promises = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sleep: sleep,
  for_each_async: for_each_async
});

exports.for_each_async = for_each_async;
exports.promises = promises;
exports.sleep = sleep;
