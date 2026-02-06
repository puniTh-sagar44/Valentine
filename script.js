const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let scale = 1;

// Start music on first interaction (required by browsers)
document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

function vibratePhone() {
    if (navigator.vibrate) {
        navigator.vibrate(120); // 120ms cute vibration
    }
}

function moveAndShrink() {
    vibratePhone(); // 📳 vibrate on NO

    const x = Math.random() * 250;
    const y = Math.random() * 150;

    scale -= 0.15;

    if (scale <= 0.2) {
        noBtn.style.display = "none";
        return;
    }

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

// Desktop
noBtn.addEventListener("mouseover", moveAndShrink);

// Mobile + universal
noBtn.addEventListener("click", moveAndShrink);
noBtn.addEventListener("touchstart", moveAndShrink);

yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";
});
