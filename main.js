// Toggle menu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  function moveSlide(direction) {
    const carousel = document.querySelector(".carousel");
    const totalSlides = document.querySelectorAll(".carousel-item").length;

    // Update currentSlide based on the direction (prev or next)
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = currentSlide * -100;

    // Apply the transformation to the carousel to show the correct slide
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Event listeners for prev and next buttons
  document.querySelector(".prev").addEventListener("click", function () {
    moveSlide(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    moveSlide(1);
  });
});
