import { sum } from "./1.3";
// тестирование функции подсчета суммы цифр трехзначного числа
describe("sum", () => {
  it("for a=100 = 1", () => {
    expect(sum(100)).toBe(1);
  });
  it("for a=999 = 27", () => {
    expect(sum(999)).toBe(27);
  });
  it("for a=0 = 0", () => {
    expect(sum(0)).toBe(0);
  });
});
