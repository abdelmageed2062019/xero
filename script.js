var image = document.getElementsByClassName("parallax-img");
new simpleParallax(image, {
  orientation: "left",
});

var image = document.getElementsByClassName("parallex-img-3");
new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
});

var image = document.getElementsByClassName("parallex-img-2");
new simpleParallax(image);

function toggleNavbar() {
  let body = document.body;
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}

document.getElementById("toggler").addEventListener("click", toggleNavbar);

AOS.init();

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};
