//попап 'изменить пункт выдачи'
let modalBg = document.querySelector('.modal__overlay');
let modal = document.querySelector('.modal__container');
let openModalButtons = document.querySelectorAll('.delivery__button-change');
let closeModalButton = document.querySelector('.modal__button-close');

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


//попап 'спасибо за заказ'
let popupBg = document.querySelector('.popup__overlay');
let popup = document.querySelector('.popup__container');
let openPopupButtons = document.querySelectorAll('.orderInfo__button');
let closePopupButton = document.querySelector('.popup__button-close');

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