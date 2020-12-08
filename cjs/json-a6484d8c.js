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
  // export to window object
  window.ppf = window.ppf||{};
  // flatten
  for (let func in exports__default['default']) {
    window.ppf[func] = exports__default['default'][func];
  }
}

var json = /*#__PURE__*/Object.freeze({
  __proto__: null,
  jss: jss,
  jsp: jsp
});

exports.json = json;
exports.jsp = jsp;
exports.jss = jss;
