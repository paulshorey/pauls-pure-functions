export const jss = function (val) {
	return JSON.stringify(val);
};

export const jsp = function (val) {
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
import exports from '.' // this is lazy, and temporary - will later rewrite object of exports manually
if (typeof window === 'object') {
  // set up for export
  window.__ = window.__||{}
  // flatten
  for (let func in exports) {
    window.__[func] = exports[func]
  }
  // alternatively, maybe export to namespace?
  // window.__['arrays'] = exports// flatten
}
