'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

// export const curry_arguments = function(){
if (typeof window === 'object') {
  // set up for export
  window.ppf = window.ppf||{};
  // flatten
  for (let func in exports__default['default']) {
    window.ppf[func] = exports__default['default'][func];
  }
  // alternatively, maybe export to namespace?
  // window.ppf['arrays'] = exports// flatten
}
