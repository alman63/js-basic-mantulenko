import { multiSum } from "./1.1";
// тестирование функции multiSum
describe("multiSum", () => {
  it("Рассчет для чисел a= 3 b = 1 результат 3 и 4 ", () => {
    expect(multiSum(3, 1)).toEqual([3, 4]);
  });
  it("Рассчет для чисел a= 0 b = 1 результат 0 и 1", () => {
    expect(multiSum(0, 1)).toEqual([0, 1]);
  });
  it("Рассчет для чисел a= 0 b = 0 результат 0 и 0", () => {
    expect(multiSum(0, 0)).toEqual([0, 0]);
  });
  it("Рассчет для чисел a= -1 b = 1 результат -1 и 0", () => {
    expect(multiSum(-1, 1)).toEqual([-1, 0]);
  });
});
