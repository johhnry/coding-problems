"use strict";

/**
 * Constructs a pair
 */
function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

/**
 * Returns the first element of a pair
 * @param pair
 */
function car(pair) {
  // Your code here
  return pair((a) => a);
}

/**
 * Returns the last element of a pair
 * @param pair
 */
function cdr(pair) {
  // Your code here
}

module.exports = { cons, car, cdr };
