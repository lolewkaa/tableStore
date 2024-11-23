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

// карта
const cityCoordinates = {
    'Новосибирск': [55.008351, 82.933319],
    'Красноярск': [56.018394, 92.867776],
    'Кемерово': [55.355202, 86.086841],
    'Новокузнецк': [53.749848, 87.129793],
    'Барнаул': [53.348181, 83.780495],
    'Томск': [56.501015, 84.989778]
};

const buttons = document.querySelectorAll('.footer__button');
const cityName = document.querySelector('.footer__city');

let myMap;
let myPlacemark;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('footer__button_active');
        });

        button.classList.add('footer__button_active');

        cityName.textContent = button.textContent;

        const coordinates = cityCoordinates[button.textContent];
        if (coordinates) {
            myPlacemark.geometry.coordinates = coordinates;
            myMap.setCenter(coordinates);
        }
    });
});

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: cityCoordinates['Новосибирск'],
        zoom: 12
    });

    myPlacemark = new ymaps.Placemark(cityCoordinates['Новосибирск'], {
        hintContent: 'Большая медведица, Светлановская, 50'
    });

    myMap.geoObjects.add(myPlacemark);
}

//переключатель столы/стулья
const buttonsCatalog = document.querySelectorAll('.catalog__button');

buttonsCatalog.forEach(button => {
  button.addEventListener('click', () => {
    buttonsCatalog.forEach(btn => btn.classList.remove('catalog__button_active'));

    button.classList.add('catalog__button_active');
  });
});