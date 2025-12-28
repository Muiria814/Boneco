const BACKEND_URL = "https://backend-e58o.onrender.com"; // <-- coloque sua URL aqui

// ====== TELAS ======
const welcomeScreen = document.getElementById("welcome-screen");
const loginScreen = document.getElementById("login-screen");
const registerScreen = document.getElementById("register-screen");
const app = document.getElementById("app");

// ====== LOGIN ======
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

// ====== NAVEGAÇÃO ======
const goToRegister = document.getElementById("goToRegister");
const goToLogin = document.getElementById("goToLogin");
const backToWelcome = document.getElementById("backToWelcome");
// ====== REGISTRO ======
const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerPasswordConfirm = document.getElementById("registerPasswordConfirm");
const registerBtn = document.getElementById("registerBtn");
const registerMessage = document.getElementById("registerMessage");
const backToLogin = document.getElementById("backToLogin");

// ====== LOGOUT ======
const logoutBtn = document.getElementById("logoutBtn");

// ====== APP ======
const contador = document.getElementById("steps");
const energiaEl = document.getElementById("energia");
const dogeEl = document.getElementById("doge");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const convertBtn = document.getElementById("convertBtn");
const convertMessage = document.getElementById("convertMessage");
const boneco = document.getElementById("character");

const withdrawBtn = document.getElementById("withdrawBtn");
const dogeAddressInput = document.getElementById("dogeAddress");
const withdrawMessage = document.getElementById("withdraw-message");

// ====== CONFIGURAÇÕES ======
const DOGE_POR_PASSOS = 1000;
const MIN_SAQUE = 10;
const COOLDOWN_CONVERT = 5000; // 5 segundos para teste

// ====== ESTADO ======
let passos = parseInt(localStorage.getItem("passos")) || 0;
let energia = parseInt(localStorage.getItem("energia")) || 0;
let doge = parseFloat(localStorage.getItem("doge")) || 0;

// atualizar ecrã com valores guardados
contador.textContent = passos;
energiaEl.textContent = energia;
dogeEl.textContent = doge.toFixed(2);
let intervalo = null;
let andando = false;
let posX = 0;
let lastConvert = 0;

// ====== FUNÇÕES ======

// Validar senha (corrigido para aceitar mais símbolos)
function validarSenha(senha) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#+\-])[A-Za-z\d@$!%*?&#+\-]{8,}$/;
  return regex.test(senha);
}

// Abrir registro
goToRegister.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  registerScreen.style.display = "block";
});

// Abrir login
goToLogin.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  loginScreen.style.display = "block";
});

// Voltar
backToWelcome.addEventListener("click", () => {
  loginScreen.style.display = "none";
  registerScreen.style.display = "none";
  welcomeScreen.style.display = "block";
});

// ====== REGISTRAR USUÁRIO ======
registerBtn.addEventListener("click", async () => {
  const nome = registerName.value.trim();
  const email = registerEmail.value.trim();
  const senha = registerPassword.value;
  const senhaConfirm = registerPasswordConfirm.value;

  if (!nome || !email || !senha || !senhaConfirm) {
    registerMessage.style.color = "red";
    registerMessage.textContent = "Preencha todos os campos!";
    return;
  }

  if (senha !== senhaConfirm) {
    registerMessage.style.color = "red";
    registerMessage.textContent = "As senhas não coincidem!";
    return;
  }

  if (!validarSenha(senha)) {
    registerMessage.style.color = "red";
    registerMessage.textContent = "Senha fraca! Deve conter letras, números e símbolos (mínimo 8 caracteres).";
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha })
    });
    const data = await res.json();
    if (data.success) {
      registerMessage.style.color = "green";
      registerMessage.textContent = "Conta criada com sucesso! Faça login.";
      setTimeout(() => {
        registerScreen.style.display = "none";
        loginScreen.style.display = "block";
      }, 1500);
    } else {
      registerMessage.style.color = "red";
      registerMessage.textContent = data.message || "Erro ao criar conta.";
    }
  } catch (err) {
    console.error(err);
    registerMessage.style.color = "red";
    registerMessage.textContent = "Erro ao comunicar com o servidor.";
  }
});

// ====== LOGIN ======
loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginPassword").value;

  if (!email || !senha) {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Preencha todos os campos!";
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    if (data.success) {
      // guardar sessão
      localStorage.setItem("logado", "true");
      localStorage.setItem("userId", data.userId);
      passos = data.passos || 0;
energia = data.energia || 100;
doge = data.doge || 0;

      // 🔹 ATUALIZA A TELA AQUI
  contador.textContent = passos;
  energiaEl.textContent = energia;
  dogeEl.textContent = doge.toFixed(2);
      

      // mostrar app
      loginScreen.style.display = "none";
      app.style.display = "block";
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = data.message || "Email ou senha incorretos!";
    }
  } catch (err) {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Erro ao comunicar com o servidor.";
    console.error(err);
  }
});

// ====== LOGOUT ======
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("logado");
  localStorage.removeItem("userId");

  app.style.display = "none";
  welcomeScreen.style.display = "block";
});

// ====== INICIALIZAÇÃO ======
async function init() {
  const userId = localStorage.getItem("userId");

  // 👉 BUSCAR PASSOS
  try {
    const passosRes = await fetch(`${BACKEND_URL}/passos/${userId}`);
    const passosData = await passosRes.json();
    passos = passosData.passos || 0;
  } catch (err) {
    console.log("Erro passos:", err);
  }

  // 👉 BUSCAR SALDO DOGE
  try {
    const saldoRes = await fetch(`${BACKEND_URL}/saldo/${userId}`);
    const saldoData = await saldoRes.json();
    doge = saldoData.saldo || 0;
  } catch (err) {
    console.log("Erro saldo:", err);
  }

  // 👉 BUSCAR ENERGIA
  try {
    const energiaRes = await fetch(`${BACKEND_URL}/energia/${userId}`);
    const energiaData = await energiaRes.json();
    energia = energiaData.energia ?? 100;
  } catch (err) {
    console.log("Erro energia:", err);
  }

  // 👉 ATUALIZAR O ECRÃ
  contador.textContent = passos;
  dogeEl.textContent = doge.toFixed(2);
  energiaEl.textContent = energia;
}

// CHAMAR A FUNÇÃO
init();
// ====== CAMINHADA ======
botao.addEventListener("click", () => {
  if (andando) return;
  andando = true;
  botao.disabled = true;

  intervalo = setInterval(async () => {

  passos++;

  // gastar energia a cada 50 passos
  if (passos % 50 === 0 && energia > 0) {
    energia--;
  }

  const userId = localStorage.getItem("userId");

  // atualizar ENERGIA no backend
  fetch(`${BACKEND_URL}/energia`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, energia })
  });

  // atualizar PASSOS no backend
  await fetch(`${BACKEND_URL}/passos/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ novosPassos: 1 })
  });

  contador.textContent = passos;
  energiaEl.textContent = energia;

}, 500);
// ====== PARAR CAMINHADA ======
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;
  botao.disabled = false;
});

// ====== CONVERTER PASSOS EM DOGE ======
convertBtn.addEventListener("click", async () => {
  convertMessage.textContent = "";
  convertMessage.style.color = "white";

  const agora = Date.now();

  if (agora - lastConvert < COOLDOWN_CONVERT) {
    convertMessage.style.color = "orange";
    convertMessage.textContent = "⏳ Aguarde alguns segundos antes de converter novamente.";
    return;
  }

  if (energia <= 0) {
    convertMessage.style.color = "red";
    convertMessage.textContent = "❌ Sem energia suficiente para converter.";
    return;
  }

  try {
    const userId = localStorage.getItem("userId");

    const res = await fetch(`${BACKEND_URL}/convert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    });

    const data = await res.json();

    if (data.success) {
      doge = data.novoSaldo;
      energia = 0;

      dogeEl.textContent = doge.toFixed(2);
      energiaEl.textContent = energia;

      lastConvert = Date.now();

      convertMessage.style.color = "lightgreen";
      convertMessage.textContent = "✔ Conversão realizada com sucesso!";
    } 
    else {
      convertMessage.style.color = "red";
      convertMessage.textContent = data.message || "❌ Erro na conversão.";
    }

  } catch (err) {
    console.log(err);
    convertMessage.style.color = "red";
    convertMessage.textContent = "❌ Erro ao comunicar com o servidor.";
  }
});

// ====== WITHDRAW DOGE ======
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
    const userId = localStorage.getItem("userId");

const res = await fetch(`${BACKEND_URL}/withdraw`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ userId, address, amount: doge })
});
    const data = await res.json();
    if (data.success) {
      doge = 0;
      dogeEl.textContent = doge.toFixed(2);
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

// ====== AUTO LOGIN ======
if (localStorage.getItem("logado") === "true") {

  if (welcomeScreen) welcomeScreen.style.display = "none";
  if (loginScreen) loginScreen.style.display = "none";
  if (registerScreen) registerScreen.style.display = "none";

  app.style.display = "block";
}
