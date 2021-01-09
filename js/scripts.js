function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

window.addEventListener("scroll", function () {
  let navArea = document.getElementById("navArea");

  if (window.pageYOffset > 800) {
    navArea.classList.add("white");
  } else {
    navArea.classList.remove("white");
  }

  if (window.pageYOffset > 2700) {
    navArea.classList.add("bg_white");
    document.getElementById("navArea").style.padding = "2%";
  } else {
    navArea.classList.remove("bg_white");
  }
});

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

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});
