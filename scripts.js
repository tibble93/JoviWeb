

const my_pic = document.getElementById("my_pic");

if (document.body.classList.contains("light-mode")) {
  my_pic.src = "images/me_light.png";
} else {
  my_pic.src = "images/me_dark.png";
}
//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
const introText = "Welcome to my website. Thanks for stopping by and feel free to have a look around." 
                  "You're more than welcome to leave a comment.";
const introElement = document.getElementById("intro_Message");
let charIndex = 0;

function typeIntro() {
  if (charIndex < introText.length) {
    introElement.textContent += introText.charAt(charIndex);
    charIndex++;
    setTimeout(typeIntro, 40); 
  }
}
window.addEventListener("DOMContentLoaded", typeIntro);
