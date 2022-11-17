import { testInput } from "./10.1";

const button = document.querySelector(".button");
const input = document.querySelector(".text").value;
button.addEventListener("click", testInput(input));
