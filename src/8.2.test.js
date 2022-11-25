import { countSecond } from "./8.2";
// тестирование расчета количества секунд с начала дня
describe("countSecond", () => {
  it("Проверяем количество секунд на момент Thu Nov 24 2022 12:17:57", () => {
    const data = new Date("Thu Nov 24 2022 12:17:57 GMT+0400 (GMT+04:00)");
    expect(countSecond(data)).toBe(44277);
  });
  it("Проверяем количество секунд на момент Mon Nov 28 2022 11:01:49", () => {
    const data = new Date("Mon Nov 28 2022 11:01:49 GMT+0400 (GMT+04:00)");
    expect(countSecond(data)).toBe(39709);
  });
});
