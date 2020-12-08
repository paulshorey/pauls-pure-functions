/**
 * Anonymous function wrapper - more reliable than ;(()=>{ ... })()
 *    Probem is anonymous function sometimes fails silently, even in try/catch !
 *    This try/catch implementation is more reliable.
 *    Also, don't need leading semicolon, if you're into not using semicolons.
 * @param tryCode
 * @param catchAction
 */
export const try_catch = (tryCode, catchAction) => {
  try {
    // hopefully it works:
    tryCode()
  } catch (err) {
    // something broke!
    typeof cconsole === "object" ? cconsole.error(err) : console.error(err)
    // stop and inspect
    if (catchAction === "exit" && typeof process !== "undefined") {
      // exit - only on node
      process.exit()
    } else {
      // debug - will only stop script if you have DevTools opened
      debugger
    }
  }
}
