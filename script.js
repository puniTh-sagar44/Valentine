const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let scale = 1;

// Start music
document.body.addEventListener("click", () => {
  music.play();
  localStorage.setItem("musicPlaying", "true");
}, { once: true });

function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate([300, 150, 300]); // noticeable 📳
  }
}

function escapeNo() {
  vibrate();

  scale -= 0.12;
  if (scale <= 0.25) {
    noBtn.style.display = "none";
    return;
  }

  const x = Math.random() * 180;
  const y = Math.random() * 120;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

noBtn.addEventListener("click", escapeNo);
noBtn.addEventListener("touchstart", escapeNo);
noBtn.addEventListener("mouseover", escapeNo);

yesBtn.addEventListener("click", () => {
  window.location.href = "love.html";
});
