'use strict';

var arrays = require('./arrays-45ab2ce1.js');
var cli = require('./cli-1896ceac.js');
var functions = require('./functions-fd1302e3.js');
var sort_strings_combine_lists = require('./sort_strings_combine_lists-996612c6.js');
var sort_objects_by_property_and_position = require('./sort_objects_by_property_and_position-fa96a1b2.js');
var sort_words = require('./sort_words-98c68adf.js');
var strings = require('./strings-85c08367.js');
var numbers = require('./numbers-af33ade1.js');
var objects = require('./objects-36f81150.js');
var promises = require('./promises-d0894a9a.js');
var req = require('./req-8def5b5a.js');
var string = require('./string-0ea18386.js');
var urls = require('./urls-3b06f005.js');
var requests = require('./requests-772aad16.js');
var json = require('./json-7d5cf663.js');
var ui = require('./ui-16fe8385.js');
var words = require('./words-07afb830.js');

let ppf = {
  sort_objects: {
    sort_objects_by_property: sort_objects_by_property_and_position.sort_objects_by_property,
    sort_objects_by_property_and_position: sort_objects_by_property_and_position.sort_objects_by_property_and_position,
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
  functions: functions.functions,
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

if (typeof window === 'object') {
  window.ppf = ppf;
}

module.exports = ppf;
