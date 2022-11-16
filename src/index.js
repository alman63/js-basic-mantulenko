import { radius } from "./9.2";

let R = prompt("Введите радиус окружности");
while (isNaN(Number(R)) || R <= 0) {
  R = prompt("Повторите ввод. Введите число больше 0 !!!");
}
radius(R);
console.log("Длина окружности равна ", radius(R)[0]);
console.log("Площадь круга равна  ", radius(R)[1]);
