<link rel="stylesheet" href="style.css">

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