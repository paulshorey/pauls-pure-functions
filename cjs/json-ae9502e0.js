'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

const jss = function (val) {
	return JSON.stringify(val);
};

const jsp = function (val) {
	return JSON.parse(JSON.stringify(val));
};


// import PropTypes from 'prop-types';
//
// let propTypeShapeOf = function (value) {
// 	// console.log('propTypeShapeOf', value);
// 	let output = 'PropTypes.shape({\n';
// 	for (let key in value) {
// 		console.log('that.' + key);
// 		// output += `  ${key}: PropTypes.${propTypeOf(value[key])}.isRequired,\n`;
// 	}
// 	output += '}),';
// 	return output;
// };
// let propTypeOf = function (value) {
// 	switch (typeof value) {
// 		case 'function':
// 			return 'func';
// 		case 'boolean':
// 			return 'bool';
// 		case 'object':
// 			if (Array.isArray(value)) {
// 				return 'array';
// 			} else if (value === null) {
// 				return 'null';
// 			} else {
// 				return propTypeShapeOf(value);
// 			}
// 			return 'bool';
// 		default:
// 			return typeof value;
// 	}
// };
// DomainsResults.propTypes = {
// 	that: pt.shape({
// 		state: pt.shape({}),
// 		props: pt.shape({}),
// 		toggleResults: pt.func({}),
// 	}),
// };

// /*
//  * build propTypes declaration, recursively
//  */
// let pt = 'that: ' + propTypeShapeOf(that);
// console.log(pt);


/**
 * Export to browser window
 */
if (typeof window === 'object') {
(async function() {
    let exports = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('.')); });
    // export to window object
    window.ppf = window.ppf || {};
    // flatten
    for (let func in exports) {
      window.ppf[func] = exports[func];
    }
  }());
}

var json = /*#__PURE__*/Object.freeze({
  __proto__: null,
  jss: jss,
  jsp: jsp
});

exports.json = json;
exports.jsp = jsp;
exports.jss = jss;
