import { average } from "./3.3";
// проверка ввода пользователя
let N = prompt("Введите целое число большее 1");
while (isNaN(Number(N)) || Number(N) === 0 || Number(N) < 0) {
  N = prompt("Повторите ввод, вы ввели не число");
}
average(N);
