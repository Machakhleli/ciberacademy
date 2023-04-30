document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slider");
  const prevBtn = document.getElementById("btnPrev");
  const nxtBtn = document.getElementById("btnNxt");

  var currentSlide = 0;
  const slidesCounter = slides.children.length;

  function goToSlide(slideIndex) {
    if (slideIndex < 0) {
      currentSlide = slidesCounter - 1;
    } else if (slideIndex>=slidesCounter) {
      currentSlide = 0;
    } else {
      currentSlide = slideIndex;
    }
    slides.style.trasform = `translateX(-${
      currentSlide * 100
    }%)`
  }
  prevBtn.addEventListener("cliick", () => {
    goToSlide(currentSlide - 1);
  });
  nxtBtn.addEventListener("cliick", () => {
    goToSlide(currentSlide + 1);
  });

  goToSlide(0);
});
