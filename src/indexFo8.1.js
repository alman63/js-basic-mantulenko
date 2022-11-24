import { dayWeek } from "./8.1";

let a = prompt("Введите дату в формате дд.мм.гггг");
const reg = /\d{1,2}[\.\/]\d{2}[\.\/]\d{4}/;
while (!reg.test(a)) {
  a = prompt("Повторите ввод !!!");
}

console.log(dayWeek(a));
alert(`По данной дате выдает день недели:${dayWeek(a)} `);
