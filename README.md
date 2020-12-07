# universal-common-scripts

Library like underscore/lodash, but for data manipulation. Very small. Still experimental. Please see `./docs` documentation.

##

# Install

For now, **this can only be used as an ESM (ES Modules) import, for best results with front-end compilers like Webpack**. For Node.js projects using CJS (CommonJS), it will not work - until you configure your Node.js app to use ESM.

ESM is the new standard on the web, but Node app deverlopers are slow to convert, because it's a pain in the butt. This is probably one reason why there are still so few Node.js back-ends. **The main benefit to Node.js is being able to use the same code on front-end and back-end. Ironically, this was not possible until recently.**

1. **To convert your Node.js app to ESM,** (1) add `"type":"module"` to `package.json`, and (2) start your server with the `--experimental-specifier-resolution=node` flag. Go through your entire code base, and convert all `require` statements to `import`. Then make sure that all your node_modules are still compatible. \
  ```
  // recommended:
  import { asort_by_rating_and_position } from "universal-common-scripts/src/asort_strings"
  // or:
  import string_sort_functions from "universal-common-scripts/src/asort_strings"
  // or:
  import everything from "universal-common-scripts"
  ```

2. Or, use this easy shortcut: [npm esm package](https://www.npmjs.com/package/esm) and **continue with your CommonJS project**. \
  [Great read - release statement from 2018](https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c) \
  [ESM documentation on GitHub](https://github.com/standard-things/esm) Simply (1) wrap your entire project code in a decorator function (2) or add `esm` as a flag when you start your server.

##

# Use

## Example: `asort_by_rating_and_position()` algorithmic sort
The "a" stands for "algorithmic". It's a time saving function which takes care of writing the algorithm, so you can just get on with your business logic.

You have a list of cities, ordered from your most favorite to least favorite. Let's forget about the Pandemic for this example:
`let cities = ['Zurich', 'Paris', 'Kansas City', 'New York', 'Copenhagen', 'Duluth']`

And you have a cost of living index.
`let ratings = { 'Zurich':1, 'Paris':1, 'Kansas City':10, 'New York':5, 'Copenhagen':5, 'Duluth':7 }`

Let's find the best compromise between where we want to live and what we can afford.

If we sort them using only by `cost_of_living`, we'd be completely ignoring the original order, which is our preferences. To combine the two preferences (sort with rating), you'd have to write a pretty complex `[].sort()` function. Or, you could run through and change the ratings before sorting, which works. However, when you want to adjust the algorithm, you'd have to manage your code.

This is where this library steps in. Now you can sort by both - the original sort order, combined with the rating, in one easy function:
`asort_by_rating_and_position(cities, ratings)`

**The output will be something like this.**
`['Kansas City', 'New York', 'Duluth', 'Copenhagen', 'Zurich', 'Paris']`
Notice that 'Kansas City' jumped 2 spots, because it's rating was very high. Duluth jumped one spot ahead because it's rating was also pretty high. The first 2 cities dropped far down because their ratings were very low compared to the others.

You can also specify how much preference be given to the original sort order. High number will make it hardly budge at all. Low number will make higher rated items float to the top more easily.

**This is much more useful and makes more sense with a much larger dataset of course!** This was essential when creating [https://besta.domains], shuffling around thousands of words and domain extensions, with huge lists of ratings and preferences.

## Other functions

`str_hash()` to make a unique number out of a long or short string of text. Not for security or cryptography, but helps a lot to make a unique ID.

`syllable_count()` returns number of syllables for a given word

`ends_in_vowel()` returns true if the input word ends in a vowel

`asort_objects_by_property()` just like `asort_by_rating_and_position()`, but instead of taking a list of items and object of ratings as separate parameters, it takes a list of objects, and sorts the list based on a property of each object.

`sleep()` returns a Promise after a number of milliseconds. Use with async/await to mimic other programming languages like Bash

`forEachAsync()` returns a Promise when finished - executes a number of promises synchronously - good for executing an async callback on each item in an array

`parse_error_message()` Error messages come in all shapes and sizes. From simple string, to standard `new Error('...')` to Axios/fetch promises containing an error... Returns a string which you can display to your user, without fear.

And many more...

## Documentation coming soon

For now, please look at the code, inside `./src` folder. Uses standard [JSDoc](https://documentation.js.org/) format.

# About

I use these functions in [https://besta.domains], [https://wordio.co], [https://paulshorey.com], and others. I treat these as my code snippets. If it seems like it will be useful in the future, not just for the project at hand, but for many different projects, then I include the script into this library. If you'd like to contribute, please don't be shy. Lets build something together! ~ [Paul Shorey .com](https://paulshorey.com)



