'use strict';

const is_retina = function () {
  // return boolean:
  return typeof window === 'object'
      ? window.matchMedia(
        '(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
      ).matches
      : false
};

var ui = /*#__PURE__*/Object.freeze({
  __proto__: null,
  is_retina: is_retina
});

exports.is_retina = is_retina;
exports.ui = ui;
