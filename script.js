const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let scale = 1;

// Resume music if already playing
if (localStorage.getItem("musicPlaying") === "true") {
    music.play();
}

// Start music on first interaction
document.body.addEventListener("click", () => {
    music.play();
    localStorage.setItem("musicPlaying", "true");
}, { once: true });

function vibratePhone() {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // STRONG pattern 📳
    }
}

function moveAndShrink() {
    vibratePhone();

    const x = Math.random() * 250;
    const y = Math.random() * 150;

    scale -= 0.15;

    if (scale <= 0.2) {
        noBtn.style.display = "none";
        return;
    }

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

noBtn.addEventListener("mouseover", moveAndShrink);
noBtn.addEventListener("click", moveAndShrink);
noBtn.addEventListener("touchstart", moveAndShrink);

yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";
});
