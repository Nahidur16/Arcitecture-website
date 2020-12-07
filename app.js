//jshint esversion:6
// Side menu
let menu = document.querySelector(".hamburger-menu");
menu.addEventListener("click", () => {
  let container = document.querySelector(".container");
  console.log("clicked");
  container.classList.toggle("change");
});

//Scrill top
let scrollBtn = document.querySelector(".scroll-btn");
scrollBtn.addEventListener("click", () => {
  let html = document.querySelector("html");
  html.style.scrollBehavior = "smooth";
  setTimeout(() => {
    html.style.scrollBehavior = "unset";
  }, 1000);
});
