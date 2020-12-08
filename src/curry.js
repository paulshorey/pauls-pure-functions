/**
 * If you want to execute a function LATER
 * but want to set its arguments NOW...
 * Let the curry simmer in the slow cooker until you're ready to eat it. :)
 * Useful with Promise.all or lists of values each of which you'd like to run through a function.
 * ```
 *    __.for_each_promise_all([1000,2000,3000], __.call_later(__.sleep, 1000))
 * ```
 * @param {function} func - function you want to call later (to curry). It can be bound
 * @param {array} args - array of arguments (optional, but no need to use this without arguments)
 */
export const call_later = function(func, args){
  return function(){
    return func(args)
  }
}

/**
 * Export to browser window
 */
import exports from '.' // this is lazy, and temporary - will later rewrite object of exports manually
if (typeof window === 'object') {
  // set up for export
  window.ppf = window.ppf||{}
  // flatten
  for (let func in exports) {
    window.ppf[func] = exports[func]
  }
  // alternatively, maybe export to namespace?
  // window.ppf['arrays'] = exports// flatten
}
