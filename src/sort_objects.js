import _sort_objects_by_property from './sort_objects/sort_objects_by_property.js'
import _sort_objects_by_property_and_position from './sort_objects/sort_objects_by_property_and_position.js'

export let sort_objects_by_property = _sort_objects_by_property
export let sort_objects_by_property_and_position = _sort_objects_by_property_and_position


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
