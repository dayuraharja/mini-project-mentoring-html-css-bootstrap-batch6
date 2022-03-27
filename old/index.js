const menuToogle = document.querySelector(".menu-toogle input");
const nav = document.querySelector("nav ul");
const zIndex = document.getElementById("carouselExampleCaptions");
const idCard = document.getElementById("idcard");
menuToogle.addEventListener("click", function () {
  nav.classList.toggle("slide1");
  carousel();
});

function carousel() {
  if (nav.classList.contains("slide1")) {
    zIndex.classList.add("zindex");
    idCard.classList.add("zindex");
  } else {
    zIndex.classList.remove("zindex");
    zIndex.classList.add("zindex2");
    idCard.classList.remove("zindex");
    idCard.classList.add("zindex2");
  }
}
