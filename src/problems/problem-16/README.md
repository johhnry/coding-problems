# Problem 16 (medium)

## Task

A builder is looking to build a row of `N` houses that can be of `K` different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an `N` by `K` matrix where the `nth` row and `kth` column represents the cost to build the `nth` house with `kth` color, return the minimum cost which achieves this goal.

## Function signature

Implement the following function in `src/problems/problem-16/problem-16.js`:

```javascript
/**
 * Returns the minimum cost ensuring that no two neighboring houses are of the same color
 * @param matrix N * K matrix of costs
 */
function computeBuilderMinimumCost(matrix) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 16
```
