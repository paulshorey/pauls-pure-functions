'use strict';

require('.');
var arrays = require('./arrays-516a1805.js');
var cli = require('./cli-b67e0388.js');
var etc = require('./etc-162604ef.js');
var sort_strings_combine_lists = require('./sort_strings_combine_lists-52455d6a.js');
var sort_objects_by_property_and_position = require('./sort_objects_by_property_and_position-a7cc2b70.js');
var sort_words = require('./sort_words-2244fb21.js');
var strings = require('./strings-4244c7de.js');
var numbers = require('./numbers-21716da0.js');
var objects = require('./objects-87a7f2d1.js');
var promises = require('./promises-9b0e8438.js');
var req = require('./req-d8aefb4b.js');
var string = require('./string-34ea3bc7.js');
var urls = require('./urls-22aa4507.js');
var requests = require('./requests-37ac99c3.js');
var json = require('./json-ca628c1c.js');
var ui = require('./ui-2cd7a31d.js');
var words = require('./words-99a9e95a.js');

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
  window.ppf = {_map:{}};
  // assign each function to object - but flatten - exports flat list
  // also construct map of types.names - to help user decide which individual functions to include
  for (let type in all) {
    window.ppf._map[type] = [];
    for (let func in all[type]) {
      window.ppf[func] = all[type][func];
      window.ppf._map[type].push(func);
    }
  }
}

module.exports = all;
