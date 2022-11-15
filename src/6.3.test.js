import { pow } from "./6.3";

describe("pow", () => {
  it("2 в степени 2 = 4", () => {
    expect(pow(2, 2)).toBe(4);
  });
  it("2 в степени 3 = 8", () => {
    expect(pow(2, 3)).toBe(8);
  });
  it("2 в степени 10 = 1024", () => {
    expect(pow(2, 10)).toBe(1024);
  });
  it("2 в степени 0 = 1", () => {
    expect(pow(2, 0)).toBe(1);
  });
});
