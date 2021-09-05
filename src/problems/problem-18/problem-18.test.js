"use strict";
const { expect } = require("chai");
const minimumNumberOfRoomsRequired = require("./problem-18");

const testCases = [
  {
    intervals: [],
    min: 0,
  },
  {
    intervals: [[7, 67]],
    min: 1,
  },
  {
    intervals: [
      [30, 75],
      [0, 50],
      [60, 150],
    ],
    min: 2,
  },
  {
    intervals: [
      [0, 50],
      [50, 100],
    ],
    min: 1,
  },
  {
    intervals: [
      [0, 50],
      [10, 60],
      [20, 70],
      [30, 80],
    ],
    min: 4,
  },
  {
    intervals: [
      [928, 926],
      [475, 286],
      [27, 863],
      [894, 724],
      [190, 909],
      [280, 11],
      [816, 805],
      [461, 931],
      [747, 804],
      [410, 971],
    ],
    min: 5,
  },
  {
    intervals: [
      [123, 60],
      [81, 166],
      [28, 167],
      [29, 13],
      [137, 63],
      [174, 12],
      [102, 163],
      [14, 143],
      [109, 186],
      [142, 167],
      [156, 199],
      [92, 127],
      [136, 130],
      [151, 53],
      [131, 113],
      [40, 69],
      [58, 89],
      [168, 93],
      [162, 177],
      [38, 22],
      [11, 7],
      [101, 159],
      [140, 49],
      [198, 69],
      [15, 172],
      [184, 16],
      [1, 74],
      [162, 132],
      [153, 166],
      [4, 78],
      [65, 52],
      [199, 133],
      [38, 96],
      [92, 42],
      [24, 70],
      [188, 153],
      [19, 133],
      [1, 8],
      [141, 35],
      [117, 159],
      [160, 32],
      [11, 11],
      [68, 199],
      [125, 161],
      [147, 111],
      [141, 86],
      [50, 69],
      [136, 107],
      [107, 174],
      [97, 163],
    ],
    min: 14,
  },
];

function intervalsToString(intervals) {
  let result = "[";
  for (let i = 0; i < intervals.length; i++) {
    result += `(${intervals[i][0]}, ${intervals[i][1]})`;
    if (i < intervals.length - 1) result += ", ";
  }
  return result + "]";
}

describe("Problem 18", function () {
  describe("Finds the minimum number of rooms required", function () {
    for (const testCase of testCases) {
      const { intervals, min } = testCase;

      it(`${intervalsToString(intervals)} -> ${min}`, function () {
        expect(minimumNumberOfRoomsRequired(intervals)).to.equal(min);
      });
    }
  });
});
