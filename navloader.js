fetch("https://tibble93.github.io/JoviWeb/nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // Reattach JS functionality after nav is loaded
    const modeToggle = document.getElementById("modeToggle");
    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        const sound = document.getElementById("toggleSound");
        if (sound) {
          sound.currentTime = 0;
          sound.play();
        }

        // Toggle light/dark mode
        document.body.classList.toggle("light-mode");
        const icon = document.getElementById("themeIcon");

        if (icon) {
          const isLight = document.body.classList.contains("light-mode");
          icon.src = isLight ? "images/darkmode.svg" : "images/lightmode.svg";
          icon.alt = isLight ? "Moon icon" : "Sun icon";
        }
      });
    }
  });