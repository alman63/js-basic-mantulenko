import { sumNumber } from "./3.1";
// тестирование функции суммы чисел от 50 до 100
describe("sumNumber", () => {
  it("Сумма равна", () => {
    expect(sumNumber()).toEqual(3825);
  });
});
