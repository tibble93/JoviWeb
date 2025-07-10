fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    //------Light/darl mode toggle + sound---------------------------------
    const modeToggle = document.getElementById("modeToggle");
    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        const sound = document.getElementById("toggleSound");
        if (sound) {
          sound.currentTime = 0;
          sound.play();
        }

        document.body.classList.toggle("light-mode");

        const icon = document.getElementById("themeIcon");
        if (icon) {
          const isLight = document.body.classList.contains("light-mode");
          icon.src = isLight ? "images/darkmode.svg" : "images/lightmode.svg";
          icon.alt = isLight ? "Moon icon" : "Sun icon";

          const my_pic = document.getElementById("my_pic");
          if (my_pic) {
            my_pic.src = isLight ? "images/me_light.png" : "images/me_dark.png";
          }
        }
      });
    }

    //------------------navigation button click sound-------------------------------
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



