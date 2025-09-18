function toggleDropdown(header) {
  const dropdown = header.nextElementSibling;

  if (dropdown.style.maxHeight) {
    dropdown.style.maxHeight = null;
  } else {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
  }
}

let index = 0;
const images = document.querySelectorAll(".slideshow img");
const prevBtn = document.getElementsByClassName("left")[0];
let nextBtn = document.getElementsByClassName("right")[0];

if (images.length > 0 && !images[0].classList.contains("active")) {
  images[0].classList.add("active");
}

function showImage(newIndex) {
  images[index].classList.remove("active");
  index = (newIndex + images.length) % images.length;
  images[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  showImage(index + 1);
});

prevBtn.addEventListener("click", () => {
  showImage(index - 1);
});

//scrolling
const carousel = document.querySelector(".scrolling");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const scrollAmount = 300;

btnRight.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});