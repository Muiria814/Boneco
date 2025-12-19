let steps = 0;
let position = 0;
let interval = null;

const stepsSpan = document.getElementById("steps");
const character = document.getElementById("character");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  if (interval) return;

  interval = setInterval(() => {
    steps++;
    position += 5;

    if (position > 260) {
      position = 0;
    }

    character.style.left = position + "px";
    stepsSpan.textContent = steps;
  }, 500);
});
