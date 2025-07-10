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