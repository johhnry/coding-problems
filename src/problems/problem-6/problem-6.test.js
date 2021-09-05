"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const numberOfWaysItCanBeDecoded = require("./problem-6");

const testCases = [
  ["111", 3],
  ["2626", 4],
  ["84662", 1],
  ["123", 3],
  ["12345", 3],
  ["123231", 6],
  ["1232510", 6],
  ["101", 1],
  ["1111111111", 89],
];

describe("Problem 6", function () {
  describe("Can decode messages", function () {
    for (const testCase of testCases) {
      const [input, expectedOutput] = testCase;

      it(`${input} can be decoded ${expectedOutput} times`, function () {
        expect(numberOfWaysItCanBeDecoded(input)).to.equal(expectedOutput);
      });
    }
  });
});
