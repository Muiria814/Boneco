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
let passos = 0;
let doge = 0;
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
async function init() {
  // buscar passos do backend
  try {
    const passosRes = await fetch(`${https://backend-z7zy.onrender.com}/passos`);
    const passosData = await passosRes.json();
    passos = passosData.passos || 0;
  } catch (err) {
    console.log("Erro ao buscar passos:", err);
  }

  // buscar saldo DOGE do backend
  try {
    const saldoRes = await fetch(`${https://backend-z7zy.onrender.com}/saldo`);
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
    contador.textContent = passos;

    // enviar passos ao backend
    try {
      await fetch(`${https://backend-z7zy.onrender.com}/passos`, {
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

// ====== CONVERTER PASSOS EM DOGE ======
convertBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(`${https://backend-z7zy.onrender.com}/convert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passos })
    });
    const data = await res.json();
    doge = data.saldo || doge;
    dogeEl.textContent = doge.toFixed(2);

    passos = 0;
    contador.textContent = passos;
  } catch (err) {
    console.log("Erro ao converter passos:", err);
  }
});

// ====== LEVANTAR DOGE ======
withdrawBtn.addEventListener("click", async () => {
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

  try {
const BACKEND_URL = "https://backend-z7zy.onrender.com";

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
let passos = 0;
let doge = 0;
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
async function init() {
  loginMessage.textContent = "Carregando dados do backend...";
  try {
    const passosRes = await fetch(`${BACKEND_URL}/passos`);
    const passosData = await passosRes.json();
    passos = passosData.passos || 0;
  } catch (err) {
    loginMessage.textContent = "Erro ao buscar passos do backend";
    console.log(err);
  }

  try {
    const saldoRes = await fetch(`${BACKEND_URL}/saldo`);
    const saldoData = await saldoRes.json();
    doge = saldoData.saldo || 0;
  } catch (err) {
    loginMessage.textContent = "Erro ao buscar saldo do backend";
    console.log(err);
  }

  contador.textContent = passos;
  dogeEl.textContent = doge.toFixed(2);
  loginMessage.textContent = "";
}

init();

// ====== INICIAR CAMINHADA ======
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;
  loginMessage.textContent = "";

  intervalo = setInterval(() => {
    passos++;
    contador.textContent = passos;

    // movimento do boneco
    posX += 5;
    boneco.style.left = posX + "px";
    if (posX > 260) posX = 0;

    // enviar passos ao backend sem travar
    fetch(`${BACKEND_URL}/passos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passos })
    }).catch(err => {
      loginMessage.textContent = "Erro ao enviar passos ao backend";
      console.log(err);
    });
  }, 500);
});

// ====== PAUSAR ======
resetBtn.addEventListener("click", () => {
const BACKEND_URL = "https://backend-z7zy.onrender.com";

// ===============================
// LOGIN
// ===============================
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

// ===============================
// LOGOUT
// ===============================
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("logado");
  location.reload();
});

// ===============================
// CONFIGURAÇÕES
// ===============================
const DOGE_POR_PASSOS = 10;
const MIN_SAQUE = 50;

// ===============================
// ESTADO
// ===============================
let passos = 0;
let doge = 0;
let intervalo = null;
let andando = false;
let posX = 0;

// ===============================
// ELEMENTOS
// ===============================
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");
const convertBtn = document.getElementById("convertBtn");

const withdrawBtn = document.getElementById("withdraw-button");
const dogeAddressInput = document.getElementById("doge-address");
const withdrawMessage = document.getElementById("withdraw-message");

// ===============================
// INICIALIZAÇÃO
// ===============================
async function init() {
  try {
    const passosRes = await fetch(`${BACKEND_URL}/passos`);
    const passosData = await passosRes.json();
    passos = passosData.passos || 0;
  } catch (err) {
    console.log("Erro ao buscar passos:", err);
  }

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

// ===============================
// INICIAR CAMINHADA
// ===============================
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(async () => {
    passos++;
    contador.textContent = passos;

    try {
      await fetch(`${BACKEND_URL}/passos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passos })
      });
    } catch (err) {
      console.log("Erro ao salvar passos:", err);
    }

    posX += 5;
    boneco.style.left = posX + "px";
    if (posX > 260) posX = 0;
  }, 500);
});

// ===============================
// PAUSAR
// ===============================
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;
  botao.disabled = false;
});

// ===============================
// CONVERTER PASSOS EM DOGE
// ===============================
convertBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/convert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passos })
    });

    const data = await res.json();
    doge = data.saldo || doge;
    dogeEl.textContent = doge.toFixed(2);

    passos = 0;
    contador.textContent = passos;
  } catch (err) {
    console.log("Erro ao converter passos:", err);
  }
});

// ===============================
// LEVANTAR DOGE
// ===============================
withdrawBtn.addEventListener("click", async () => {
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

  try {
    const res = await fetch(`${BACKEND_URL}/withdraw`, {
// ===============================
// CONFIG
// ===============================
const BACKEND_URL = "https://backend-z7zy.onrender.com";
const PASSWORD_CORRETA = "Professor2024#";
const DOGE_POR_PASSOS = 10;
const MIN_SAQUE = 50;

// ===============================
// ELEMENTOS LOGIN
// ===============================
const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");

// ===============================
// ELEMENTOS APP
// ===============================
const contador = document.getElementById("steps");
const boneco = document.getElementById("character");
const botao = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const dogeEl = document.getElementById("doge");
const convertBtn = document.getElementById("convertBtn");

const withdrawBtn = document.getElementById("withdraw-button");
const dogeAddressInput = document.getElementById("doge-address");
const withdrawMessage = document.getElementById("withdraw-message");

// ===============================
// ESTADO
// ===============================
let passos = 0;
let doge = 0;
let intervalo = null;
let andando = false;
let posX = 0;

// ===============================
// LOGIN
// ===============================
function verificarLogin() {
  if (localStorage.getItem("logado") === "true") {
    loginScreen.style.display = "none";
    app.style.display = "block";
    init();
  }
}

loginBtn.addEventListener("click", () => {
  if (passwordInput.value === PASSWORD_CORRETA) {
    localStorage.setItem("logado", "true");
    loginScreen.style.display = "none";
    app.style.display = "block";
    loginMessage.textContent = "";
    init();
  } else {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Palavra-passe incorreta ❌";
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("logado");
  location.reload();
});

verificarLogin();

// ===============================
// INIT (buscar dados do backend)
// ===============================
async function init() {
  try {
    const passosRes = await fetch(`${BACKEND_URL}/passos`);
    const passosData = await passosRes.json();
    passos = passosData.passos || 0;
  } catch (err) {
    console.log("Erro ao buscar passos:", err);
  }

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

// ===============================
// INICIAR CAMINHADA
// ===============================
botao.addEventListener("click", () => {
  if (andando) return;

  andando = true;
  botao.disabled = true;

  intervalo = setInterval(async () => {
    passos++;
    contador.textContent = passos;

    // enviar passos ao backend
    fetch(`${BACKEND_URL}/passos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passos })
    }).catch(err => console.log(err));

    // mover boneco
    posX += 5;
    boneco.style.left = posX + "px";
    if (posX > 260) posX = 0;
  }, 500);
});

// ===============================
// PAUSAR
// ===============================
resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  andando = false;
  botao.disabled = false;
});

// ===============================
// CONVERTER PASSOS EM DOGE
// ===============================
convertBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/convert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passos })
    });

    const data = await res.json();
    doge = data.saldo || doge;

    passos = 0;
    contador.textContent = passos;
    dogeEl.textContent = doge.toFixed(2);
  } catch (err) {
    console.log("Erro ao converter:", err);
  }
});

// ===============================
// LEVANTAR DOGE
// ===============================
withdrawBtn.addEventListener("click", async () => {
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

  try {
    const res = await fetch(`${BACKEND_URL}/withdraw`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, amount: doge })
    });

    const data = await res.json();

    if (data.ok) {
      withdrawMessage.style.color = "green";
      withdrawMessage.textContent =
        `Levantamento de ${doge.toFixed(2)} DOGE enviado com sucesso`;
      doge = 0;
      dogeEl.textContent = "0.00";
      dogeAddressInput.value = "";
    }
  } catch (err) {
    withdrawMessage.style.color = "red";
    withdrawMessage.textContent = "Erro ao processar levantamento.";
    console.log(err);
  }
});
