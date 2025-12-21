// // ===============================
// CARREGAR DADOS GUARDADOS
// ===============================
let passos = localStorage.getItem("passos")
  ? parseInt(localStorage.getItem("passos"))
  : 0;

let saldoDOGE = localStorage.getItem("saldoDOGE")
  ? parseFloat(localStorage.getItem("saldoDOGE"))
  : 0;

let passosConvertidos = localStorage.getItem("passosConvertidos")
  ? parseInt(localStorage.getItem("passosConvertidos"))
  : 0;

let intervalo = null;
let andando = false;
let posX = 0;

// ===============================
// CONFIGURAÇÕES
// ===============================
const PASSOS_POR_DOGE = 10;   // 10 passos = 1 DOGE
const PASSOS_POR_SEGUNDO = 1;

// ===============================
// SIMULAÇÃO FORA DO SITE
// ===============================
const ultimaSaida = localStorage.getItem("ultimaSaida");

if (ultimaSaida) {
  const agora = Date.now();
  const segundosFora = Math.floor((agora - ultimaSaida) / 1000);
  const passosSimulados = segundosFora * PASSOS_POR_SEGUNDO;

  passos += passosSimulados;

  localStorage.setItem("passos", passos);
  localStorage.removeItem("ultimaSaida");
}

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
const convertBtn = document.getElementById("convertBtn");
const dogeEl = document.getElementById("doge");

// ===============================
// MOSTRAR VALORES AO CARREGAR
// ===============================
contador.textContent = passos;
dogeEl.textContent = saldoDOGE.toFixed(2);

// ===============================
// INICIAR CAMINHADA
// ===============================
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    passos++;
    contador.textContent = passos;
    localStorage.setItem("passos", passos);

    posX += 5;
    boneco.style.left = posX + "px";

    if (posX > 260) posX = 0;
  }, 500);
});

// ===============================
// PAUSAR CAMINHADA
// ===============================
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;

  posX = 0;
  boneco.style.left = "0px";
  botao.disabled = false;
});

// ===============================
// CONVERTER PARA DOGE (BOTÃO)
// ===============================
convertBtn.addEventListener("click", () => {
  const passosDisponiveis = passos - passosConvertidos;

  if (passosDisponiveis < PASSOS_POR_DOGE) {
    alert("Ainda não tens passos suficientes para converter.");
    return;
  }

  const dogeGanhos = Math.floor(passosDisponiveis / PASSOS_POR_DOGE);
  const passosUsados = dogeGanhos * PASSOS_POR_DOGE;

  saldoDOGE += dogeGanhos;
  passosConvertidos += passosUsados;

  localStorage.setItem("saldoDOGE", saldoDOGE);
  localStorage.setItem("passosConvertidos", passosConvertidos);

  dogeEl.textContent = saldoDOGE.toFixed(2);
// Botão "Levantar" - envia saldo DOGE para o endereço digitado
document.getElementById("withdraw-button").addEventListener("click", function() {
  const address = document.getElementById("doge-address").value.trim();
  const saldoDoge = parseFloat(localStorage.getItem("saldoDoge")) || 0;

  if (!address) {
    alert("Por favor, digite um endereço DOGE válido.");
    return;
  }

  if (saldoDoge <= 0) {
    alert("Você não tem DOGE para levantar.");
    return;
  }

  // Zera o saldo após "levantar"
  localStorage.setItem("saldoDoge", 0);

  // Mostra mensagem de confirmação no site
  document.getElementById("withdraw-message").innerText = `Você levantou ${saldoDoge} DOGE para o endereço ${address}!`;

  // Limpa o campo do endereço
  document.getElementById("doge-address").value = "";

  // Atualiza o saldo na tela
  if (typeof atualizarSaldoDisplay === "function") {
    atualizarSaldoDisplay();
  } else {
    // Caso não exista a função, atualiza diretamente
    document.getElementById("saldoDoge").innerText = 0;
  }
  
});
