import { countSecond } from "./8.2";
// тестирование расчета количества секунд с начала дня
describe("countSecond", () => {
  it("Проверяем количество секунд на момент запуска теста", () => {
    const data = new Date();
    expect(countSecond(data)).toBe(
      data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds()
    );
  });
});
