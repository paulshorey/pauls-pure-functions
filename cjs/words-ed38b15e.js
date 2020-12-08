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

const syllable_count = function syllable_count(str) {
  if (!str) return 0
  let original = str;
  str = str.replace("ue", "e");
  str = str.substr(0, str.length - 1);
  str = str.replace(/[^aeiouy]+/g, " ");
  let words = str
    .split(" ")
    .map((w) => w.trim())
    .filter((w) => !!w);
  let syllables = words.length;
  return syllables === 0 ? original.length : syllables
};
const is_vowel = function syllable_count(str) {
  return ["a", "e", "i", "o", "u", "y"].includes(str)
};
const ends_in_vowel = function syllable_count(str) {
  return ["a", "e", "i", "o", "u", "y"].includes(str[str.length-1])
};


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

var words = /*#__PURE__*/Object.freeze({
  __proto__: null,
  syllable_count: syllable_count,
  is_vowel: is_vowel,
  ends_in_vowel: ends_in_vowel
});

exports.ends_in_vowel = ends_in_vowel;
exports.is_vowel = is_vowel;
exports.syllable_count = syllable_count;
exports.words = words;
