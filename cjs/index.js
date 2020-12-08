'use strict';

require('.');
var arrays = require('./arrays-1cf3aea1.js');
var cli = require('./cli-680ba50e.js');
var curry = require('./curry-d74f3b52.js');
var etc = require('./etc-82b2be90.js');
var sort_strings_combine_lists = require('./sort_strings_combine_lists-67cf99af.js');
var sort_objects_by_property_and_position = require('./sort_objects_by_property_and_position-ffeb4423.js');
var sort_words = require('./sort_words-7933a57b.js');
var strings = require('./strings-35b9ce9b.js');
var numbers = require('./numbers-f81593f1.js');
var objects = require('./objects-ea476311.js');
var promises = require('./promises-37f835ae.js');
var req = require('./req-f09be8ae.js');
var string = require('./string-d07ac856.js');
var urls = require('./urls-d02ce0a0.js');
var requests = require('./requests-4fe498d4.js');
var json = require('./json-5de832fa.js');
var ui = require('./ui-a3b77db9.js');
var words = require('./words-37c1897a.js');

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
