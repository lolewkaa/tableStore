document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll("#info__slider .slides img");
  var dotsContainer = document.querySelector("#info__slider .dots");
  var currentIndex = 0;

  function createDots() {
      for (let i = 0; i < slides.length; i++) {
          var dot = document.createElement("span");
          dot.addEventListener("click", function() {
              showSlide(i);
          });
          dotsContainer.appendChild(dot);
      }
  }

  function updateDots() {
      var dots = document.querySelectorAll("#info__slider .dots span");
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === currentIndex);
      });
  }

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? "block" : "none";
      });
      currentIndex = index;
      updateDots();
  }

  document.querySelector(".info__next").addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });

  document.querySelector(".info__prev").addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  createDots();
  showSlide(currentIndex); 
});

document.getElementById('promoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Your promocode')
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