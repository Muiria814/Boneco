// carregar passos guardados
let passos = localStorage.getItem("passos")
  ? parseInt(localStorage.getItem("passos"))
  : 0;

let intervalo = null;
let andando = false;
let posX = 0;

// carregar DOGE guardado
let doge = localStorage.getItem("doge")
  ? parseFloat(localStorage.getItem("doge"))
  : 0;

// guardar quantos passos já foram convertidos
let passosConvertidos = localStorage.getItem("passosConvertidos")
  ? parseInt(localStorage.getItem("passosConvertidos"))
  : 0;

const DOGE_POR_PASSOS = 10;

// elementos
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");
const convertBtn = document.getElementById("convertBtn");

// mostrar valores ao carregar
contador.textContent = passos;
dogeEl.textContent = doge.toFixed(2);

// iniciar caminhada
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    // contador de passos
    passos++;
    contador.textContent = passos;
    localStorage.setItem("passos", passos);

    // movimento do boneco
    posX += 5;
    boneco.style.left = posX + "px";

    if (posX > 260) {
      posX = 0;
    }
  }, 500);
});

// parar (pausa)
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;
  botao.disabled = false;
});

// converter passos em DOGE
convertBtn.addEventListener("click", () => {
  const passosNovos = passos - passosConvertidos;

  if (passosNovos <= 0) return;

  const dogeGanhos = passosNovos / DOGE_POR_PASSOS;
  doge += dogeGanhos;

  passosConvertidos = passos;

  dogeEl.textContent = doge.toFixed(2);

  localStorage.setItem("doge", doge);
  localStorage.setItem("passosConvertidos", passosConvertidos);
