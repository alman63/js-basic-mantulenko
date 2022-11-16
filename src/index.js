if (document.querySelector(".text").value === "") {
  document.querySelector(".button").style.display = "none";
}
document.querySelectorAll(".text").forEach((element) => {
  element.addEventListener("input", () => {
    if (document.querySelector(".text").value === "") {
      document.querySelector(".button").style.display = "none";
    } else {
      document.querySelector(".button").style.display = "block";
    }
  });
});
