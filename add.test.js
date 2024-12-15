import { expect } from "chai";
import add from "./add.js";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("should return the same number for a single number", () => {
    expect(add("1")).to.equal(1);
  });

  it("should return the sum for two numbers", () => {
    expect(add("1,5")).to.equal(6);
  });

  it("should return the sum for multiple numbers", () => {
    expect(add("1,2,3")).to.equal(6);
  });
});
