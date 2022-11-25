import { deleteP } from "./deleteP";
// функция добавления параграфа при нажатии на кнопку
export function addP() {
  const button = document.querySelector(".button");
  const div = document.querySelector(".div__p");
  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = document.querySelector(".text").value;
    div.appendChild(p);
    deleteP();
  });
}
