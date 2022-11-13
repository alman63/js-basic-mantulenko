import { month } from "./2.2";

describe("month", () => {
  it("a= 3", () => {
    expect(month(3)).toBe("март");
  });
  it("a= 9", () => {
    expect(month(9)).toBe("сентябрь");
  });
  it("a= 12", () => {
    expect(month(12)).toBe("декабрь");
  });
});
