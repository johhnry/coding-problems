"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { arrayToString } = require("../../utils/test");
const originalSentence = require("./problem-19");

const testCases = [
  {
    words: ["suis", "je"],
    string: "jesuiscontent",
    possibleReconstructions: [undefined],
  },
  {
    words: ["quick", "brown", "the", "fox"],
    string: "thequickbrownfox",
    possibleReconstructions: [["the", "quick", "brown", "fox"]],
  },
  {
    words: ["bed", "bath", "bedbath", "and", "beyond"],
    string: "bedbathandbeyond",
    possibleReconstructions: [
      ["bed", "bath", "and", "beyond"],
      ["bedbath", "and", "beyond"],
    ],
  },
  {
    words: ["a", "c", "f", "fc", "ca"],
    string: "acfccafc",
    possibleReconstructions: [
      ["a", "c", "f", "c", "c", "a", "f", "c"],
      ["a", "c", "fc", "c", "a", "f", "c"],
      ["a", "c", "fc", "ca", "f", "c"],
      ["a", "c", "fc", "ca", "fc"],
      ["a", "c", "f", "c", "ca", "fc"],
      ["a", "c", "f", "c", "ca", "f", "c"],
    ],
  },
];

describe("Problem 18", function () {
  describe("Finds the minimum number of rooms required", function () {
    for (const testCase of testCases) {
      const { words, string, possibleReconstructions } = testCase;

      it(`${arrayToString(words)} ${string} -> ${arrayToString(
        possibleReconstructions
      )}`, function () {
        expect(possibleReconstructions).to.deep.include(
          originalSentence(words, string)
        );
      });
    }
  });
});
