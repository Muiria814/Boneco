
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Minerador de Passos Doge</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    /* RESET COMPLETO */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      -webkit-tap-highlight-color: transparent;
    }

    /* CORPO DA PÁGINA QUE OCUPA 100% */
    html, body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }

    body {
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      min-height: 100vh;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    /* CONTAINER PRINCIPAL QUE OCUPA TELA INTEIRA */
    .container {
      flex: 1;
      width: 100%;
      min-height: 100vh;
      background: rgba(22, 33, 62, 0.95);
      padding: 5vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* CABEÇALHO GRANDE */
    .header {
      text-align: center;
      margin-bottom: 8vw;
      width: 100%;
    }

    .title {
      color: #f1c40f;
      font-size: 2.5rem;
      margin-bottom: 6vw;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4vw;
      flex-wrap: wrap;
      padding: 0 5vw;
      text-align: center;
    }

    .title i {
      font-size: 3rem;
    }

    /* SEÇÃO DE SALDO - MUITO MAIOR */
    .balance-section {
      display: flex;
      justify-content: space-around;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      padding: 6vw;
      margin-bottom: 8vw;
      border: 2px solid rgba(255, 255, 255, 0.2);
      width: 100%;
      gap: 4vw;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .balance-item {
      text-align: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .balance-label {
      color: #b8b8b8;
      font-size: 1.4rem;
      margin-bottom: 2vw;
      white-space: nowrap;
      font-weight: 600;
    }

    .balance-value {
      color: #f1c40f;
      font-size: 2.2rem;
      font-weight: 800;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* BOTÕES GRANDES E VISÍVEIS */
    .btn-small {
      background: linear-gradient(135deg, #f1c40f, #e67e22);
      color: #1a1a2e;
      border: none;
      padding: 4vw 8vw;
      border-radius: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1.3rem;
      width: 100%;
      min-height: 60px;
      box-shadow: 0 5px 15px rgba(241, 196, 15, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-small i {
      font-size: 1.8rem;
    }

    /* BOTÕES PRINCIPAIS GIGANTES */
    .main-buttons {
      display: flex;
      flex-direction: column;
      gap: 6vw;
      margin-bottom: 8vw;
      width: 100%;
    }

    .btn-main {
      background: linear-gradient(135deg, #1a2a6c, #2a3a7c);
      color: white;
      border: none;
      padding: 7vw 5vw;
      border-radius: 25px;
      font-size: 1.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5vw;
      border: 3px solid rgba(255, 255, 255, 0.2);
      min-height: 90px;
      width: 100%;
      text-align: center;
      box-shadow: 0 10px 25px rgba(26, 42, 108, 0.4);
    }

    .btn-main i {
      font-size: 2.5rem;
    }

    .btn-main:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(26, 42, 108, 0.6);
    }

    /* BOTÃO LOGOUT GRANDE */
    .logout-btn {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      color: white;
      border: none;
      padding: 6vw 5vw;
      border-radius: 20px;
      font-size: 1.6rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4vw;
      width: 100%;
      margin-top: 5vw;
      min-height: 80px;
      box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
      border: 3px solid rgba(255, 255, 255, 0.2);
    }

    .logout-btn i {
      font-size: 2rem;
    }

    /* MODAIS QUE OCUPAM TELA INTEIRA */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      justify-content: center;
      align-items: center;
      z-index: 1000;
      overflow-y: auto;
    }

    .modal-content {
      background: rgba(22, 33, 62, 1);
      border-radius: 30px;
      padding: 8vw;
      width: 95vw;
      max-width: 95vw;
      max-height: 95vh;
      overflow-y: auto;
      border: 3px solid rgba(241, 196, 15, 0.5);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      position: relative;
    }

    /* CABEÇALHO MODAL GRANDE */
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8vw;
      position: relative;
    }

    .modal-title {
      color: #f1c40f;
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      gap: 4vw;
    }

    .modal-title i {
      font-size: 2.5rem;
    }

    /* BOTÃO FECHAR GRANDE */
    .close-btn {
      background: none;
      border: none;
      color: #f1c40f;
      font-size: 3rem;
      cursor: pointer;
      padding: 2vw;
      position: absolute;
      top: -5vw;
      right: -5vw;
      z-index: 10;
      min-width: 60px;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* INFO BOX GRANDE */
    .info-box {
      background: rgba(241, 196, 15, 0.15);
      border: 2px solid rgba(241, 196, 15, 0.4);
      border-radius: 15px;
      padding: 5vw;
      margin: 5vw 0;
      text-align: center;
      color: #f1c40f;
      font-size: 1.3rem;
      line-height: 1.5;
    }

    .info-box i {
      font-size: 1.8rem;
      margin-bottom: 2vw;
      display: block;
    }

    /* ENDEREÇO GRANDE */
    .deposit-address {
      background: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      padding: 5vw;
      margin: 5vw 0;
      text-align: center;
      word-break: break-all;
      color: #2ecc71;
      font-family: monospace;
      font-size: 1.2rem;
      border: 2px solid rgba(46, 204, 113, 0.4);
      line-height: 1.4;
    }

    /* MINERAÇÃO - ESTATÍSTICAS GRANDES */
    .mining-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5vw;
      margin: 6vw 0;
    }

    .stat-card {
      background: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      padding: 6vw;
      text-align: center;
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .stat-label {
      color: #b8b8b8;
      font-size: 1.2rem;
      margin-bottom: 2vw;
      font-weight: 600;
    }

    .stat-value {
      color: #f1c40f;
      font-size: 2.5rem;
      font-weight: 800;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* STATUS MINERAÇÃO */
    .mining-status {
      text-align: center;
      color: #2ecc71;
      margin: 5vw 0;
      font-weight: 700;
      font-size: 1.5rem;
      padding: 4vw;
      background: rgba(46, 204, 113, 0.1);
      border-radius: 15px;
      border: 2px solid rgba(46, 204, 113, 0.3);
    }

    /* BOTÃO ASSISTIR ANÚNCIO GRANDE */
    .watch-ad-btn, .spin-btn, .withdraw-btn {
      background: linear-gradient(135deg, #f1c40f, #e67e22);
      color: #1a1a2e;
      border: none;
      padding: 6vw;
      border-radius: 20px;
      font-size: 1.6rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      margin-top: 5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4vw;
      min-height: 80px;
      box-shadow: 0 10px 25px rgba(241, 196, 15, 0.4);
      border: 3px solid rgba(255, 255, 255, 0.2);
    }

    .watch-ad-btn i, .spin-btn i, .withdraw-btn i {
      font-size: 2rem;
    }

    .spin-btn {
      background: linear-gradient(135deg, #9b59b6, #8e44ad);
      color: white;
    }

    .withdraw-btn {
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      color: white;
    }

    /* ROLETA GIGANTE */
    .roulette-container {
      position: relative;
      width: min(80vw, 400px);
      height: min(80vw, 400px);
      margin: 5vw auto;
    }

    .roulette-circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 10px solid #f1c40f;
      background: #1a1a2e;
      overflow: hidden;
      position: relative;
      transition: transform 4s cubic-bezier(0.2,0.8,0.3,1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }

    .roulette-slice {
      position: absolute;
      width: 50%;
      height: 50%;
      left: 50%;
      top: 0;
      transform-origin: 0% 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 800;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
      clip-path: polygon(100% 100%, 0% 100%, 100% 0%);
    }

    .slice-0 { transform: rotate(0deg); background: #e74c3c; }
    .slice-1 { transform: rotate(45deg); background: #e67e22; }
    .slice-2 { transform: rotate(90deg); background: #f1c40f; }
    .slice-3 { transform: rotate(135deg); background: #2ecc71; }
    .slice-4 { transform: rotate(180deg); background: #3498db; }
    .slice-5 { transform: rotate(225deg); background: #9b59b6; }
    .slice-6 { transform: rotate(270deg); background: #1abc9c; }
    .slice-7 { transform: rotate(315deg); background: #d35400; }

    .slice-content {
      position: absolute;
      top: 70%;
      left: 70%;
      transform: translate(-50%, -50%);
      font-size: 1.8rem;
      font-weight: 900;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
      pointer-events: none;
    }

    .slice-0 .slice-content { transform: translate(-50%, -50%) rotate(0deg); }
    .slice-1 .slice-content { transform: translate(-50%, -50%) rotate(-45deg); }
    .slice-2 .slice-content { transform: translate(-50%, -50%) rotate(-90deg); }
    .slice-3 .slice-content { transform: translate(-50%, -50%) rotate(-135deg); }
    .slice-4 .slice-content { transform: translate(-50%, -50%) rotate(-180deg); }
    .slice-5 .slice-content { transform: translate(-50%, -50%) rotate(-225deg); }
    .slice-6 .slice-content { transform: translate(-50%, -50%) rotate(-270deg); }
    .slice-7 .slice-content { transform: translate(-50%, -50%) rotate(-315deg); }

    .roulette-center {
      position: absolute;
      width: 60px;
      height: 60px;
      background: #1a1a2e;
      border: 6px solid #f1c40f;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }

    .roulette-pointer {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 40px solid #ffffff;
      z-index: 20;
      filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));
    }

    /* INPUTS GRANDES */
    .bet-input, .withdraw-input {
      width: 100%;
      padding: 6vw;
      background: rgba(255, 255, 255, 0.1);
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      color: white;
      font-size: 1.6rem;
      text-align: center;
      margin: 6vw 0;
      min-height: 70px;
    }

    .bet-input:focus, .withdraw-input:focus {
      outline: none;
      border-color: #f1c40f;
      box-shadow: 0 0 15px rgba(241, 196, 15, 0.5);
    }

    /* RESULTADOS GRANDES */
    .roulette-result {
      text-align: center;
      margin: 6vw 0;
      padding: 6vw;
      border-radius: 20px;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.4;
      display: none;
    }

    .result-success {
      background: rgba(46, 204, 113, 0.2);
      color: #2ecc71;
      border: 2px solid rgba(46, 204, 113, 0.4);
    }

    .result-error {
      background: rgba(231, 76, 60, 0.2);
      color: #e74c3c;
      border: 2px solid rgba(231, 76, 60, 0.4);
    }

    /* ANIMAÇÕES */
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .spinning {
      animation: spin 3s cubic-bezier(0.2, 0.8, 0.3, 1);
    }

    .pulse {
      animation: pulse 2s infinite;
    }

    /* RESPONSIVIDADE PARA TELAS MAIORES */
    @media (min-width: 768px) {
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 40px;
      }
      
      .title {
        font-size: 3rem;
      }
      
      .balance-section {
        padding: 30px;
      }
      
      .btn-small {
        padding: 15px 30px;
        font-size: 1.1rem;
      }
      
      .btn-main, .logout-btn, .watch-ad-btn, .spin-btn, .withdraw-btn {
        padding: 25px;
        font-size: 1.4rem;
      }
      
      .modal-content {
        padding: 40px;
        width: 90%;
        max-width: 600px;
      }
      
      .roulette-container {
        width: 400px;
        height: 400px;
      }
      
      .bet-input, .withdraw-input {
        padding: 20px;
        font-size: 1.3rem;
      }
    }

    /* SCROLL PERSONALIZADO */
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }

    ::-webkit-scrollbar-thumb {
      background: #f1c40f;
      border-radius: 5px;
    }
  </style>
</head>
<body>
<!-- Container Principal QUE OCUPA TELA INTEIRA 
-->
  <div class="container">
    <!-- Cabeçalho -->
    <div class="header">
      <h1 class="title">
        <i class="fas fa-dog"></i>
        MINERADOR DE PASSOS DOGE
      </h1>
      
      <!-- Saldo, Depositar, Levantar -->
      <div class="balance-section">
        <div class="balance-item">
          <div class="balance-label">SALDO DOGE</div>
          <div class="balance-value" id="dogeBalance">0.00</div>
        </div>
        
        <div class="balance-item">
          <div class="balance-label">DEPOSITAR</div>
          <button class="btn-small" onclick="openDeposit()">
            <i class="fas fa-coins"></i>
          </button>
        </div>
        
        <div class="balance-item">
          <div class="balance-label">LEVANTAR</div>
          <button class="btn-small" onclick="openWithdraw()">
            <i class="fas fa-wallet"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Botões Principais -->
    <div class="main-buttons">
      <button class="btn-main" onclick="openMining()">
        <i class="fas fa-hammer"></i>
        MINERAÇÃO DE PASSOS
      </button>
      
      <button class="btn-main" onclick="openRoulette()">
        <i class="fas fa-dice"></i>
        JOGO DE ROLETA
      </button>
    </div>

    <!-- Terminar Sessão -->
    <button class="logout-btn" onclick="logout()">
      <i class="fas fa-sign-out-alt"></i>
      TERMINAR SESSÃO
    </button>
  </div>

  <!-- Modal de Depósito -->
  <div id="depositModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title"><i class="fas fa-coins"></i> DEPOSITAR DOGE</h2>
        <button class="close-btn" onclick="closeDeposit()">&times;</button>
      </div>
      
      <div class="info-box">
        <i class="fas fa-info-circle"></i>
        Envie DOGE para o endereço abaixo. A confirmação pode levar alguns minutos.
      </div>
      
      <div class="deposit-address">
        DRgNGmH2udV4CzdVqANYFNDWPLZaXAjJ5N
      </div>
      
      <div class="info-box">
        <i class="fas fa-exclamation-triangle"></i>
        Apenas envie Dogecoin (DOGE) para este endereço
      </div>
    </div>
  </div>

  <!-- Modal de Mineração -->
  <div id="miningModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title"><i class="fas fa-hammer"></i> MINERAÇÃO DE PASSOS</h2>
        <button class="close-btn" onclick="closeMining()">&times;</button>
      </div>
      
      <div class="mining-stats">
        <div class="stat-card">
          <div class="stat-label">PASSOS ACUMULADOS</div>
          <div class="stat-value" id="stepsCount">0</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-label">TEMPO RESTANTE</div>
          <div class="stat-value" id="miningTime">60:00</div>
        </div>
      </div>
      
      <div id="miningStatus" class="mining-status">
        Pronto para minerar!
      </div>
      
      <button id="watchAdBtn" class="watch-ad-btn pulse" onclick="startWatchingAd()">
        <i class="fas fa-tv"></i>
        ASSISTIR ANÚNCIO (30s)
      </button>
      
      <div class="info-box">
        <i class="fas fa-sync-alt"></i>
        Conversão automática ativa: A cada 1000 passos = 1 DOGE
      </div>
      
      <div class="info-box">
        <i class="fas fa-clock"></i>
        Mineração dura 60 minutos após assistir anúncio
      </div>
    </div>
  </div>

  <!-- Modal de Roleta -->
  <div id="rouletteModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title"><i class="fas fa-dice"></i> JOGO DE ROLETA</h2>
        <button class="close-btn" onclick="closeRoulette()">&times;</button>
      </div>
      
      <div class="roulette-container">
        <div class="roulette-pointer"></div>
        
        <div class="roulette-circle" id="rouletteCircle">
          <!-- Divisões da roleta com multiplicadores CORRETOS -->
          <div class="roulette-slice slice-0">
            <div class="slice-content">0.2x</div>
          </div>
          <div class="roulette-slice slice-1">
            <div class="slice-content">0.5x</div>
          </div>
          <div class="roulette-slice slice-2">
            <div class="slice-content">0.7x</div>
          </div>
          <div class="roulette-slice slice-3">
            <div class="slice-content">1x</div>
          </div>
          <div class="roulette-slice slice-4">
            <div class="slice-content">1.2x</div>
          </div>
          <div class="roulette-slice slice-5">
            <div class="slice-content">1.5x</div>
          </div>
          <div class="roulette-slice slice-6">
            <div class="slice-content">1.7x</div>
          </div>
          <div class="roulette-slice slice-7">
            <div class="slice-content">2x</div>
          </div>
          <div class="roulette-center"></div>
        </div>
      </div>
      
      <input 
        type="number" 
        id="betAmount" 
        class="bet-input" 
        placeholder="Introduz o valor da aposta (DOGE)"
        step="0.1"
        min="0.5"
        max="10"
      >
      
      <button id="spinBtn" class="spin-btn" onclick="spinRoulette()">
        <i class="fas fa-redo"></i>
        GIRAR ROULETA
      </button>
      
      <div id="rouletteResult" class="roulette-result"></div>
    </div>
  </div>

  <!-- Modal de Levantamento -->
  <div id="withdrawModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title"><i class="fas fa-wallet"></i> LEVANTAR DOGE</h2>
        <button class="close-btn" onclick="closeWithdraw()">&times;</button>
      </div>
      
      <div class="info-box">
        <i class="fas fa-info-circle"></i>
        Saldo disponível: <span id="availableDoge">0.00</span> DOGE
      </div>
      
      <input 
        type="number" 
        id="withdrawAmount" 
        class="withdraw-input" 
        placeholder="Quantidade para levantar (5-10 DOGE)"
        step="0.1"
        min="5"
        max="10"
      >
      
      <div class="info-box">
        <i class="fas fa-exclamation-triangle"></i>
        Limites: Mínimo 5 DOGE | Máximo 10 DOGE por transação
      </div>
      
      <button class="withdraw-btn" onclick="processWithdraw()">
        <i class="fas fa-paper-plane"></i>
        CONFIRMAR LEVANTAMENTO
      </button>
      
      <div id="withdrawResult" class="roulette-result"></div>
    </div>
  </div>

  <script>
    // Dados do usuário
    let userData = null;
    let steps = 0;
    let doge = 0.00;
    let isMining = false;
    let miningInterval = null;
    let adWatched = false;
    let miningTimeLeft = 3600; // 60 minutos em segundos
    let miningTimer = null;
    let miningActive = false;

    // Multiplicadores da roleta
    const rouletteMultipliers = [0.2, 0.5, 0.7, 1, 1.2, 1.5, 1.7, 2];

    // Carregar dados do usuário
    window.onload = function() {
      const savedUser = localStorage.getItem('dogeUser');
      
      if (!savedUser) {
        window.location.href = 'iniciar-sessao.html';
        return;
      }
      
      userData = JSON.parse(savedUser);
      steps = userData.steps || 0;
      doge = userData.doge || 0.00;
      
      // Carregar mineração ativa se existir
      if (userData.miningActive) {
        const timeElapsed = Math.floor((Date.now() - userData.miningStartTime) / 1000);
        miningTimeLeft = Math.max(0, 3600 - timeElapsed);
        if (miningTimeLeft > 0) {
          miningActive = true;
          startMining();
        }
      }
      
      updateDisplay();
      
      // Prevenir deslize na página
      document.body.style.overflow = 'hidden';
    };

    // Atualizar display
    function updateDisplay() {
      document.getElementById('dogeBalance').textContent = doge.toFixed(2);
      document.getElementById('stepsCount').textContent = steps;
      document.getElementById('availableDoge').textContent = doge.toFixed(2);
      
      // Salvar progresso
      if (userData) {
        userData.steps = steps;
        userData.doge = doge;
        
        if (miningActive) {
          userData.miningActive = true;
          userData.miningStartTime = Date.now();
        } else {
          userData.miningActive = false;
        }
        
        localStorage.setItem('dogeUser', JSON.stringify(userData));
      }
      
      // Verificar conversão automática
      checkAutoConversion();
    }

    // Verificar conversão automática
    function checkAutoConversion() {
      if (steps >= 1000) {
        const dogeAmount = Math.floor(steps / 1000);
        doge += dogeAmount;
        steps -= dogeAmount * 1000;
        updateDisplay();
        
        // Mostrar notificação
        showNotification(`✅ ${dogeAmount} DOGE convertido automaticamente!`);
      }
    }

    // Mostrar notificação
    function showNotification(message) {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(46, 204, 113, 0.95);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        z-index: 10000;
        font-weight: 700;
        font-size: 1.2rem;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 25px rgba(46, 204, 113, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
      `;
      notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }

    // Modal functions
    function openDeposit() {
      document.getElementById('depositModal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeDeposit() {
      document.getElementById('depositModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function openMining() {
      document.getElementById('miningModal').style.display = 'flex';
      updateMiningDisplay();
      document.body.style.overflow = 'hidden';
    }

    function closeMining() {
      document.getElementById('miningModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function openRoulette() {
      document.getElementById('rouletteModal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeRoulette() {
      document.getElementById('rouletteModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function openWithdraw() {
      document.getElementById('withdrawModal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeWithdraw() {
      document.getElementById('withdrawModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Mineração
    function startWatchingAd() {
      if (adWatched || miningActive) {
        startMining();
        return;
      }
      
      const watchBtn = document.getElementById('watchAdBtn');
      const miningStatus = document.getElementById('miningStatus');
      
      watchBtn.disabled = true;
      watchBtn.innerHTML = '<i class="fas fa-sync fa-spin"></i> ASSISTINDO ANÚNCIO (30s)';
      miningStatus.textContent = 'Assistindo anúncio...';
      miningStatus.style.color = '#f1c40f';
      
      // Simular anúncio de 30 segundos
      let adTimeLeft = 30;
      const adTimer = setInterval(() => {
        adTimeLeft--;
        
        if (adTimeLeft <= 0) {
          clearInterval(adTimer);
          adWatched = true;
          miningTimeLeft = 3600;
          miningActive = true;
          startMining();
        }
      }, 1000);
    }

    function startMining() {
      if (!adWatched && !miningActive) {
        startWatchingAd();
        return;
      }
      
      if (isMining) return;
      
      isMining = true;
      const watchBtn = document.getElementById('watchAdBtn');
      const miningStatus = document.getElementById('miningStatus');
      
      watchBtn.innerHTML = '<i class="fas fa-hammer"></i> MINERANDO...';
      watchBtn.disabled = true;
      miningStatus.textContent = 'Mineração em andamento...';
      miningStatus.style.color = '#2ecc71';
      
      // Iniciar contador de tempo de mineração
      if (miningTimer) clearInterval(miningTimer);
      
      miningTimer = setInterval(() => {
        if (miningTimeLeft > 0) {
          miningTimeLeft--;
          updateMiningTimer();
          
          // A cada 3 segundos, ganhar 1 passo
          if (miningTimeLeft % 3 === 0) {
            steps += 1;
            updateDisplay();
          }
          
          // Quando o tempo acabar
          if (miningTimeLeft <= 0) {
            stopMining();
            miningActive = false;
            adWatched = false;
          }
        }
      }, 1000);
    }

    function stopMining() {
      isMining = false;
      clearInterval(miningTimer);
      miningActive = false;
      
      const watchBtn = document.getElementById('watchAdBtn');
      const miningStatus = document.getElementById('miningStatus');
      
      watchBtn.innerHTML = '<i class="fas fa-tv"></i> ASSISTIR ANÚNCIO (30s)';
      watchBtn.disabled = false;
      miningStatus.textContent = 'Mineração terminada. Assista um anúncio para minerar novamente';
      miningStatus.style.color = '#e74c3c';
      
      // Resetar tempo
      miningTimeLeft = 3600;
      updateMiningTimer();
    }

    function updateMiningDisplay() {
      document.getElementById('stepsCount').textContent = steps;
      updateMiningTimer();
    }

    function updateMiningTimer() {
      const minutes = Math.floor(miningTimeLeft / 60);
      const seconds = miningTimeLeft % 60;
      document.getElementById('miningTime').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Roleta
    function spinRoulette() {
      const betAmount = parseFloat(document.getElementById('betAmount').value);
      const resultDiv = document.getElementById('rouletteResult');
      const spinBtn = document.getElementById('spinBtn');
      const rouletteCircle = document.getElementById('rouletteCircle');
      
      // Validações
      if (!betAmount || betAmount < 0.5 || betAmount > 10) {
        resultDiv.textContent = '❌ Valor inválido! Aposta deve ser entre 0.5 e 10 DOGE';
        resultDiv.className = 'roulette-result result-error';
        resultDiv.style.display = 'block';
        return;
      }
      
      if (betAmount > doge) {
        resultDiv.textContent = '❌ Saldo insuficiente!';
        resultDiv.className = 'roulette-result result-error';
        resultDiv.style.display = 'block';
        return;
      }

      spinBtn.disabled = true;
      resultDiv.style.display = 'none';

      // Escolher multiplicador
      const randomIndex = Math.floor(Math.random() * rouletteMultipliers.length);
      const multiplier = rouletteMultipliers[randomIndex];

      const sliceAngle = 360 / rouletteMultipliers.length;
      const targetAngle = 360 - (randomIndex * sliceAngle) - (sliceAngle / 2);
      const extraSpins = 5;
      const finalRotation = (360 * extraSpins) + targetAngle;

      rouletteCircle.style.transition = "transform 4s cubic-bezier(0.2,0.8,0.3,1)";
      rouletteCircle.style.transform = `rotate(${finalRotation}deg)`;

      setTimeout(() => {
        const winAmount = parseFloat((betAmount * multiplier).toFixed(2));
        const netChange = winAmount - betAmount;

        doge += netChange;
        updateDisplay();

        if (netChange > 0) {
          resultDiv.innerHTML = `🎉 GANHOU! Multiplicador: ${multiplier}x<br>Ganho: +${netChange.toFixed(2)} DOGE`;
          resultDiv.className = 'roulette-result result-success';
        } 
        else if (netChange < 0) {
          resultDiv.innerHTML = `😢 PERDEU! Multiplicador: ${multiplier}x<br>Perda: ${netChange.toFixed(2)} DOGE`;
          resultDiv.className = 'roulette-result result-error';
        } 
        else {
          resultDiv.innerHTML = `➖ EMPATE! Multiplicador: ${multiplier}x<br>Saldo inalterado`;
          resultDiv.className = 'roulette-result result-success';
        }

        resultDiv.style.display = 'block';

        setTimeout(() => {
          spinBtn.disabled = false;
        }, 2000);

      }, 4000);
    }

    // Levantamento
    function processWithdraw() {
      const amount = parseFloat(document.getElementById('withdrawAmount').value);
      const resultDiv = document.getElementById('withdrawResult');
      
      // Validações
      if (!amount || amount < 5 || amount > 10) {
        resultDiv.textContent = '❌ Valor inválido! Mínimo: 5 DOGE, Máximo: 10 DOGE';
        resultDiv.className = 'roulette-result result-error';
        resultDiv.style.display = 'block';
        return;
      }
      
      if (amount > doge) {
        resultDiv.textContent = '❌ Saldo insuficiente!';
        resultDiv.className = 'roulette-result result-error';
        resultDiv.style.display = 'block';
        return;
      }
      
      // Processar levantamento
      doge -= amount;
      updateDisplay();
      
      resultDiv.innerHTML = `✅ Levantamento de ${amount} DOGE processado com sucesso!<br><small>A transferência será completada em breve.</small>`;
      resultDiv.className = 'roulette-result result-success';
      resultDiv.style.display = 'block';
      
      // Limpar campo
      document.getElementById('withdrawAmount').value = '';
      
      // Auto-fechar após 5 segundos
      setTimeout(() => {
        resultDiv.style.display = 'none';
        closeWithdraw();
      }, 5000);
    }

    // Logout
    function logout() {
      localStorage.removeItem('dogeUser');
      window.location.href = 'index.html';
    }

    // Fechar modais ao clicar fora
    window.onclick = function(event) {
      const modals = ['depositModal', 'miningModal', 'rouletteModal', 'withdrawModal'];
      modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
    
    // Prevenir scroll na página
    document.addEventListener('touchmove', function(e) {
      if (document.querySelector('.modal[style*="display: flex"]')) {
        e.preventDefault();
      }
    }, { passive: false });
  </script>
</body>