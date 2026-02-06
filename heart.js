setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 14 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 450);
