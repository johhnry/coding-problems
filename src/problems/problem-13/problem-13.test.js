"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const estimatePi = require("./problem-13");

describe("Problem 13", function () {
  describe("Estimate π using a Monte Carlo method", function () {
    it("goes up to 3 decimal places", function () {
      const piEstimate = estimatePi();
      expect(Math.trunc(piEstimate * 1000)).to.be.equal(3141);
    });
  });
});
