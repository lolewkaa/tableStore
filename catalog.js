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