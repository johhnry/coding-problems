"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { arrayToString } = require("../../utils/test");
const largestSumOfNonAdjacentNumbers = require("./problem-8");

const testCases = [
  [[2], 2],
  [[-3], -3],
  [[4, 18], 18],
  [[5, 6, 5], 10],
  [[-3, 0, -3], 0],
  [[-3, -2, -3, -2, -1], -1],
  [[2, 4, 6, 2, 5], 13],
  [[5, 1, 1, 5], 10],
  [[4, 3, 10, 11, 4, 8, 2, 5], 28],
  [[-5, 2, 5, 0, -1], 5],
  [[3, 2, -1, 0, 5, -3, 7], 15],
  [[-3, 2, -1, 0, 5, -3, 7], 14],
  [[-3, 2, -1, 0, 5, 7, -3], 9],
  [[-1, 3, 18, 7, 0, 1, 10, 20, -6, 20], 59],
];

describe("Problem 8", function () {
  describe("Returns the largest sum of non adjacent numbers", function () {
    for (const testCase of testCases) {
      const [array, expectedOutput] = testCase;

      it(`${arrayToString(array)} -> ${expectedOutput}`, function () {
        expect(largestSumOfNonAdjacentNumbers(array)).to.equal(expectedOutput);
      });
    }
  });
});
