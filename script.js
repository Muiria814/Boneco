// ====== CONFIGURAÇÕES ======
const DOGE_POR_PASSOS = 10;
const MIN_SAQUE = 50;

// ====== ESTADO (localStorage) ======
let passos = localStorage.getItem("passos")
  ? parseInt(localStorage.getItem("passos"))
  : 0;

let doge = localStorage.getItem("doge")
  ? parseFloat(localStorage.getItem("doge"))
  : 0;

let intervalo = null;
let andando = false;
let posX = 0;

// ====== ELEMENTOS ======
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");
const convertBtn = document.getElementById("convertBtn");

const withdrawBtn = document.getElementById("withdraw-button");
const dogeAddressInput = document.getElementById("doge-address");
const withdrawMessage = document.getElementById("withdraw-message");

// ====== INICIALIZAÇÃO ======
contador.textContent = passos;
dogeEl.textContent = doge.toFixed(2);

// ====== INICIAR CAMINHADA ======
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    passos++;
    contador.textContent = passos;
    localStorage.setItem("passos", passos);

    // movimento do boneco
    posX += 5;
    boneco.style.left = posX + "px";
    if (posX > 260) posX = 0;
  }, 500);
});

// ====== PAUSAR ======
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;
  botao.disabled = false;
});

// ====== CONVERTER PASSOS EM DOGE ======
convertBtn.addEventListener("click", () => {
  const dogeGanhos = Math.floor(passos / DOGE_POR_PASSOS);

  if (dogeGanhos <= 0) return;

  // adiciona DOGE
  doge += dogeGanhos;
  dogeEl.textContent = doge.toFixed(2);
  localStorage.setItem("doge", doge);

  // 🔥 REINICIA PASSOS (como pediste)
  passos = 0;
  contador.textContent = passos;
  localStorage.setItem("passos", passos);
});

// ====== LEVANTAR DOGE (SIMULAÇÃO) ======
withdrawBtn.addEventListener("click", () => {
  const address = dogeAddressInput.value.trim();

  if (!address) {
    withdrawMessage.style.color = "red";
    withdrawMessage.textContent = "Insira um endereço DOGE válido.";
    return;
  }

  if (doge < MIN_SAQUE) {
    withdrawMessage.style.color = "red";
    withdrawMessage.textContent =
      `Mínimo para levantamento: ${MIN_SAQUE} DOGE.`;
    return;
  }

  withdrawMessage.style.color = "green";
  withdrawMessage.textContent =
    `Levantamento de ${doge.toFixed(2)} DOGE enviado para ${address}`;

  doge = 0;
  dogeEl.textContent = "0.00";
  localStorage.setItem("doge", doge);

  dogeAddressInput.value = "";
});
