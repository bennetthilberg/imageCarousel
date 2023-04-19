let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let carousel = document.querySelector('#carousel');

let carouselPos = 0;

next.addEventListener('click', () => nextSlide());
prev.addEventListener('click', () => prevSlide())

function nextSlide(){
    if(carouselPos == -1600){
        carouselPos = 0;
    }
    else{carouselPos = carouselPos-800;}
    carousel.style.transform = `translateX(${carouselPos}px)`;
}
function prevSlide(){
    if(carouselPos == 0){
        carouselPos = -1600;
    }
    else{carouselPos = carouselPos+800;}
    carousel.style.transform = `translateX(${carouselPos}px)`;
}
setInterval(nextSlide, 3000);