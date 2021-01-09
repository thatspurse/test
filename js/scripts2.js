("use strict");

const button = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const box = document.querySelector("box");
let logo = document.getElementById("logo");
const menuop = document.getElementById("menu");

button.addEventListener("click", () => {
  menu.classList.toggle("menu-expanded");
  button.classList.toggle("active");
  body.classList.toggle("position-absolute");
  logo.classList.toggle("filter_white");
  menuop.classList.toggle("op1");
});

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
