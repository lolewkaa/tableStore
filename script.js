document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll("#info__slider .slides img");
  var dotsContainer = document.querySelector("#info__slider .dots");
  var currentIndex = 0;

  function createDots() {
      for (let i = 0; i < slides.length; i++) {
          var dot = document.createElement("span");
          dot.addEventListener("click", function() {
              showSlide(i);
          });
          dotsContainer.appendChild(dot);
      }
  }

  function updateDots() {
      var dots = document.querySelectorAll("#info__slider .dots span");
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === currentIndex);
      });
  }

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? "block" : "none";
      });
      currentIndex = index;
      updateDots();
  }

  document.querySelector(".info__next").addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });

  document.querySelector(".info__prev").addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  createDots();
  showSlide(currentIndex); 
});

document.getElementById('promoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Your promocode')
});
 