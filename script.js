const no = document.getElementById("no");
const yes = document.getElementById("yes");
const music = document.getElementById("bgMusic");

let scale = 1;

document.body.addEventListener("touchstart", () => {
  music.play();
}, { once: true });

function escape() {
  if (navigator.vibrate) navigator.vibrate([200,100,200]);

  scale -= 0.12;
  if (scale < 0.25) {
    no.style.display = "none";
    return;
  }

  const x = Math.random() * 180;
  const y = Math.random() * 100;
  no.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

no.addEventListener("touchstart", escape);
no.addEventListener("click", escape);

yes.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "❤️";
    h.style.left = "50vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
  setTimeout(() => location.href = "love.html", 900);
});
