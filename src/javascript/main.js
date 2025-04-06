const slider = document.getElementById("slider");
        let clone = slider.innerHTML;
        slider.innerHTML += clone; // Dublează conținutul pentru un efect continuu
        let position = 0;
        function slide() {
            position -= 1;
            slider.style.transform = `translateX(${position}px)`;
            if (Math.abs(position) >= slider.scrollWidth / 2) {
                position = 0;
            }
            requestAnimationFrame(slide);
        }
        slide();


        
  
        
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

