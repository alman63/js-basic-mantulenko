export function deleteP() {
  const count = document.querySelectorAll("p").length;
  if (count > 5) {
    document.querySelectorAll("p")[0].remove();
  }
}
