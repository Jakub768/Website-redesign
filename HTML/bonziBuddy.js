function buttonOn()
{
    if (document.getElementById('name').value == '' ||
        document.getElementById('email').value == '' ||
        document.getElementById('message').value == '')
        alert("One of the fields are empty! Make sure to fill all of them")
    else {
        alert("Message submitted, thank you!")
        clearfields()
    }
}

function clearfields()
{
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // safety if statements to prevent errors
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