document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  if (localStorage.getItem("playMusic") === "true") {
    music.play().catch(() => {});
  }

  document.querySelectorAll(".play-audio").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("playMusic", "true");
      music.play().catch(() => {});
    });
  });
});
