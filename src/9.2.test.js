import { radius } from "./9.2";

describe("radius", () => {
  it("Длина окружности при R=5 равна", () => {
    expect(radius(5)[0]).toBe(31.41592653589793);
  });
  it("Площадь круга при R=5 равна", () => {
    expect(radius(5)[1]).toBe(78.53981633974483);
  });
  it("Площадь круга при R=0 равна", () => {
    expect(radius(0)[1]).toBe(0);
  });
  it("Площадь круга при R=-5 равна", () => {
    expect(radius(-5)[1]).toBe(NaN);
  });
});
