// carregar passos guardados
// carregar passos guardados
let passos = localStorage.getItem("passos")
  ? parseInt(localStorage.getItem("passos"))
  : 0;

let intervalo = null;
let andando = false;
let posX = 0;

// elementos
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// mostrar passos ao carregar
contador.textContent = passos;

// iniciar caminhada
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    // contador
    passos++;
    contador.textContent = passos;
    localStorage.setItem("passos", passos);

    // movimento no ecrã
    posX += 5;
    boneco.style.left = posX + "px";

    if (posX > 260) {
      posX = 0;
    }

  }, 500);
});

// parar / reset
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;

  resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;

  // NÃO mexe nos passos
  // NÃO reseta contador
  // apenas pausa

  botao.disabled = false;
});
  posX = 0;
  boneco.style.left = "0px";
  
  botao.disabled = false;
});
