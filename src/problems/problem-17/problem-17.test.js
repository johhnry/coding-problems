"use strict";
const { expect } = require("chai");
const { Node, findIntersectingNode } = require("./problem-17");

const testCases = [
  {
    linked1: [0, 5],
    linked2: [8],
    knot: [3, 7],
  },
  {
    linked1: [3, 7],
    linked2: [99, 1],
    knot: [8, 10],
  },
  {
    linked1: [3],
    linked2: [10],
    knot: [7, 8, 10],
  },
  {
    linked1: [3, 7, 8],
    linked2: [5, 1, 8, 9],
    knot: [10],
  },
  {
    linked1: [9, 19, 4, 0, 14, 11, 15, 1, 12, 10],
    linked2: [8, 1, 0, 14, 16, 10, 17, 6, 3, 6],
    knot: [7, 3, 2, 1],
  },
];

function linkedListFromArray(array) {
  const root = new Node(array[0]);
  let currentNode = root;

  for (let i = 1; i < array.length; i++) {
    currentNode.next = new Node(array[i]);
    currentNode = currentNode.next;
  }

  return root;
}

function arrayToLinkedListString(array) {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    result += `${array[i]} -> `;
  }
  return result + array[array.length - 1];
}

function lastElement(linkedList) {
  if (!linkedList.next) return linkedList;
  return lastElement(linkedList.next);
}

describe("Problem 17", function () {
  describe("Finds the intersecting node given two singly linked lists", function () {
    for (const testCase of testCases) {
      const { linked1, linked2, knot } = testCase;

      const linked1String = arrayToLinkedListString(linked1.concat(knot));
      const linked2String = arrayToLinkedListString(linked2.concat(knot));

      const knt = linkedListFromArray(knot);
      const lnk1 = linkedListFromArray(linked1);
      const lnk2 = linkedListFromArray(linked2);

      lastElement(lnk1).next = knt;
      lastElement(lnk2).next = knt;

      it(`A = ${linked1String} / B = ${linked2String} / => ${knt.value}`, function () {
        expect(findIntersectingNode(lnk1, lnk2)).to.eql(knt);
      });
    }
  });
});
