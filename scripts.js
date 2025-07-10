
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



document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

//---------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const aboutmeText = document.getElementById("aboutmeText");
  const text = "Hi, I'm Jovi. I'm a warehouse worker, college student, and I love coding, gaming, and dark ambient music.";
  let index = 0;

  function type() {
    if (index < text.length) {
      aboutmeText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 40);
    }
  }

  if (aboutText) {
    type();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("clickSound");
  const navButtons = document.querySelectorAll(".navi-button");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (clickSound) {
        clickSound.currentTime = 0; 
        clickSound.play();
      }
    });
  });
});