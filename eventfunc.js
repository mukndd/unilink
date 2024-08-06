const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;

const moveToSlide = (index) => {
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  slideIndex = index;
};

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  moveToSlide(slideIndex);
});

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  moveToSlide(slideIndex);
});
