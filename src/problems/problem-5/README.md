# Problem 5 (medium)

## Task

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:

```javascript
function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}
```

Implement `car` and `cdr`.

## Function signature

Implement the following function in `src/problem-5/problem-5.js`:

```javascript
/**
 * Returns the first element of a pair
 * @param pair
 */
function car(pair) {
  // Your code here
}

/**
 * Returns the last element of a pair
 * @param pair
 */
function cdr(pair) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 5
```
