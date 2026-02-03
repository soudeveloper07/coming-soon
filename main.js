function getNextMonthDate() {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth() + 1, // next month
    1,                 // 1st day of next month
    0, 0, 0            // 00:00:00
  ).getTime();
}

let targetDate = getNextMonthDate();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    targetDate = getNextMonthDate(); // auto reset if month changes
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}, 1000);


particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ff7a00" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    move: { speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});
