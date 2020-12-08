'use strict';

var exports$1 = require('.');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var exports__default = /*#__PURE__*/_interopDefaultLegacy(exports$1);

/**
 * Anonymous function wrapper - more reliable than ;(()=>{ ... })()
 *    Probem is anonymous function sometimes fails silently, even in try/catch !
 *    This try/catch implementation is more reliable.
 *    Also, don't need leading semicolon, if you're into not using semicolons.
 * @param tryCode
 * @param catchAction
 */
const try_catch = (tryCode, catchAction) => {
  try {
    // hopefully it works:
    tryCode();
  } catch (err) {
    // something broke!
    typeof cconsole === "object" ? cconsole.error(err) : console.error(err);
    // stop and inspect
    if (catchAction === "exit" && typeof process !== "undefined") {
      // exit - only on node
      process.exit();
    } else {
      // debug - will only stop script if you have DevTools opened
      debugger
    }
  }
};
if (typeof window === 'object') {
  // set up for export
  window.ppf = window.ppf||{};
  // export to specific section. User can choose to download one or several of these files
  window.ppf['functions'] = exports__default['default'];
}

var functions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  try_catch: try_catch
});

exports.functions = functions;
exports.try_catch = try_catch;
