import _sort_strings_by_extension from './sort_strings/sort_strings_by_extension.js';
import _sort_strings_by_length_and_position from './sort_strings/sort_strings_by_length_and_position.js';
import _sort_strings_by_length_asc from './sort_strings/sort_strings_by_length_asc.js';
import _sort_strings_by_matches_in_list from './sort_strings/sort_strings_by_matches_in_list.js';
import _sort_strings_by_rating from './sort_strings/sort_strings_by_rating.js';
import _sort_strings_by_rating_and_position from './sort_strings/sort_strings_by_rating_and_position.js';
import _sort_strings_combine_lists from './sort_strings/sort_strings_combine_lists.js';

export let sort_strings_by_extension = _sort_strings_by_extension
export let sort_strings_by_length_and_position = _sort_strings_by_length_and_position
export let sort_strings_by_length_asc = _sort_strings_by_length_asc
export let sort_strings_by_matches_in_list = _sort_strings_by_matches_in_list
export let sort_strings_by_rating = _sort_strings_by_rating
export let sort_strings_by_rating_and_position = _sort_strings_by_rating_and_position
export let sort_strings_combine_lists = _sort_strings_combine_lists


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
