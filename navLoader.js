fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    initThemeToggle();
    updateThemeAssets();

    // ----------------navigation button click sound--------------------------
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

// ------Light/dark mode toggle + sound------------------------------------
function initThemeToggle() {
  const modeToggle = document.getElementById("modeToggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      const sound = document.getElementById("toggleSound");
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }

      document.body.classList.toggle("light-mode");
      updateThemeAssets(); 
    });
  }
}

function updateThemeAssets() {
  const isLight = document.body.classList.contains("light-mode");

  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.src = isLight ? "images/darkmode.svg" : "images/lightmode.svg";
    icon.alt = isLight ? "Moon icon" : "Sun icon";
  }

  const my_pic = document.getElementById("my_pic");
  if (my_pic) {
    my_pic.src = isLight ? "images/me_light.png" : "images/me_dark.png";
  }

  const my_contact_pic = document.getElementById("my_contact_pic");
  if (my_contact_pic) {
    my_contact_pic.src = isLight
      ? "images/me_contact_light.png"
      : "images/me_contact_dark.png";

  const my_project_pic = document.getElementById("my_project_pic");
  if (my_project_pic) {
    my_project_pic.src = isLight
      ? "images/me_project_light.png"
      : "images/me_project_dark.png";



  }
}

}
