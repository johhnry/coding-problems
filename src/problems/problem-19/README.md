# Problem 19 (medium)

## Task

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return `undefined`.

For example, given the set of words `'quick'`, `'brown'`, `'the'`, `'fox'`, and the string `"thequickbrownfox"`, you should return `['the', 'quick', 'brown', 'fox']`.

Given the set of words `'bed'`, `'bath'`, `'bedbath'`, `'and'`, `'beyond'`, and the string `"bedbathandbeyond"`, return either `['bed', 'bath', 'and', 'beyond']` or `['bedbath', 'and', 'beyond']`.

## Function signature

Implement the following function in `src/problems/problem-19/problem-19.js`:

```javascript
/**
 * Returns the original sentence in a list
 * @param words array of words
 * @param string string made up of some of those words
 */
function originalSentence(words, string) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 19
```
