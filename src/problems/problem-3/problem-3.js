"use strict";

class Node {
  constructor(val, left = undefined, right = undefined) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

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

module.exports = {
  Node,
  serialize,
  deserialize,
};
