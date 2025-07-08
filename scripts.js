document.getElementById("modeToggle").addEventListener("click", function () {
  const sound = document.getElementById("toggleSound");
  sound.currentTime = 0; 
  sound.play();
});