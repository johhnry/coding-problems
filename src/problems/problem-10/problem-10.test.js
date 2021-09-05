"use strict";
const { describe, it } = require("mocha");
const { expect, assert } = require("chai");
const { arrayToString } = require("../../utils/test");
const autocomplete = require("./problem-10");

const testCases = [
  {
    queryStrings: ["dog", "deer", "deal"],
    tests: [
      ["de", ["deer", "deal"]],
      ["do", ["dog"]],
      ["dee", ["deer"]],
      ["d", ["dog", "deer", "deal"]],
      ["", ["dog", "deer", "deal"]],
      ["deere", []],
      ["dog", ["dog"]],
    ],
  },
  {
    queryStrings: [
      "bonjour",
      "research",
      "incompatible",
      "incompressible",
      "bongiourno",
      "testable",
      "refactorisable",
      "impossible",
      "forgettable",
      "possible",
      "provable",
      "mergeable",
      "nothing",
      "hachable",
      "pourriture",
      "magnifique",
      "jouissif",
      "joulie",
      "powerissif",
    ],
    tests: [
      ["b", ["bonjour", "bongiourno"]],
      ["bon", ["bonjour", "bongiourno"]],
      ["bonj", ["bonjour"]],
      ["incom", ["incompatible", "incompressible"]],
      ["testab", ["testable"]],
      ["po", ["possible", "pourriture", "powerissif"]],
    ],
  },
];

describe("Problem 10", function () {
  describe("Autocompletes strings", function () {
    describe("With query strings", function () {
      for (let i = 0; i < testCases.length; i++) {
        const { queryStrings, tests } = testCases[i];

        describe(`With ${queryStrings.length} query strings`, function () {
          for (let j = 0; j < tests.length; j++) {
            const [input, expectedOutput] = tests[j];

            it(`"${input}" -> ${arrayToString(expectedOutput)}`, function () {
              assert.sameDeepMembers(
                autocomplete(input, queryStrings),
                expectedOutput
              );
            });
          }
        });
      }
    });

    describe("Without any query strings", function () {
      it("returns an empty list", function () {
        expect(autocomplete("de", [])).to.be.empty;
      });
    });
  });
});
