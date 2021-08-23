# Problem 11 (hard)

## Task

There exists a staircase with N steps, and you can climb up to n steps in a set X ({1, 2} means that you can climb either 1 or 2 steps at a time). Given N and a set of possible steps X, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4 and X = {1, 2}, then there are 5 unique ways:

- 1, 1, 1, 1
- 2, 1, 1
- 1, 2, 1
- 1, 1, 2
- 2, 2

## Function signature

Implement the following function in `src/problems/problem-11/problem-11.js`:

```javascript
/**
 * Returns the number of unique ways you can climb a staircase
 * @param N number of stairs
 * @param X set of possible steps
 */
function numberOfUniqueWaysCanClimbStaircase(N, X) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 11
```
