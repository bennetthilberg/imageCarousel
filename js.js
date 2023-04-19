let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

next.addEventListener('click', () => nextSlide());

function nextSlide(){
    carousel.style.transform = translateX('50px');
}