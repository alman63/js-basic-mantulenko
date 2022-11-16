function disableButton() {
  document.querySelectorAll(".text").forEach((element) => {
    element.addEventListener("input", () => {
      if (document.querySelector(".text").value === "") {
        document.querySelector(".button").style.display = "none";
      } else {
        document.querySelector(".button").style.display = "block";
      }
    });
  });
}

function createPage() {
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
}

function deleteP() {
  const count = document.querySelectorAll("p").length;
  if (count > 5) {
    document.querySelectorAll("p")[0].remove();
  }
}

function addP() {
  const button = document.querySelector("button");
  const div = document.querySelector("div");
  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = document.querySelector(".text").value;
    div.appendChild(p);
    deleteP();
  });
}

createPage();
disableButton();
addP();
