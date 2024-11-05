const popupTemplate = document.querySelector('#popup');
const popupClone = popupTemplate.content.cloneNode(true);
popupClone.querySelector('.popup__button-close').addEventListener('click', () => {document.querySelector('.popup').remove(); document.querySelector('.popup__overlay').remove()})
const btns = document.querySelectorAll('.order__products--overflow__desc')
btns.forEach((e) => e.addEventListener('click',() => {
  const popupClone = popupTemplate.content.cloneNode(true);
  popupClone.querySelector('.popup__button-close').addEventListener('click', () => {document.querySelector('.popup').remove(); document.querySelector('.popup__overlay').remove()}); document.querySelector('.his--personal').after(popupClone); console.log(popupClone)}));
