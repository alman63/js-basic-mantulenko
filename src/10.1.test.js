import { testInput } from "./10.1";
// тестирование функции проверки вводимого значения пользователем
describe("testInput", () => {
  it("Проверяем дату 12.04.2022", () => {
    expect(testInput("12.04.2022")).toEqual("Вы ввели дату");
  });
  it("Проверяем почту mail@mail.ru", () => {
    expect(testInput("mail@mail.ru")).toEqual("Вы ввели почту");
  });
  it("Проверяем телефон +7 999 777 77 77", () => {
    expect(testInput("+7 999 777 77 77")).toEqual("Вы ввели телефон");
  });
  it("Проверяем произвольный набор dfdfasdsad", () => {
    expect(testInput("dfdfasdsad")).toEqual("Ввод не определен");
  });
});
