# Problem 17 (easy)

## Task

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given `A = 3 -> 7 -> 8 -> 10` and `B = 99 -> 1 -> 8 -> 10`, return the node with value `8`.

In this example, assume nodes with the same value are the exact same node objects.

Do this in `O(M + N)` time (where `M` and `N` are the lengths of the lists) and constant space.

## Function signature

Implement the following function in `src/problems/problem-17/problem-17.js`:

```javascript
/**
 * Finds the intersecting node given two singly linked lists
 * @param linked1 first linked list
 * @param linked2 second linked list
 */
function findIntersectingNode(linked1, linked2) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 17
```
