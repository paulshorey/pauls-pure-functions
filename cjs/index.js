'use strict';

require('.');
var arrays = require('./arrays-1cf3aea1.js');
var cli = require('./cli-680ba50e.js');
var curry = require('./curry-aec9f9d2.js');
var etc = require('./etc-82b2be90.js');
var sort_words = require('./sort_words-7933a57b.js');
var sort_strings = require('./sort_strings-0f51121a.js');
var sort_objects = require('./sort_objects-ef14424d.js');
var strings = require('./strings-c3bb4ffd.js');
var numbers = require('./numbers-f81593f1.js');
var objects = require('./objects-ea476311.js');
var promises = require('./promises-b4d71ce7.js');
var req = require('./req-f09be8ae.js');
var string = require('./string-e1d2964c.js');
var urls = require('./urls-2314b3ca.js');
var requests = require('./requests-4b79dbd5.js');
var json = require('./json-5de832fa.js');
var ui = require('./ui-a3b77db9.js');
var words = require('./words-37c1897a.js');

let all = {
  arrays: arrays.arrays,
  sort_objects: sort_objects.sort_objects,
  sort_strings: sort_strings.sort_strings,
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
 * Export as a flat list
 */
let __ = {_map:{}};
for (let type in all) {
  __._map[type] = [];
  for (let func in all[type]) {
    __[func] = all[type][func];
    __._map[type].push(func);
  }
}

/**
 * Export for browser window
 */
if (typeof window === 'object') {
  window.__ = __;
}

module.exports = __;
