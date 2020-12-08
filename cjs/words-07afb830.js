'use strict';

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
