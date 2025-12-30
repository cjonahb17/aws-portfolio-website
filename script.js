const emojiContainer = document.getElementById("emoji-container");
let lastTime = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTime < 120) return;
  lastTime = now;
  if (Math.random() > 0.6) return;

  const emoji = document.createElement("span");
  emoji.className = "emoji";
  emoji.textContent = "☁️";
  emoji.style.left = e.pageX + "px";
  emoji.style.top = e.pageY + "px";
  emojiContainer.appendChild(emoji);
  setTimeout(() => emoji.remove(), 1900);
});
