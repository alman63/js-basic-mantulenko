import { tableMulti } from "./3.2";
// проверка функции умножения для разных чисел
describe("tableMulti", () => {
  it("При  a = 9 получаем 9*9 =81", () => {
    expect(tableMulti(9)).toEqual(81);
  });
  it("При  a = 6 получаем 6*9 =54", () => {
    expect(tableMulti(6)).toEqual(54);
  });
  it("При  a = 0 получаем 0*9 = 0", () => {
    expect(tableMulti(0)).toEqual(0);
  });
});
