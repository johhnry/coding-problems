"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { arrayToString } = require("../../utils/test");
const firstMissingPositiveInteger = require("./problem-4");

const testCases = [
  {
    input: [3, 4, -1, 1],
    expectedOutput: 2,
  },
  {
    input: [1, 2, 0],
    expectedOutput: 3,
  },
  {
    input: [1, 2, 3, 4],
    expectedOutput: 5,
  },
  {
    input: [1],
    expectedOutput: 2,
  },
  {
    input: [0, 0, 0],
    expectedOutput: 1,
  },
  {
    input: [-1, -5, 4],
    expectedOutput: 1,
  },
];

describe("Problem 4", function () {
  testCases.forEach((testCase) => {
    const { input, expectedOutput } = testCase;

    it(`${arrayToString(input)} -> ${expectedOutput}`, function () {
      expect(firstMissingPositiveInteger(input)).to.eql(expectedOutput);
    });
  });
});
