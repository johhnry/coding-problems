"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const minimumNumberOfSteps = require("./problem-20");

const testCases = [
  {
    board: [
      [false, false, false, false],
      [true, true, false, true],
      [false, false, false, false],
      [false, false, false, false],
    ],
    tests: [
      { start: [3, 0], end: [0, 0], steps: 7 },
      { start: [0, 3], end: [0, 0], steps: 3 },
      { start: [3, 3], end: [0, 0], steps: 6 },
    ],
  },
  {
    board: [
      [false, false, false],
      [false, true, true],
      [false, false, false],
    ],
    tests: [
      { start: [2, 0], end: [0, 2], steps: 4 },
      { start: [2, 2], end: [0, 2], steps: 6 },
      { start: [0, 1], end: [2, 1], steps: 4 },
    ],
  },
  {
    board: [
      [false, false, false],
      [true, true, true],
      [false, false, false],
    ],
    tests: [
      { start: [2, 0], end: [0, 2], steps: undefined },
      { start: [0, 1], end: [2, 0], steps: undefined },
      { start: [0, 1], end: [0, 2], steps: 1 },
    ],
  },
  {
    board: [
      [false, true, false, false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, true, false, true, true, false, false, true],
      [false, false, false, true, false, false, false, false, false, false],
      [false, true, false, false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, true, false, false, false, false, false, false, false, false],
      [true, false, false, false, false, true, true, true, false, true],
      [false, false, false, false, false, false, false, false, false, false],
    ],
    tests: [
      { start: [0, 0], end: [9, 9], steps: 18 },
      { start: [3, 0], end: [3, 7], steps: 9 },
      { start: [0, 9], end: [9, 9], steps: 11 },
      { start: [0, 9], end: [0, 0], steps: 11 },
      { start: [5, 5], end: [9, 0], steps: 9 },
      { start: [5, 5], end: [0, 9], steps: 9 },
    ],
  },
];

function boardToString(board) {
  let result = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[i][j] ? 1 : 0;
    }
    result += "\n";
  }
  return result;
}

describe("Problem 20", function () {
  describe("Finds the intersecting node given two singly linked lists", function () {
    for (const testCase of testCases) {
      const { board, tests } = testCase;

      describe(`With board \n\n${boardToString(board)}`, function () {
        for (const test of tests) {
          const { start, end, steps } = test;

          it(`from (${start[0]}, ${start[1]}) to (${end[0]}, ${end[1]}) -> ${steps}`, function () {
            expect(minimumNumberOfSteps(board, start, end)).to.equal(steps);
          });
        }
      });
    }
  });
});
