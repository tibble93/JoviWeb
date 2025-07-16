
//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
const introText = "Welcome to my website. Thanks for stopping by and feel free to have a look around." + 
                  "You're more than welcome to leave a comment.";
const introElement = document.getElementById("intro_Message");
let charIndex = 0;

function typeIntro() {
  if (!introElement) return;

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
  const text = `Hi, I'm Jovi. I'm currently in my early stages of college studying programming and web development. 

  In my free time I enjoy bodybuilding, playing video games, and playing with my cats. If you would 

  like to reach out, please head over to my contact page and send me an email! Thanks!`;
  let index = 0;

  function type() {
    if (index < text.length) {
      aboutmeText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 40);
    }
  }

  if (aboutmeText) {
    type();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  updateThemeAssets();
});