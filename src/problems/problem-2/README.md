# Problem 2 (hard)

## Task

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

## Function signature

Implement the following function in `src/problem-2/problem-2.js`:

```javascript
/**
 * Returns a new list where each element at index i
 * is the product of all other elements expect the one at i
 * @param array the array of integers
 */
function productOfAllNumbersExceptAtI(array) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 2
```
