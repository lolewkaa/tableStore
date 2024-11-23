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

//счетчик количества товаров

const quantities = document.querySelectorAll('.order__quantity');

quantities.forEach(quantity => {
    const decreaseBtn = quantity.querySelector('.order__quantity-btn:first-child');
    const increaseBtn = quantity.querySelector('.order__quantity-btn:last-child');
    const quantityText = quantity.querySelector('.order__quantity-text');

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityText.textContent);
        if (currentValue > 1) {
            quantityText.textContent = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityText.textContent);
        quantityText.textContent = currentValue + 1;
    });
});

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