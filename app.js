const slides = document.querySelectorAll('.accordion li');
    let currentSlide = 0;

    function showSlide(slideIndex) {
      slides[currentSlide].style.opacity = '0';
      currentSlide = (slideIndex + slides.length) % slides.length;
      slides[currentSlide].style.opacity = '1';
    }

    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 3000);
    /*
  this was made thanks to Wes Bos's video:
  https://www.youtube.com/watch?v=C9EWifQ5xqA
*/

const list = document.querySelector('.movie-list');
let isDown = false;
let StartX, scrollLeft;

list.addEventListener('mousedown', (e) => {
    isDown = true;
    StartX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
});
list.addEventListener('mouseleave', () => {
    isDown = false;
});
list.addEventListener('mouseup', () => {
    isDown = false;
});
list.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - list.offsetLeft;
    const walk = x - StartX;
    list.scrollLeft = scrollLeft - walk;
});