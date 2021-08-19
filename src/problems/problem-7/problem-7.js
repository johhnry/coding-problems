"use strict";

/**
 * Node class, you can't modify it
 */
class Node {
  constructor(val, left = undefined, right = undefined) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Counts the number of unival subtrees given a tree
 * @param root the tree root node
 */
function countUnivalSubtrees(root) {
  // Your code here
}

module.exports = {
  Node,
  countUnivalSubtrees,
};
