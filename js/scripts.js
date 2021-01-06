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

  if (window.pageYOffset > 10) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
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
