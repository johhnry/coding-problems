# Problem 3 (medium)

## Task

Given the root to a binary tree, implement `serialize(root)`, which serializes the tree into a string, and `deserialize(s)`, which deserializes the string back into the tree.

For example, given the following `Node` class

```python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

The following test should pass:

```python
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

## Function signature

Implement the following function in `src/problem-3/problem-3.js`:

```javascript
/**
 * Serializes a given tree into a string
 * @param root the root node of the tree
 */
function serialize(root) {
  // Your code here
}

/**
 * Deserializes a string into a tree object
 * @param s the serialized tree
 */
function deserialize(s) {
  // Your code here
}
```

### Run the tests

To check if your solution is right, run the tests:

```shell
$ npm run test:problem 3
```
