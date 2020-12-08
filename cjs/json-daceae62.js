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
  window.ppf = window.ppf||{};
  // export to specific section. User can choose to download one or several of these files
  window.ppf['json'] = exports__default['default'];
}

var json = /*#__PURE__*/Object.freeze({
  __proto__: null,
  jss: jss,
  jsp: jsp
});

exports.json = json;
exports.jsp = jsp;
exports.jss = jss;
