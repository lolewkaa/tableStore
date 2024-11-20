const button = document.querySelector('.catalog__price-button');
const inputsBox = document.querySelector('.catalog__inputs-box');
const arrowImage = document.querySelector('.catalog__price-button img');

let inputsVisible = false;

button.addEventListener('click', function() {
    if (inputsVisible) {
        inputsBox.style.display = 'flex';
        arrowImage.src = 'images/arrowUp.svg';
    } else {
        inputsBox.style.display = 'none';
        arrowImage.src = 'images/arrowDown.svg'
    }
    
    inputsVisible = !inputsVisible;
});

const buttonCheckbox = document.querySelector('.color');
const checkboxes = document.querySelectorAll('.color__checkbox');
const arrowImageCheckbox = document.querySelector('.color img');

buttonCheckbox.addEventListener('click', function() {
    checkboxes.forEach(function(checkbox) {
        if (checkbox.style.display === 'none') {
            checkbox.style.display = 'inline-flex';
            arrowImageCheckbox.src = 'images/arrowUp.svg';
        } else {
            checkbox.style.display = 'none';
            arrowImageCheckbox.src = 'images/arrowDown.svg';
        }
    });
    
});

document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector(".slides");
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

let popupBg = document.querySelector('.popupFilter__overlay');
let popup = document.querySelector('.popupFilter__container');
let openPopupButtons = document.querySelectorAll('.catalog__btn');
let closePopupButton = document.querySelector('.popupFilter__button-close');
let closePopupBg = document.querySelector('.popupFilter__overlay');

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});

closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
})

closePopupBg.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
})

//header menu
let menu = document.querySelector('.menu');
let buttonOpen = document.querySelectorAll('.header__burger-button');
let buttonClose = document.querySelector('.menu__button-close');

buttonOpen.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        menu.classList.add('menu__active');

    })
});

buttonClose.addEventListener('click',() => { 
    menu.classList.remove('menu__active'); 

})