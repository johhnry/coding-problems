# Problem 15 (hard)

## Task

Given an array of integers and a number `k`, where `1 <= k <= length` of the array, compute the maximum values of each subarray of length `k`.

For example, given `array = [10, 5, 2, 7, 8, 7]` and `k = 3`, we should get: `[10, 7, 8, 8]`, since:

- `10 = max(10, 5, 2)`
- `7 = max(5, 2, 7)`
- `8 = max(2, 7, 8)`
- `8 = max(7, 8, 7)`

Do this in `O(n)` time and `O(k)` space. You can modify the input array in-place.

## Function signature

Implement the following function in `src/problems/problem-15/problem-15.js`:

```javascript
/**
 * Computes the maximum values of each subarray of length k
 * @param array input array
 * @param k subarray length
 * @returns array of maximum values
 */
function maximumValuesOfEachSubarray(array, k) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 15
```
