export function deleteP() {
  const count = document.querySelectorAll("p").length;
  while (count > 5) {
    document.querySelectorAll("p")[0].remove();
  }
  return document.querySelectorAll("p").length < 5;
}
