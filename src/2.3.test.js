import { circleVSsquare } from "./2.3";

describe("circleVSsquare", () => {
  it("circle = 3 square = 1", () => {
    expect(circleVSsquare(3, 1)).toBe(false);
  });
  it("circle = 2 square = 2", () => {
    expect(circleVSsquare(2, 2)).toBe(true);
  });
  it("circle = 1 square = 3", () => {
    expect(circleVSsquare(1, 3)).toBe(true);
  });
});
