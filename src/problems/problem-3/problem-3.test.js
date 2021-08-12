const { expect } = require("chai");
const { Node, serialize, deserialize } = require("./problem-3");

describe("Problem 3", function () {
  describe("Serialize and deserialize give the same result", function () {
    it("with a single node", function () {
      const tree = new Node("a");
      expect(deserialize(serialize(tree)).val).to.be.equal("a");
    });

    it("with a complex tree", function () {
      const tree = new Node("a", new Node("b"), new Node("c", new Node("d")));
      const s = serialize(tree);
      const d = deserialize(s);

      expect(d).to.eql(tree);
    });

    it("with an empty tree", function () {
      const tree = new Node("");
      expect(deserialize(serialize(tree))).to.eql(tree);
    });
  });
});
