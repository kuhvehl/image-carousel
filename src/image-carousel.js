let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let track = document.querySelector(".carousel-track");
let totalSlides = slides.length;
let slideWidth = slides[0].clientWidth;
let timer;

function moveSlides(n) {
  slideIndex += n;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  updateSlidePosition();
  updateDots();
  resetTimer();
}

function jumpToSlide(n) {
  slideIndex = n - 1;
  updateSlidePosition();
  updateDots();
  resetTimer();
}

function updateSlidePosition() {
  track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => moveSlides(1), 5000);
}

updateSlidePosition();
updateDots();
resetTimer();
