import { userAddAge } from "./4.1";

let N = prompt("Введите возраст пользователя user");
while (isNaN(Number(N)) || Number(N) < 0) {
  N = prompt("Ошибка ввода . Повторите ввод. ");
}
userAddAge(N);
