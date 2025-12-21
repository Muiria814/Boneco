// carregar passos guardados
// carregar passos guardados
let passos = localStorage.getItem("passos")
  ? parseInt(localStorage.getItem("passos"))
  : 0;

let intervalo = null;
let andando = false;
let posX = 0;
let doge = localStorage.getItem("doge")
  ? parseFloat(localStorage.getItem("doge"))
  : 0;

const DOGE_POR_PASSOS = 10;

// elementos
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");

// mostrar passos ao carregar
contador.textContent = passos;
dogeEl.textContent = doge.toFixed(2);

// iniciar caminhada
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    doge = passos / DOGE_POR_PASSOS;
dogeEl.textContent = doge.toFixed(2);
localStorage.setItem("doge", doge);
    
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
