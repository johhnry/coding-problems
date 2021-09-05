"use strict";
const { describe, it } = require("mocha");
const { expect } = require("chai");
const scheduleJob = require("./problem-9");

describe("Problem 9", function () {
  describe("Can run jobs", function () {
    it("runs a job after a certain amount of time", async function () {
      const begin = new Date();
      await scheduleJob(() => 0, 50);
      const end = new Date();
      expect(end - begin).to.be.greaterThanOrEqual(50);
    });

    it("runs the provided function", async function () {
      let i = 0;
      await scheduleJob(() => i++, 50);
      expect(i).to.be.equal(1);
    });

    it("can run multiple jobs", async function () {
      let i = 0;
      let j = 0;

      const begin = new Date();
      await Promise.all([
        scheduleJob(() => i++, 50),
        scheduleJob(() => (j += 10), 100),
        scheduleJob(() => j++, 50),
      ]);
      const end = new Date();

      expect(i).to.equal(1);
      expect(j).to.equal(11);
      expect(end - begin).to.be.greaterThanOrEqual(100);
    });

    it("can run consecutive jobs", async function () {
      let i = 0;
      const incrI = () => i++;

      for (let j = 0; j < 5; j++) {
        await scheduleJob(incrI, 10);
        expect(i).to.equal(j + 1);
      }
    });
  });
});
