import { multiSum } from "./1.1";

describe("multiSum", () => {
  it("a= 3 b = 1", () => {
    expect(multiSum(3, 1)).toEqual([3, 4]);
  });
  it("a= 0 b = 1", () => {
    expect(multiSum(0, 1)).toEqual([0, 1]);
  });
  it("a= 0 b = 0", () => {
    expect(multiSum(0, 0)).toEqual([0, 0]);
  });
  it("a= -1 b = 1", () => {
    expect(multiSum(-1, 1)).toEqual([-1, 0]);
  });
});
