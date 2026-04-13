// add javascript here
var i = 0;
var txt = 'YA is a type of literature whose targeted audience ranges from 12-18 years old. Below you will find 3 diffrent genres:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload=typeWriter;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var nav = document.getElementById("navbar");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // When scrolled down: smaller padding
      nav.style.padding = "5px 0px"; 
    } else {
      // When at the top: larger padding
      nav.style.padding = "20px 0px";
    }
  }