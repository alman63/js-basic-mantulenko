import { testInput } from "./10.1";

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const input = document.querySelector(".text").value;
  testInput(input);
});
