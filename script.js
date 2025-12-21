// ===============================
// CARREGAR DADOS GUARDADOS
// ===============================
let passos = localStorage.getItem("passos")
  ? parseInt(localStorage.getItem("passos"))
  : 0;

let doge = localStorage.getItem("doge")
  ? parseFloat(localStorage.getItem("doge"))
  : 0;

let intervalo = null;
let andando = false;
let posX = 0;

// ===============================
// CONFIGURAÇÕES
// ===============================
const DOGE_POR_PASSOS = 10;       // 10 passos = 1 DOGE
const PASSOS_POR_SEGUNDO = 1;     // simulação fora do site

// ===============================
// SIMULAÇÃO FORA DO SITE
// ===============================
const ultimaSaida = localStorage.getItem("ultimaSaida");

if (ultimaSaida) {
  const agora = Date.now();
  const segundosFora = Math.floor((agora - ultimaSaida) / 1000);
  const passosSimulados = segundosFora * PASSOS_POR_SEGUNDO;

  passos += passosSimulados;
  doge = passos / DOGE_POR_PASSOS;

  localStorage.setItem("passos", passos);
  localStorage.setItem("doge", doge);
  localStorage.removeItem("ultimaSaida");
}

// guardar hora ao sair do site
window.addEventListener("beforeunload", () => {
  localStorage.setItem("ultimaSaida", Date.now());
});

// ===============================
// ELEMENTOS DO DOM
// ===============================
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");

// ===============================
// MOSTRAR VALORES AO CARREGAR
// ===============================
contador.textContent = passos;
dogeEl.textContent = doge.toFixed(2);

// ===============================
// INICIAR CAMINHADA
// ===============================
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    // contador de passos
    passos++;
    contador.textContent = passos;
    localStorage.setItem("passos", passos);

    // conversão DOGE
    doge = passos / DOGE_POR_PASSOS;
    dogeEl.textContent = doge.toFixed(2);
    localStorage.setItem("doge", doge);

    // movimento do boneco
    posX += 5;
    boneco.style.left = posX + "px";

    if (posX > 260) {
      posX = 0;
    }
  }, 500);
});

// ===============================
// PAUSAR (RESET SEM APAGAR)
// ===============================
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;

  posX = 0;
  boneco.style.left = "0px";
  botao.disabled = false;
});
