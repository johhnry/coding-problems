"use strict";
const { expect } = require("chai");
// const { arrayToString } = require("../../utils/test");
const computeBuilderMinimumCost = require("./problem-16");

const testCases = [
  {
    matrix: [[1]],
    cost: 1,
  },
  {
    matrix: [
      [1, 5],
      [0, 30],
    ],
    cost: 5,
  },
  {
    matrix: [[0, 5, 7, 2]],
    cost: 0,
  },
  {
    matrix: [
      [0, 40],
      [0, 50],
      [0, 100],
    ],
    cost: 50,
  },
  {
    matrix: [
      [0, 5, 7, 2],
      [0, 30, 5, 1],
      [6, 3, 0, 3],
    ],
    cost: 1,
  },
  {
    matrix: [
      [1, 2, 5],
      [2, 3, 4],
      [0, 1, 3],
    ],
    cost: 4,
  },
  {
    matrix: [
      [15, 2, 5],
      [3, 1, 3],
      [9, 0, 9],
    ],
    cost: 5,
  },
  {
    matrix: [
      [0, 5, 3],
      [2, 7, 8],
      [0, 13, 7],
      [0, 25, 30],
      [0, 2, 0],
    ],
    cost: 12,
  },
  {
    matrix: [
      [2, 8, 8, 0, 7, 4, 0, 3, 3, 2],
      [2, 0, 1, 1, 2, 9, 5, 4, 4, 0],
      [6, 2, 5, 0, 4, 1, 3, 3, 2, 0],
      [0, 2, 8, 9, 9, 7, 2, 6, 3, 7],
      [4, 3, 5, 7, 4, 3, 0, 8, 9, 1],
      [2, 7, 3, 3, 2, 9, 4, 2, 7, 8],
      [1, 0, 1, 9, 4, 6, 4, 7, 7, 4],
      [9, 3, 3, 5, 8, 4, 7, 8, 7, 0],
      [4, 1, 4, 4, 5, 8, 4, 8, 2, 4],
      [4, 2, 3, 9, 2, 7, 5, 6, 0, 2],
    ],
    cost: 3,
  },
];

describe("Problem 16", function () {
  describe("Returns the minimum cost ensuring that no two neighboring houses are of the same color", function () {
    for (const testCase of testCases) {
      const { matrix, cost } = testCase;

      it(`For matrix ${matrix} -> ${cost}`, function () {
        expect(computeBuilderMinimumCost(matrix)).to.be.equal(cost);
      });
    }
  });
});
