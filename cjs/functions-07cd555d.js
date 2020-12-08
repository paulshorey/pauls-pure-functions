'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

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


/**
 * Export to browser window
 */
if (typeof window === 'object') {
(async function() {
    let exports = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('.')); });
    // export to window object
    window.ppf = window.ppf || {};
    // flatten
    for (let func in exports) {
      window.ppf[func] = exports[func];
    }
  }());
}

var functions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  try_catch: try_catch
});

exports.functions = functions;
exports.try_catch = try_catch;
