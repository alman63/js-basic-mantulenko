import { sum } from "./1.3";

let a = prompt("Введите трехзначное число");
while (!/[0-9]{3}/.test(a) || a.length !== 3) {
  a = prompt("Повторите ввод. Введите трехзначное число !!!");
}
sum(a);
