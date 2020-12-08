'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

const average = function (values) {
	let sum = values.reduce((previous, current) => current += previous);
	return sum / values.length;
};

const mean = function (values) {
	values.sort((a, b) => a - b);
	let lowMiddle = Math.floor((values.length - 1) / 2);
	let highMiddle = Math.ceil((values.length - 1) / 2);
	return (values[lowMiddle] + values[highMiddle]) / 2;
};

const is_number = function (variable) {
	if (variable === null) {
		return false;
	}
	if (typeof variable === 'string') {
		variable = Number(variable);
	}
	if (isNaN(variable)) {
		return false;
	}
	return true;
};
if (typeof window === 'object') {
	// export to window object
	window.ppf = window.ppf||{};
	// flatten
	for (let func in exports__default['default']) {
		window.ppf[func] = exports__default['default'][func];
	}
}

var numbers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	average: average,
	mean: mean,
	is_number: is_number
});

exports.average = average;
exports.is_number = is_number;
exports.mean = mean;
exports.numbers = numbers;
