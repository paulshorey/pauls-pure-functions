'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

const jss = function (val) {
	return JSON.stringify(val);
};

const jsp = function (val) {
	return JSON.parse(JSON.stringify(val));
};
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

var json = /*#__PURE__*/Object.freeze({
  __proto__: null,
  jss: jss,
  jsp: jsp
});

exports.json = json;
exports.jsp = jsp;
exports.jss = jss;
