import { testInput } from "./10.1";

const button = document.querySelector(".button");
// добавление события при нажатии кнопки
button.addEventListener("click", () => {
  const input = document.querySelector(".text").value;
  testInput(input);
});
