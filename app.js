//jshint esversion:6
let menu = document.querySelector(".hamburger-menu");
menu.addEventListener("click", () => {
  let container = document.querySelector(".container");
  console.log("clicked");
  container.classList.toggle("change");
});
