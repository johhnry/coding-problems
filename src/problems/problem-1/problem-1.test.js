"use strict";
const { expect } = require("chai");
const { arrayToString } = require("../../utils/test");
const twoElementsAddUpTo = require("./problem-1");

const testSet = [
  {
    array: [10, 15, 3, 7],
    k: [17, 11, 18],
    expectedResult: [true, false, true],
  },
  {
    array: [1, 5, 3, 100],
    k: [101],
    expectedResult: [true],
  },
  {
    array: [0, 0, 0, 0],
    k: [1, 0],
    expectedResult: [false, true],
  },
  {
    array: [10, 20, 5, 543, 21, 45],
    k: [10, 25, 588, 15, 1001, 67],
    expectedResult: [false, true, true, true, false, false],
  },
];

describe("Problem 1", function () {
  describe("General case", function () {
    testSet.forEach((testCase) => {
      const { array, k, expectedResult } = testCase;

      describe(`Tests for ${arrayToString(array)}`, function () {
        for (let i = 0; i < k.length; i++) {
          it(`k = ${k[i]} => ${expectedResult[i]}`, function () {
            expect(twoElementsAddUpTo(array, k[i])).to.be.equal(
              expectedResult[i]
            );
          });
        }
      });
    });
  });

  describe("Edge cases", function () {
    it("Returns false if the given array is empty", function () {
      expect(twoElementsAddUpTo([], 0)).to.be.false;
    });

    it("Returns false if the given array has only one element", function () {
      expect(twoElementsAddUpTo([2], 4)).to.be.false;
    });
  });
});
