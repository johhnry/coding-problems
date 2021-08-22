# Problem 10 (medium)

## Task

Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings, return all strings in the set that have `s` as prefix.

For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.

Follow up: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

## Function signature

Implement the following function in `src/problems/problem-10/problem-10.js`:

```javascript
/**
 * Returns all strings in the set that have `s` as prefix
 * @param s string to query
 * @param queryStrings list of all possible strings
 */
function autocomplete(s, queryStrings) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 10
```
