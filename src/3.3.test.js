import { average } from "./3.3";
// проверка функции для различных значений
describe("average из нечетных до N", () => {
  it("При N = 1 среднее равно 1 ", () => {
    expect(average(1)).toBe(1);
  });
  it("При N = 5 среднее равно 3 ", () => {
    expect(average(5)).toBe(3);
  });
  it("При N = 9 среднее равно 5 ", () => {
    expect(average(9)).toBe(5);
  });
});
