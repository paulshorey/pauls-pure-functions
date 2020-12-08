'use strict';

require('.');
var arrays = require('./arrays-9ee331e1.js');
var cli = require('./cli-deaa9a47.js');
var etc = require('./etc-f407e2fb.js');
var sort_strings_combine_lists = require('./sort_strings_combine_lists-52455d6a.js');
var sort_objects_by_property_and_position = require('./sort_objects_by_property_and_position-a7cc2b70.js');
var sort_words = require('./sort_words-89faac19.js');
var strings = require('./strings-bf9cc1da.js');
var numbers = require('./numbers-4e3cbf2e.js');
var objects = require('./objects-08018be4.js');
var promises = require('./promises-712595da.js');
var req = require('./req-38a91f20.js');
var string = require('./string-520962f4.js');
var urls = require('./urls-e2cb58e4.js');
var requests = require('./requests-59796345.js');
var json = require('./json-bd083061.js');
var ui = require('./ui-f386e069.js');
var words = require('./words-e454c116.js');

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
