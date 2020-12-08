'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var exports$1 = require('.');
var sort_strings_combine_lists$1 = require('./sort_strings_combine_lists-52455d6a.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

let sort_strings_by_extension = sort_strings_combine_lists$1.sort_strings_by_extension;
let sort_strings_by_length_and_position = sort_strings_combine_lists$1.sort_strings_by_length_and_position;
let sort_strings_by_length_asc = sort_strings_combine_lists$1.sort_strings_by_length_asc;
let sort_strings_by_matches_in_list = sort_strings_combine_lists$1.sort_strings_by_matches_in_list;
let sort_strings_by_rating = sort_strings_combine_lists$1.sort_strings_by_rating;
let sort_strings_by_rating_and_position = sort_strings_combine_lists$1.sort_strings_by_rating_and_position;
let sort_strings_combine_lists = sort_strings_combine_lists$1.sort_strings_combine_lists;
if (typeof window === 'object') {
  // set up for export
  window.__ = window.__||{};
  // flatten
  for (let func in exports__default['default']) {
    window.__[func] = exports__default['default'][func];
  }
  // alternatively, maybe export to namespace?
  // window.__['arrays'] = exports// flatten
}

exports.sort_strings_by_extension = sort_strings_by_extension;
exports.sort_strings_by_length_and_position = sort_strings_by_length_and_position;
exports.sort_strings_by_length_asc = sort_strings_by_length_asc;
exports.sort_strings_by_matches_in_list = sort_strings_by_matches_in_list;
exports.sort_strings_by_rating = sort_strings_by_rating;
exports.sort_strings_by_rating_and_position = sort_strings_by_rating_and_position;
exports.sort_strings_combine_lists = sort_strings_combine_lists;
