// функция удаления параграфа, если их больше 5
export function deleteP() {
  let count = document.querySelectorAll("p").length;
  while (count > 5) {
    document.querySelectorAll("p")[0].remove();
    count = document.querySelectorAll("p").length;
  }
  return document.querySelectorAll("p").length < 5;
}
