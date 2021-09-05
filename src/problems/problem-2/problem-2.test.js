"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { arrayToString } = require("../../utils/test");
const productOfAllNumbersExceptAtI = require("./problem-2");

const testCases = [
  {
    input: [1, 2, 3, 4, 5],
    expectedOutput: [120, 60, 40, 30, 24],
  },
  {
    input: [3, 2, 1],
    expectedOutput: [2, 3, 6],
  },
  {
    input: [8, 2, 3, 1, 4],
    expectedOutput: [24, 96, 64, 192, 48],
  },
];

describe("Problem 2", function () {
  describe("General case", function () {
    testCases.forEach((testCase) => {
      const { input, expectedOutput } = testCase;

      it(`${arrayToString(input)} -> ${arrayToString(
        expectedOutput
      )}`, function () {
        expect(productOfAllNumbersExceptAtI(input)).deep.equal(expectedOutput);
      });
    });
  });

  describe("Edge cases", function () {});
});
