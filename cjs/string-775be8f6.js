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

const str_hash = function (str) {
  let hash = 0;
  if (str.length === 0) {
    return hash
  }
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash+''
};

const str_capitalize = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
};

const str_sanitize_loosely = function (word) {
  return word
    .replace(/_-/g, " ")
    .replace(/[^\w ]+/g, "")
    .toLowerCase()
    .trim()
};
const str_sanitize_strictly = function (word) {
  return word
    .replace(/[^\w]+/g, "")
    .toLowerCase()
    .trim()
};

const str_insert = function (string = "", index = 0, insert = "") {
  return string.substring(0, index) + insert + string.substring(index, string.length)
};

/**
 * Trim a character other than whitespace
 * @param s {string} - string
 * @param c {string} - remove this character (or characters) from start/end
 * @returns {void | string}
 */
const str_trim_char = function trim(s, c) {
  if (c === "]") c = "\\]";
  if (c === "\\") c = "\\\\";
  return s.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", "g"), "")
};

/**
 * Trim all non-alphabetical (not a-zA-Z) characters
 * @param str {string} - string
 * @returns {string}
 */
const str_trim_non_alpha = function trim(str) {
  return str.replace(new RegExp("^[^a-z]+|[^a-z]+$", "gi"), "")
};

const str_syllables_count = function str_syllables_count(word) {
  word = word.toLowerCase(); //word.downcase!
  if (word.length <= 3) {
    return 1
  } //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ""); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, ""); //word.sub!(/^y/, '')
  let match = word.match(/[aeiouy]{1,2}/g);
  return match ? match.length : 0 //word.scan(/[aeiouy]{1,2}/).size
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

var string = /*#__PURE__*/Object.freeze({
  __proto__: null,
  str_hash: str_hash,
  str_capitalize: str_capitalize,
  str_sanitize_loosely: str_sanitize_loosely,
  str_sanitize_strictly: str_sanitize_strictly,
  str_insert: str_insert,
  str_trim_char: str_trim_char,
  str_trim_non_alpha: str_trim_non_alpha,
  str_syllables_count: str_syllables_count
});

exports.str_capitalize = str_capitalize;
exports.str_hash = str_hash;
exports.str_insert = str_insert;
exports.str_sanitize_loosely = str_sanitize_loosely;
exports.str_sanitize_strictly = str_sanitize_strictly;
exports.str_syllables_count = str_syllables_count;
exports.str_trim_char = str_trim_char;
exports.str_trim_non_alpha = str_trim_non_alpha;
exports.string = string;