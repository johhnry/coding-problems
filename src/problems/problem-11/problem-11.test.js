"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { arrayToString } = require("../../utils/test");
const numberOfUniqueWaysCanClimbStaircase = require("./problem-11");

const testCases = [
  {
    X: [1, 2],
    tests: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 5],
      [5, 8],
      [6, 13],
      [10, 89],
      [25, 121393],
    ],
  },
  {
    X: [1, 3, 5],
    tests: [
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8],
      [10, 47],
      [25, 40893],
      [30, 390257],
    ],
  },
  {
    X: [1, 2, 3, 4, 5],
    tests: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 8],
      [5, 16],
      [6, 31],
      [10, 464],
      [20, 400096],
    ],
  },
  {
    X: [5, 10, 15],
    tests: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 1],
      [10, 2],
      [20, 7],
      [100, 121415],
    ],
  },
];

describe("Problem 11", function () {
  describe("Returns the number of unique ways you can climb a staircase", function () {
    for (const testCase of testCases) {
      describe(`With ${arrayToString(testCase.X)} possible steps`, function () {
        testCase.tests.forEach((test) => {
          it(`N=${test[0]} -> ${test[1]}`, function () {
            expect(
              numberOfUniqueWaysCanClimbStaircase(test[0], testCase.X)
            ).to.equal(test[1]);
          });
        });
      });
    }
  });
});
