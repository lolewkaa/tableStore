//попап 'изменить пункт выдачи'
let modalBg = document.querySelector('.modal__overlay');
let modal = document.querySelector('.modal__container');
let openModalButtons = document.querySelectorAll('.delivery__button-change');
let closeModalButton = document.querySelector('.modal__button-close');
let closeModalBg = document.querySelector('.modal__overlay');

openModalButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        modalBg.classList.add('modal__overlay_active'); 
        modal.classList.add('active'); 
    })
});

closeModalButton.addEventListener('click',() => { 
    modalBg.classList.remove('modal__overlay_active'); 
    modal.classList.remove('active'); 
})

closeModalBg.addEventListener('click',() => { 
    modalBg.classList.remove('modal__overlay_active'); 
    modal.classList.remove('active'); 
})


//попап 'спасибо за заказ'
let popupBg = document.querySelector('.popup__overlay');
let popup = document.querySelector('.popup__container');
let openPopupButtons = document.querySelectorAll('.orderInfo__button');
let closePopupButton = document.querySelector('.popup__button-close');
let closePopupBg = document.querySelector('.popup__overlay');

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('popup__overlay_active'); 
        popup.classList.add('active');

        //меняем стили stage
        document.querySelector('.stage__round_last').classList.add('stage__round_done')
        document.querySelector('.stage__round_third').classList.add('stage__round_done')
     
        document.querySelector('.stage__text_third').classList.add('stage__text_done')
        document.querySelector('.stage__text_last').classList.add('stage__text_done')
        document.querySelector('.stage').classList.add('stage__active')

    })
});

closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('popup__overlay_active'); 
    popup.classList.remove('active');

    //меняем стили stage
    document.querySelector('.stage__round_last').classList.remove('stage__round_done')
    document.querySelector('.stage__round_third').classList.remove('stage__round_done')
    document.querySelector('.stage__text_third').classList.remove('stage__text_done')
    document.querySelector('.stage__text_last').classList.remove('stage__text_done')
    document.querySelector('.stage').classList.remove('stage__active')
})

closePopupBg.addEventListener('click',() => { 
    popupBg.classList.remove('popup__overlay_active'); 
    popup.classList.remove('active');

    //меняем стили stage
    document.querySelector('.stage__round_last').classList.remove('stage__round_done')
    document.querySelector('.stage__round_third').classList.remove('stage__round_done')
    document.querySelector('.stage__text_third').classList.remove('stage__text_done')
    document.querySelector('.stage__text_last').classList.remove('stage__text_done')
    document.querySelector('.stage').classList.remove('stage__active')
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