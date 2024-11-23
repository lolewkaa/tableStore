document.getElementById('personal__form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'payment.html';
    console.log('Submit')
});

//Активировать промокод
const promoInput = document.getElementById('promo');
const activateButton = document.querySelector('.button__activate');

activateButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (promoInput.value.trim() !== '') {
        activateButton.classList.add('button__activate_active');
        activateButton.textContent = 'Активирован';
    } else {
        alert('Пожалуйста, введите промокод.');
    }
});

promoInput.addEventListener('input', function() {
    if (promoInput.value.trim() === '') {
        activateButton.classList.remove('button__activate_active');
        activateButton.textContent = 'Активировать';
    }
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