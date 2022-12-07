"use strict";

const slides = document.querySelectorAll('.slide');
const btnSlide = document.querySelectorAll('.btn-slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.bnt-next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let maxSlides = slides.length -1;

// Function Epressions
const displaySlide = function displayCurrentSlide(){
  slides.forEach ((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    displayDot(currentSlide);        
  })
}

const displayDot = function displayActiveDotNavigationBtns(currSlide){
  dots.forEach((dot) =>{
    dot.classList.remove('active');
  })
  dots[currSlide].classList.add('active');
}

const dotNavigation = function changeSlideByDotClick(){
  dots.forEach((dot, index) =>{
    dot.addEventListener('click', () => {
      currentSlide = index;
      displaySlide();
    })
  })
}


// Calls
slides.forEach ((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
})

displayDot(currentSlide);
dotNavigation();

btnSlide.forEach((btn) => {
  if (btn.classList.contains('btn-prev')) {
    btn.addEventListener('click', ()=>{

      if (currentSlide === 0) {
        currentSlide = maxSlides;
      } else {
        currentSlide -= 1;        
      }
      console.log(currentSlide);

      displaySlide()
    }) 
  } else if (btn.classList.contains('btn-next')) {
    btn.addEventListener('click', () =>{

      if (currentSlide === maxSlides) {
        currentSlide = 0;
      } else {
        currentSlide += 1;        
      }
      displaySlide();
    })   
  }
})
