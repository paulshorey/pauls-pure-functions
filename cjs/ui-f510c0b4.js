'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

const is_retina = function () {
  // return boolean:
  return typeof window === 'object'
      ? window.matchMedia(
        '(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
      ).matches
      : false
};
if (typeof window === 'object') {
  // set up for export
  window.ppf = window.ppf||{};
  // export to specific section. User can choose to download one or several of these files
  window.ppf['ui'] = exports__default['default'];
}

var ui = /*#__PURE__*/Object.freeze({
  __proto__: null,
  is_retina: is_retina
});

exports.is_retina = is_retina;
exports.ui = ui;
