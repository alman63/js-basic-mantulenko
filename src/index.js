import { sum } from "./1.3";

let a = prompt("Введите трехзначное число");
while (a.length !== 3 || a.isNaN(Number(a))) {
  a = prompt("Введите трехзначное число");
}
sum(a);
