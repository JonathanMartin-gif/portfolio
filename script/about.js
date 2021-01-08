var slideIndex = 1; //declaring a variable that equals 1
showSlides(slideIndex); // calling upon the showSlides() function

// Next/previous controls
function plusSlides(n) { // declaring function plusSlides()
  showSlides(slideIndex += n); // adding plusSlides to showSlides for multi - function
}

// Thumbnail image controls
function currentSlide(n) { // declaring currentSlide Funtion
  showSlides(slideIndex = n); // making showSlides to equal n
}

function showSlides(n) { 
  var i; 
  var slides = document.getElementsByClassName("mySlides"); 
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // console.log(links.classList.contains('random'));
  // console.log(links.classList.contains('links'));
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // }
  links.classList.toggle('show-links');
});