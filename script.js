const BACKEND_URL = "https://backend-z7zy.onrender.com"; // <-- coloque sua URL aqui

// ====== LOGIN ======
const PASSWORD_CORRETA = "Professor2024#";

const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

if (localStorage.getItem("logado") === "true") {
  loginScreen.style.display = "none";
  app.style.display = "block";
}

loginBtn.addEventListener("click", () => {
  if (passwordInput.value === PASSWORD_CORRETA) {
    localStorage.setItem("logado", "true");
    loginScreen.style.display = "none";
    app.style.display = "block";
  } else {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Palavra-passe incorreta ❌";
  }
});

// ====== LOGOUT ======
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("logado");
  location.reload();
  
});

// ====== CONFIGURAÇÕES ======
const DOGE_POR_PASSOS = 10;
const MIN_SAQUE = 50;

// ====== ESTADO ======
let passos = parseInt(localStorage.getItem("passos")) || 0;
let doge = parseFloat(localStorage.getItem("doge")) || 0;

// Atualizar display inicial
function atualizarDisplay() {
  contador.textContent = passos;
  dogeEl.textContent = doge.toFixed(2);
}

atualizarDisplay();

// ====== ELEMENTOS ======
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");
const convertBtn = document.getElementById("convertBtn");
contador.textContent = passos;
dogeEl.textContent = doge.toFixed(2);

const withdrawBtn = document.getElementById("withdraw-button");
const dogeAddressInput = document.getElementById("doge-address");
const withdrawMessage = document.getElementById("withdraw-message");

// ====== INICIALIZAÇÃO ======
async function init() {
  // buscar passos do backend
  try {
    const passosRes = await fetch(`${BACKEND_URL}/passos`);
    const passosData = await passosRes.json();
    passos = passosData.passos || 0;
  } catch (err) {
    console.log("Erro ao buscar passos:", err);
  }

  // buscar saldo DOGE do backend
  try {
    const saldoRes = await fetch(`${BACKEND_URL}/saldo`);
    const saldoData = await saldoRes.json();
    doge = saldoData.saldo || 0;
  } catch (err) {
    console.log("Erro ao buscar saldo:", err);
  }

  contador.textContent = passos;
  dogeEl.textContent = doge.toFixed(2);
}

init();

// ====== INICIAR CAMINHADA ======
botao.addEventListener("click", () => {
  if (andando) return;
  andando = true;
  botao.disabled = true;

  intervalo = setInterval(async () => {
    passos++;
    localStorage.setItem("passos", passos);
    contador.textContent = passos;

    // enviar passos ao backend
    try {
      await fetch(`${BACKEND_URL}/passos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passos })
      });
    } catch (err) {
      console.log("Erro ao salvar passos:", err);
    }

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

withdrawBtn.addEventListener("click", async () => {
  const address = dogeAddressInput.value.trim();

  if (!address) {
    withdrawMessage.style.color = "red";
    withdrawMessage.textContent = "Insira um endereço DOGE válido.";
    return;
  }

  if (doge < MIN_SAQUE) {
    withdrawMessage.style.color = "red";
    withdrawMessage.textContent = `Mínimo para levantamento: ${MIN_SAQUE} DOGE.`;
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/withdraw`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, amount: doge })
    });

    const data = await res.json();

    if (data.success) {
      doge = 0;
      localStorage.setItem("doge", doge);
      atualizarDisplay();

      withdrawMessage.style.color = "green";
      withdrawMessage.textContent = "Levantamento solicitado com sucesso ✅";
      dogeAddressInput.value = "";
    } else {
      withdrawMessage.style.color = "red";
      withdrawMessage.textContent = data.message || "Erro no levantamento.";
    }
  } catch (err) {
    withdrawMessage.style.color = "red";
    withdrawMessage.textContent = "Erro ao comunicar com o servidor.";
    console.log(err);
  }
});
