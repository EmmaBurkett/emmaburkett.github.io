window.addEventListener('load', ()=> {
    var d = new Date();
    var n = d.getFullYear();
    var i = 0;
    while (i <= 8)    
    {
        let valueOption = n-i;
        let cardOption = document.createElement('option');
        cardOption.setAttribute("value", valueOption);
        cardOption.textContent = valueOption;
        document.getElementById('year').appendChild(cardOption);
        i++;
    }
});

window.addEventListener('load', ()=> {
    var i = 0;
    while (i <= 12)    
    {
        let valueOption = i;
        let cardOption = document.createElement('option');
        cardOption.setAttribute("value", valueOption);
        if (i<10)
            cardOption.textContent = "0"+valueOption;
        else
            cardOption.textContent = valueOption;
        document.getElementById('month').appendChild(cardOption);
        i++;
    }
});

var slideIndex = 1; //starts at one
showSlides(slideIndex); //calls function

function plusSlides(n) { //calls funtion
  showSlides(slideIndex += n); //plus one //from buttons
}

function currentSlide(n) {
  showSlides(slideIndex = n); //current slide declaration //from buttons
}

function showSlides(n) { //showSlides
  var i;
  var slides = document.getElementsByClassName("array");
  var right = document.getElementById("right"); 
  var left = document.getElementById("left");//class
  if (n > slides.length) {slideIndex = slideIndex - 1}  //stop at end
  if (n < 1) {slideIndex = 1} //stop at end
  if (n == 5)
  {
    right.style.display = "none";
  }
  else
    {right.style.display = "block";}
  for (i = 0; i < slides.length; i++) { //repeat 
      slides[i].style.display = "none"; //ummm.... an array? Are classes arrays?
      									//wild.
                                         //shuffles through array
  }										//sets all to display none
  slides[slideIndex-1].style.display = "block";  //array length - 1 for 0
  												//input set block.
}