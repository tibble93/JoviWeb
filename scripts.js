const icon = document.getElementById("themeIcon");

document.getElementById("modeToggle").addEventListener("click", function () {
  const sound = document.getElementById("toggleSound");
  sound.currentTime = 0; 
  sound.play();

    document.body.classList.toggle("light-mode");
  
  if (document.body.classList.contains("light-mode")) {
    icon.src = "images/darkmode.svg";
    icon.alt = "Moon icon";
  } else {
    icon.src = "images/lightmode.svg";
    icon.alt = "Sun icon";
  }


  const my_pic = document.getElementById("my_pic");

if (document.body.classList.contains("light-mode")) {
  my_pic.src = "images/me_light.png";
} else {
  my_pic.src = "images/me_dark.png";
}
});

const introText = "Welcome to my website. Thanks for stopping by and feel free to have a look around." 
                  "You're more than welcome to leave a comment.";
const introElement = document.getElementById("intro_Message");
let charIndex = 0;

function typeIntro() {
  if (charIndex < introText.length) {
    introElement.textContent += introText.charAt(charIndex);
    charIndex++;
    setTimeout(typeIntro, 40); // Speed: smaller = faster
  }
}

window.addEventListener("DOMContentLoaded", typeIntro);