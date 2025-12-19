let passos = 0;
let intervalo = null;
let andando = false;

// elementos
const contador = document.getElementById("contador");
const boneco = document.getElementById("boneco");
const botao = document.getElementById("iniciar");

// estados do boneco (simples animação)
const poses = ["🚶‍♂️", "🚶‍♀️"];
let poseAtual = 0;

botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(() => {
    passos++;
    contador.textContent = passos;

    // alternar pose do boneco
    poseAtual = (poseAtual + 1) % poses.length;
    boneco.textContent = poses[poseAtual];

  }, 500); // 0,5 segundo
});
