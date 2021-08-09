function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateArrayOfRandomIntegers(options) {
  const array = [];

  for (let i = 0; i < options.size; i++) {
    array.push(randomInteger(options.min, options.max));
  }

  return array;
}

function arrayToString(array) {
  let result = "[";

  for (let i = 0; i < array.length; i++) {
    result += array[i].toString();
    if (i < array.length - 1) result += ", ";
  }

  return result + "]";
}

module.exports = {
  arrayToString,
  randomInteger,
  generateArrayOfRandomIntegers,
};
