function goYes() {
  window.location.href = "success.html";
}

const noBtn = document.getElementById("no");

function moveNoButton() {
  // Funny alert
  alert("😜 Oops! No wala option thoda sharmila hai!");

  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Funny vibration (Android)
  if (navigator.vibrate) {
    navigator.vibrate([120, 60, 120, 60, 200]);
  }
}

// Desktop + Mobile support
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
