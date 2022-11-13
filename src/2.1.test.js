import { bigN } from "./2.1";

describe("bigN", () => {
  it("a= 3 b = 1", () => {
    expect(bigN(3, 1)).toBe(3);
  });
  it("a= 3 b = 3", () => {
    expect(bigN(3, 3)).toBe(3);
  });
  it("a= 0 b = -1", () => {
    expect(bigN(0, -1)).toBe(0);
  });
  it("a= -3 b = 3", () => {
    expect(bigN(-3, 3)).toBe(3);
  });
});
