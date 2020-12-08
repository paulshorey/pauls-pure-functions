import sort_strings_by_extension from "./sort_strings/sort_strings_by_extension.js"
import sort_strings_by_length_and_position from "./sort_strings/sort_strings_by_length_and_position.js"
import sort_strings_by_length_asc from "./sort_strings/sort_strings_by_length_asc.js"
import sort_strings_by_matches_in_list from "./sort_strings/sort_strings_by_matches_in_list.js"
import sort_strings_by_rating from "./sort_strings/sort_strings_by_rating.js"
import sort_strings_by_rating_and_position from "./sort_strings/sort_strings_by_rating_and_position.js"
import sort_strings_combine_lists from "./sort_strings/sort_strings_combine_lists.js"
import sort_objects_by_property from "./sort_objects/sort_objects_by_property.js"
import sort_objects_by_property_and_position from "./sort_objects/sort_objects_by_property_and_position.js"
import * as arrays from "./arrays.js"
import * as sort_words from "./sort_words.js"
import * as strings from "./strings.js"
import * as cli from "./cli.js"
import * as functions from "./functions.js"
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

let ppf = {
  sort_objects: {
    sort_objects_by_property,
    sort_objects_by_property_and_position,
  },
  sort_strings: {
    sort_strings_by_extension,
    sort_strings_by_length_and_position,
    sort_strings_by_length_asc,
    sort_strings_by_matches_in_list,
    sort_strings_by_rating,
    sort_strings_by_rating_and_position,
    sort_strings_combine_lists,
  },
  arrays,
  sort_words,
  strings,
  cli,
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

if (typeof window === 'object') {
  window.ppf = ppf
}

export default ppf
