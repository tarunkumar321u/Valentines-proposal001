function goYes() {
  window.location.href = "success.html";
}

// No button ko moveable banana (mobile + desktop)
const noBtn = document.getElementById("no");

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile (MOST IMPORTANT)
noBtn.addEventListener("touchstart", moveNoButton);
