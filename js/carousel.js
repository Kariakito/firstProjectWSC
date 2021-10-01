const track = document.querySelector('.carousel_track');
const slide = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button--rigth');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carusel_nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect().width; 

//console.log(slideSize)

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slide.forEach(setSlidePosition);

// click left, clicl rigth, nav indicator move to the slide,arrage slide next to one another




