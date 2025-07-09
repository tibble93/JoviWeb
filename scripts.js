document.getElementById("modeToggle").addEventListener("click", function () {
  const sound = document.getElementById("toggleSound");
  sound.currentTime = 0; 
  sound.play();


    document.body.classList.toggle("light-mode");

    const icon = document.getElementById("themeIcon");
  if (document.body.classList.contains("light-mode")) {
    icon.src = "images/darkmode.svg";
    icon.alt = "Moon icon";
  } else {
    icon.src = "images/lightmode.svg";
    icon.alt = "Sun icon";
  }

});