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
