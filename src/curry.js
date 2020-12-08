// export const curry_arguments = function(){
//   let delayed_args = arguments
//   return function(){
//
//   }
// }

//ppf.promises.for_each_async([1000,2000,3000], ppf.promises.curry_args(ppf.promises.sleep, 1000))


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
