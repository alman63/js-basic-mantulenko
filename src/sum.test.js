import { sum } from "./sum";

describe("SUM", () => {
  it("sum 3+1", () => {
    expect(sum(3, 1)).toBe(4);
  });
});
