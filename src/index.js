import { month } from "./2.2";

let a = prompt("Введите число от 1 до 12 включительно");
while (!/[0-9]/.test(a) || Number(a) < 0 || Number(a) > 12) {
  a = prompt("Повторите ввод. Введите число от 1 до 12 включительно !!!");
}
month(a);
