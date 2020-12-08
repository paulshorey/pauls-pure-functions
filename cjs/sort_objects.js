'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var exports$1 = require('.');
var sort_objects_by_property_and_position$1 = require('./sort_objects_by_property_and_position-a7cc2b70.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

let sort_objects_by_property = sort_objects_by_property_and_position$1.sort_objects_by_property;
let sort_objects_by_property_and_position = sort_objects_by_property_and_position$1._sort_objects_by_property_and_position;
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

exports.sort_objects_by_property = sort_objects_by_property;
exports.sort_objects_by_property_and_position = sort_objects_by_property_and_position;
