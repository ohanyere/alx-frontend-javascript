export default function hasValuesFromArray(set, arr) {
  let n = 0;
  while (n < arr.length) {
    if (!set.has(arr[n])) {
      return false;
    }
    n += 1;
  }
  return true;
}
// module.exports = hasValuesFromArray;
