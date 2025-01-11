const rightCardClose = document.querySelector('.right-card-close');
const rightCardContainer = document.querySelector('.right-card-container');
const rightContactButton = document.querySelector('.right-contact-button');
const marqueeCardClose = document.querySelector('.marquee-card-close')
const marqueeContainer = document.querySelector('.marquee-container')
const mediaQuery = window.matchMedia("(max-width:800px)");
let view;

function handleMediaQuery(event){
  if (event.matches){
    view = 2;
  } else{
   view = 3;
  }
  console.log(view);
}

mediaQuery.addEventListener("change", handleMediaQuery);

handleMediaQuery(mediaQuery);



rightCardClose.addEventListener('click', function () {
  rightCardContainer.style.display = 'none';
  rightContactButton.style.display = 'block';
});

rightContactButton.addEventListener('click', function () {
  rightCardContainer.style.display = 'block';
  rightContactButton.style.display = 'none';
});

marqueeCardClose.addEventListener('click', function () {
  marqueeContainer.style.display = 'none';
});


//swipper- 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: view,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var mySwiper1 = new Swiper("#mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});