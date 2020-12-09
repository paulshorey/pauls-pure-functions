import * as arrays from "./arrays.js"
import * as sort_words from "./sort_words.js"
import * as sort_strings from "./sort_strings.js"
import * as sort_objects from "./sort_objects.js"
import * as strings from "./strings.js"
import * as cli from "./cli.js"
import * as curry from "./curry.js"
import * as functions from "./etc.js"
import * as numbers from "./numbers.js"
import * as objects from "./objects.js"
import * as promises from "./promises.js"
import * as req from "./req.js"
import * as requests from "./requests.js"
import * as json from "./json.js"
import * as string from "./string.js"
import * as ui from "./ui.js"
import * as urls from "./urls.js"
import * as words from "./words.js"

let all = {
  arrays,
  sort_objects,
  sort_strings,
  sort_words,
  strings,
  cli,
  curry,
  functions,
  numbers,
  objects,
  promises,
  req,
  requests,
  json,
  string,
  ui,
  urls,
  words
}


/**
 * Export as a flat list
 */
let __ = {_map:{}}
for (let type in all) {
  console.log(type, typeof all[type], all[type])
  if (!all[type]) {
    throw new Error(type + ' does not exist in ' + (typeof all))
    continue
  }
  __._map[type] = []
  for (let func in all[type]) {
    __[func] = all[type][func]
    __._map[type].push(func)
  }
}

/**
 * Export for browser window
 */
if (typeof window === 'object') {
  window.__ = __
}


export default all
