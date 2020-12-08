export const sleep = function(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}

/**
 * Returns output of function when executed on each item in array
 *    when fn is asynchronous (returns a Promise)
 */
export const for_each_promise_all = function(array, fn) {
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
  // window.__['arrays'] = exports// flatten
}
