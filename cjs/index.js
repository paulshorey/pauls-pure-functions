'use strict';

require('.');
var arrays = require('./arrays-67c5574b.js');
var cli = require('./cli-b3757a41.js');
var curry = require('./curry-c09e79bb.js');
var etc = require('./etc-cf6a8164.js');
var sort_strings_combine_lists = require('./sort_strings_combine_lists-52455d6a.js');
var sort_objects_by_property_and_position = require('./sort_objects_by_property_and_position-a7cc2b70.js');
var sort_words = require('./sort_words-0a91a292.js');
var strings = require('./strings-722b9157.js');
var numbers = require('./numbers-1767a847.js');
var objects = require('./objects-1e058dd7.js');
var promises = require('./promises-0630916c.js');
var req = require('./req-f3512a5d.js');
var string = require('./string-5ee3e230.js');
var urls = require('./urls-79d62916.js');
var requests = require('./requests-dd60d8b2.js');
var json = require('./json-50ac0634.js');
var ui = require('./ui-b4563c56.js');
var words = require('./words-88e4f58c.js');

let all = {
  sort_objects: {
    sort_objects_by_property: sort_objects_by_property_and_position.sort_objects_by_property,
    sort_objects_by_property_and_position: sort_objects_by_property_and_position._sort_objects_by_property_and_position,
  },
  sort_strings: {
    sort_strings_by_extension: sort_strings_combine_lists.sort_strings_by_extension,
    sort_strings_by_length_and_position: sort_strings_combine_lists.sort_strings_by_length_and_position,
    sort_strings_by_length_asc: sort_strings_combine_lists.sort_strings_by_length_asc,
    sort_strings_by_matches_in_list: sort_strings_combine_lists.sort_strings_by_matches_in_list,
    sort_strings_by_rating: sort_strings_combine_lists.sort_strings_by_rating,
    sort_strings_by_rating_and_position: sort_strings_combine_lists.sort_strings_by_rating_and_position,
    sort_strings_combine_lists: sort_strings_combine_lists.sort_strings_combine_lists,
  },
  arrays: arrays.arrays,
  sort_words: sort_words.sort_words,
  strings: strings.strings,
  cli: cli.cli,
  curry: curry.curry,
  functions: etc.functions,
  numbers: numbers.numbers,
  objects: objects.objects,
  promises: promises.promises,
  req: req.req,
  requests: requests.requests,
  json: json.json,
  string: string.string,
  ui: ui.ui,
  urls: urls.urls,
  words: words.words
};


/**
 * Export to browser window
 */
if (typeof window === 'object') {
  window.__ = {_map:{}};
  // assign each function to object - but flatten - exports flat list
  // also construct map of types.names - to help user decide which individual functions to include
  for (let type in all) {
    window.__._map[type] = [];
    for (let func in all[type]) {
      window.__[func] = all[type][func];
      window.__._map[type].push(func);
    }
  }
}

module.exports = all;
