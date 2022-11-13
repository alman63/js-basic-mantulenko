import { sum } from "./1.3";

let a = prompt("Введите трехзначное число");
while (/[0-9]{3}/.test(a)) {
  a = prompt("Введите трехзначное число");
}
sum(a);
