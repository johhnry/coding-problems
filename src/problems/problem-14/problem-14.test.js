"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const lengthOfLongestAbsolutePathToFileInFileSystem = require("./problem-14");

const testCases = [
  {
    fileSystem: "",
    result: 0,
  },
  {
    fileSystem: "dir",
    result: 3,
  },
  { fileSystem: "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext", result: 20 },
  {
    fileSystem:
      "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext",
    result: 32,
  },
  { fileSystem: "dir\n\tdir1\n\t\tdir2\n\t\t\tdir3", result: 18 },
  {
    fileSystem: "dir\n\tdir1\n\t\tdir2\n\t\t\tdir3\n\t\tdirdirdirdir",
    result: 21,
  },
  {
    fileSystem: "dir\n\tdira\n\tdiraa\n\tdirbb\n\tdiraaa\n\tdira\n\t",
    result: 10,
  },
  {
    fileSystem: "dir\n\tdira\n\t\tdiraa\n\tdirbb\n\t\tdiraaa\n\tdira\n\t",
    result: 16,
  },
];

describe("Problem 14", function () {
  describe("Returns the length of the longest absolute path to a file in the abstracted file system", function () {
    for (const testCase of testCases) {
      const { fileSystem, result } = testCase;

      let text;

      if (fileSystem.length === 0) {
        text = "With empty file system";
      } else {
        text = `With file system \n\n${fileSystem.replaceAll("\t", "  ")}\n`;
      }

      describe(text, function () {
        it(`longest absolute path length is -> ${result}`, function () {
          expect(
            lengthOfLongestAbsolutePathToFileInFileSystem(fileSystem)
          ).to.equal(result);
        });
      });
    }
  });
});
