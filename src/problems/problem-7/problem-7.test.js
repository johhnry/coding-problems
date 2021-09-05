"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { Node, countUnivalSubtrees } = require("./problem-7");

function treeToString(root) {
  if (root === undefined) return "_";
  if (root.left === undefined && root.right === undefined)
    return `N[${root.val}]`;
  return `N[${root.val},${treeToString(root.left)},${treeToString(
    root.right
  )}]`;
}

const testCases = [
  [
    new Node(
      0,
      new Node(1),
      new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
    ),
    5,
  ],
  [new Node(0), 1],
  [new Node(0, new Node(0)), 2],
  [new Node(1, new Node(1, new Node(1, new Node(1)))), 4],
  [new Node(1, new Node(1, undefined, new Node(1))), 3],
  [new Node(0, new Node(0, new Node(0))), 3],
  [
    new Node(
      0,
      new Node(0, new Node(0)),
      new Node(1, new Node(1, undefined, new Node(1)))
    ),
    5,
  ],
  [
    new Node(
      1,
      new Node(0),
      new Node(
        0,
        new Node(0, new Node(0)),
        new Node(1, new Node(1, undefined, new Node(1)))
      )
    ),
    6,
  ],
];

describe("Problem 7", function () {
  describe("Counts unival subtrees", function () {
    for (const testCase of testCases) {
      const [tree, expectedOutput] = testCase;

      it(`${treeToString(
        tree
      )} -> ${expectedOutput} unival subtrees`, function () {
        expect(countUnivalSubtrees(tree)).to.equal(expectedOutput);
      });
    }
  });
});
