function showMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
}

/* Auto-play music after first user interaction */
let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    music.play();
    musicStarted = true;
    document.removeEventListener("click", startMusicOnce);
    document.removeEventListener("scroll", startMusicOnce);
  }
}

document.addEventListener("click", startMusicOnce);
document.addEventListener("scroll", startMusicOnce);
