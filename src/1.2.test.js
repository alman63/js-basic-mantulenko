import { sumLength } from "./1.2";
// тестирование функции sumLength
describe("sumLength", () => {
  it(" Для строк a= '' и  b = 'qwert' получаем 5 ", () => {
    expect(sumLength("", "qwert")).toBe(5);
  });
  it(" Для строк  a='' и  b ='' получаем 0  ", () => {
    expect(sumLength("", "")).toBe(0);
  });
  it(" Для строк a='GHn' и b ='OPM' получаем 6 ", () => {
    expect(sumLength("GHn", "OPM")).toBe(6);
  });
});
