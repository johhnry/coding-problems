/**
 * Converts an array to string
 * @param array array to convert
 * @param {*} maxTreshold max size of the array before it gets truncated
 * @param {*} padding number of elements to display when truncated
 * @returns
 */
function arrayToString(array, maxTreshold, padding = 5) {
  let result = "[";

  const addToResult = (s, e) => {
    for (let i = s; i < e; i++) {
      if (Array.isArray(array[i])) {
        result += arrayToString(array[i], maxTreshold, padding);
      } else {
        result += array[i].toString();
      }
      if (i < array.length - 1) result += ", ";
    }
  };

  if (maxTreshold && array.length > maxTreshold) {
    addToResult(0, padding);
    result += `... (${array.length - padding * 2} more items), `;
    addToResult(array.length - padding, array.length);
  } else {
    addToResult(0, array.length);
  }

  return result + "]";
}

module.exports = {
  arrayToString,
};
