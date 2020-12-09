'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

/**
 * If you want to execute a function LATER
 * but want to set its arguments NOW...
 * Let the curry simmer in the slow cooker until you're ready to eat it. :)
 * Useful with Promise.all or lists of values each of which you'd like to run through a function.
 * ```
 *    let toDoLater = __.call_later(console.warn, 'go for a run')
 *    // or
 *    __.for_each_promise_all([1000,2000,3000], __.call_later(__.sleep, 1000))
 * ```
 * @param {function} func - function you want to call later (to curry). It can be bound
 * @param {array} args - array of arguments (optional, but no need to use this without arguments)
 */
function call_later(func, args){
  return function(){
    return func(args)
  }
}

/**
 * Compose unlimited number of functions.
 * One calls the original argument.
 * The output of that becomes the argument for the next function. Repeatedly.
 * NOTE: right now each function works with only 1 argument
 * ```
 *    var f = (x) => x + 5;
 *    var g = (x) => x + 7;
 *    var h = (x) => x + 10;
 *    var fgh = compose(f, g, h);
 *    console.log(fgh(5)) // 27
 * ```
 * @param first {function} - function to call first
 * @param funcs {function} - keep adding arguments (functions)
 * @returns {function(*=): *}
 */
function compose(first, ...funcs) {
  return function(x){
    return funcs.reduce(function(accumulator, func){
      return func(accumulator)
    },first(x))
  }
}
if (typeof window === 'object') {
  // set up for export
  window.__ = window.__||{};
  // flatten
  for (let func in exports__default['default']) {
    window.__[func] = exports__default['default'][func];
  }
  // alternatively, maybe export to namespace?
  // window.ppf['arrays'] = exports// flatten
}

var curry = /*#__PURE__*/Object.freeze({
  __proto__: null,
  call_later: call_later,
  compose: compose
});

exports.call_later = call_later;
exports.compose = compose;
exports.curry = curry;
