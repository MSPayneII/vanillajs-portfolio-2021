const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains("open")) {
    //Close hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
