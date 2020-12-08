export const sleep = function(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}

export const for_each_async = async function(array, fn) {
  for (let t of array) {
    await fn(t)
  }
}
