export const sleep = function(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}

/**
 * Calls a function on each item in array (like [].forEach but works with Promises)
 *    Returns a Promise which resolves when all your promises are done processing.
 *    NOTE: unlike Promise.all, this does not crash on rejected Promises
 *    NOTE: your responses may not come back in the same order as they were sent
 * @param {array<*>} array - array with any type of values
 * @param {function} fn - a function which returns a Promise
 *    each value from array will be fed into the fn, all executed concurrently
 * @return {Promise}
 */
export function for_each_promise_all(array, fn) {
  return Promise.all(array.map(function(item){
    return fn(item)
  }))
}


/**
 * Export to browser window
 */
import exports from '.' // this is lazy, and temporary - will later rewrite object of exports manually
if (typeof window === 'object') {
  // set up for export
  window.__ = window.__||{}
  // flatten
  for (let func in exports) {
    window.__[func] = exports[func]
  }
  // alternatively, maybe export to namespace?
  // window.ppf['arrays'] = exports// flatten
}
