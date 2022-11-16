import { deleteP } from "./deleteP";

export function addP() {
  const button = document.querySelector("button");
  const div = document.querySelector("div");
  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = document.querySelector(".text").value;
    div.appendChild(p);
    deleteP();
  });
}
