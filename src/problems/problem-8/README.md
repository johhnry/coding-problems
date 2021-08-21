# Problem 8 (hard)

## Task

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be `0` or negative.

For example, `[2, 4, 6, 2, 5]` should return `13`, since we pick `2`, `6`, and `5`. `[5, 1, 1, 5]` should return `10`, since we pick `5` and `5`.

Follow-up: Can you do this in O(N) time and constant space?

Note: a sum can be a single number or more

## Function signature

Implement the following function in `src/problems/problem-8/problem-8.js`:

```javascript
/**
 * Returns the largest sum of non-adjacent numbers
 * @param array list of integers
 */
function largestSumOfNonAdjacentNumbers(array) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 8
```
