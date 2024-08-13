let slideIndex = 0;
showSlides(slideIndex);
let timer;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  resetTimer();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  resetTimer();
}

function showSlides(i) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  if (i >= slides.length) {
    slideIndex = 0;
  }

  if (i < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}

function resetTimer() {
  clearTimeout(timer); // Clear the existing timer
  timer = setTimeout(function () {
    slideIndex++;
    showSlides(slideIndex);
    resetTimer(); // Restart the timer for the next slide
  }, 5000); // Delay for 5 seconds
}

// Start the initial timer when the page loads
resetTimer();
