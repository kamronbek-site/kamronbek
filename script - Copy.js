let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let body = document.querySelector("body");
let ul = document.querySelector('ul');
let bt = document.getElementById('bt');

sun.onclick = function() {
    body.classList.remove('darkmode');
    moon.style.display = 'block';
    sun.style.display = 'none';
}

moon.onclick = function() {
    body.classList.add('darkmode');
    moon.style.display = 'none';
    sun.style.display = 'block';
}

bt.onclick = function () {
    ul.classList.toggle('active');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


