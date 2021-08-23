"use strict";
const { expect } = require("chai");
const lengthOfTheLongestSubstringThatContainsAtMost = require("./problem-12");

const testCases = [
  {
    s: "abcba",
    tests: [
      [0, 0],
      [1, 1],
      [2, 3],
      [3, 5],
      [4, 5],
    ],
  },
  {
    s: "abbcbcddbc",
    tests: [
      [0, 0],
      [1, 2],
      [2, 5],
      [3, 9],
      [4, 10],
    ],
  },
  {
    s: "abcbeeddbcdbdaaaddedabcdbdbcbdabbbecdadabbcd",
    tests: [
      [0, 0],
      [1, 3],
      [2, 6],
      [3, 9],
      [4, 15],
      [5, 44],
      [6, 44],
    ],
  },
  {
    s: "lfhaeufgaifugalifglifgaefigaeifgafgafaegfiuagilgfigffgailufgaeifygygveygig",
    tests: [
      [0, 0],
      [1, 2],
      [2, 4],
      [3, 8],
      [4, 11],
      [5, 23],
      [6, 30],
      [7, 61],
      [8, 65],
      [9, 71],
      [10, 74],
      [11, 74],
    ],
  },
];

describe("Problem 12", function () {
  describe("Finds the length of the longest substring that contains at most k distinct characters", function () {
    for (const testCase of testCases) {
      describe(`With s = "${testCase.s}"`, function () {
        testCase.tests.forEach((test) => {
          it(`k = ${test[0]} -> ${test[1]}`, function () {
            expect(
              lengthOfTheLongestSubstringThatContainsAtMost(testCase.s, test[0])
            ).to.equal(test[1]);
          });
        });
      });
    }
  });
});
