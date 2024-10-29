const slider = document.querySelector('#product__slider .slides');
const prevButton = document.querySelector('.product__prev');
const nextButton = document.querySelector('.product__next');

let currentSlide = 0;
const slideWidth = slider.children[0].offsetWidth;

prevButton.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
});

nextButton.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, slider.children.length - 1);
    slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector(".popular__slides");
    const slides = document.querySelectorAll(".bestsellers__product");
    let currentSlide = 0;

    document.querySelector(".popular__next").addEventListener("click", function() {
        if (currentSlide < slides.length - 3) { // Ensure there are enough slides left to scroll
            currentSlide++;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100 / 3}%)`; // Adjust translation to 33.33% per slide
        }
    });

    document.querySelector(".popular__prev").addEventListener("click", function() {
        if (currentSlide > 0) {
            currentSlide--;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100 / 3}%)`; // Adjust translation to 33.33% per slide
        }
    });
});