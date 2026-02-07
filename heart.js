setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 18 + 14 + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 5000);
}, 500);
