const track = document.querySelector('.carousel_track');
const slide = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button--rigth');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carusel_nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect(); 

console.log(slideSize)


// click left, clicl rigth, nav indicator move to the slide




