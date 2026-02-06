const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let scale = 1;

// Start music
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate([300, 150, 300]);
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
  explodeHearts();
  setTimeout(() => {
    window.location.href = "love.html";
  }, 900);
});

function explodeHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = "50vw";
    heart.style.fontSize = Math.random() * 20 + 16 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
