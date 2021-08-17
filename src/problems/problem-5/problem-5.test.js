const { expect } = require("chai");
const { cons, car, cdr } = require("./problem-5");

describe("Problem 5", function () {
  it("car returns the first element of a pair", function () {
    expect(car(cons(3, 4))).to.be.equal(3);
    expect(car(car(car(cons(cons(cons(1, 2), 3), 4)))));
  });

  it("cdr returns the last element of a pair", function () {
    expect(cdr(cons(3, 4))).to.be.equal(4);
    expect(cdr(cdr(cdr(cons(1, cons(2, cons(3, 4)))))));
  });
});
