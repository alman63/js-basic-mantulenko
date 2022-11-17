import { circleVSsquare } from "./2.3";
// тестирование помещяется ли круг в квадрат, по их площади
describe("circleVSsquare", () => {
  it("Если circle = 3 square = 1, то результат false", () => {
    expect(circleVSsquare(3, 1)).toBe(false);
  });
  it("Если circle = 2 square = 2, то результат true", () => {
    expect(circleVSsquare(2, 2)).toBe(true);
  });
  it("Если circle = 1 square = 3, то результат true", () => {
    expect(circleVSsquare(1, 3)).toBe(true);
  });
});
