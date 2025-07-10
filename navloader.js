fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    const modeToggle = document.getElementById("modeToggle");
    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const icon = document.getElementById("themeIcon");
        if (icon) {
          icon.src = document.body.classList.contains("dark-mode")
            ? "images/darkmode.svg"
            : "images/lightmode.svg";
        }
      });
    }
  });