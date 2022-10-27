

const slides = document.getElementsByClassName("carousel-item"); // [div, div, div] -> [0,1,2] -> [이미지]
let slidePosition = 0;
const totalSlides = slides.length; // 3 [0,1,2]

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    // strting 0 === 2 -> false
    slidePosition = 0;
  } else {
    slidePosition++; // 1, 2
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  // [0,1,2]
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

setInterval(function() {
  moveToNextSlide();
  console.log("5초");
}, 5000);