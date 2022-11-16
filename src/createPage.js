export function createPage() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const input = document.createElement("input");
  const button = document.createElement("button");
  input.setAttribute("type", "text");
  input.setAttribute("class", "text");
  button.setAttribute("class", "button");
  button.setAttribute("type", "button");
  button.innerText = "Добавить параграф";
  const body = document.querySelector("body");
  body.appendChild(div);
  p.innerText = "Пример параграфа № 1";
  p2.innerText = "Пример параграфа № 2";
  p3.innerText = "Пример параграфа № 3";
  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);
  body.appendChild(input);
  body.appendChild(button);
  if (document.querySelector(".text").value === "") {
    document.querySelector(".button").style.display = "none";
  }
  return document.querySelectorAll("p").length;
}
