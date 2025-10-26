// ================================
// 🔹 ROBÓTICA FUTURISTA - SCRIPT GERAL
// ================================

document.addEventListener('DOMContentLoaded', () => {

  // === Seletores principais ===
  const techbot = document.getElementById('techbot');
  const buttonsContainer = document.getElementById('techbot-buttons');
  const techbotSound = document.getElementById('techbot-sound');
  const techbotReactivate = document.getElementById('techbot-reactivate');
  const welcomeText = document.querySelector('.hero p');
  const logoSmall = document.querySelector('.logo-small');

  // === Mostrar TechBot após 3 segundos ===
  setTimeout(() => {
    techbot.style.display = 'block';
    fadeIn(welcomeText);
    speak("Olá! Eu sou o TechBot, o guia digital da Robótica Futurista. Quer ouvir sobre o site ou sobre robôs?");
  }, 3000);

  // === Função de voz (fala do TechBot) ===
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-PT";
    utterance.rate = 1;
    utterance.pitch = 1.1;
    speechSynthesis.speak(utterance);
  }

  // === Som do TechBot ===
  function playTechbotSound() {
    techbotSound.currentTime = 0;
    techbotSound.play();
  }

  // === Clique no TechBot (mostrar ou esconder botões) ===
  techbot.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      buttonsContainer.style.display = 
        buttonsContainer.style.display === 'flex' ? 'none' : 'flex';
      playTechbotSound();
    }
  });

  // === Botão "Sobre o site" ===
  window.techbotSpeakSite = function() {
    playTechbotSound();
    speak("O site Robótica Futurista tem várias áreas: Início, Robótica, Serviços, Galeria e Contato. Cada uma mostra o poder da tecnologia e inovação!");
  }

  // === Botão "Sobre robôs" ===
  window.techbotSpeakRobot = function() {
    playTechbotSound();
    speak("Os robôs são máquinas programáveis com sensores, motores e controladores. Eles podem perceber o ambiente, tomar decisões e realizar tarefas complexas. Isso é o que torna a robótica tão fascinante!");
  }

  // === Botão "Desligar" ===
  window.techbotBye = function() {
    playTechbotSound();
    speak("Até logo, humano! Desligando o modo de voz...");
    fadeOut(welcomeText);
    setTimeout(() => {
      techbot.style.display = 'none';
      techbotReactivate.style.display = 'flex';
    }, 2500);
  }

  // === Botão "Reativar" ===
  techbotReactivate.addEventListener('click', () => {
    techbot.style.display = 'block';
    techbotReactivate.style.display = 'none';
    fadeIn(welcomeText);
    speak("TechBot reativado! Estou de volta!");
  });

  // === Animações de fade ===
  function fadeIn(element) {
    if (!element) return;
    element.style.opacity = 0;
    element.style.transition = "opacity 1.5s ease-in-out";
    element.style.display = "block";
    setTimeout(() => { element.style.opacity = 1; }, 50);
  }

  function fadeOut(element) {
    if (!element) return;
    element.style.opacity = 1;
    element.style.transition = "opacity 1.5s ease-in-out";
    element.style.opacity = 0;
    setTimeout(() => { element.style.display = "none"; }, 1500);
  }

  // === Mostrar logo pequena ao rolar ===
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      logoSmall.style.opacity = 1;
      logoSmall.style.transform = "translateY(0)";
    } else {
      logoSmall.style.opacity = 0;
      logoSmall.style.transform = "translateY(-20px)";
    }
  });

});
 // === LOGIN MODAL ===
const loginBtn = document.querySelector('.login-btn');
const loginModal = document.getElementById('login-modal');
const toggleForm = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');
const userForm = document.getElementById('user-form');

let isLoginMode = false;

// Mostrar modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Fechar modal ao clicar fora
loginModal.addEventListener('click', (e) => {
  if (e.target === loginModal) loginModal.style.display = 'none';
});

// Alternar entre login e cadastro
toggleForm.addEventListener('click', () => {
  isLoginMode = !isLoginMode;
  if (isLoginMode) {
    formTitle.textContent = 'Entrar';
    userForm.innerHTML = `
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" required>
      </div>
      <div class="input-group">
        <label for="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha" required>
      </div>
      <button type="submit" class="submit-btn">Entrar</button>
    `;
    toggleForm.innerHTML = `Ainda não tem conta? <span>Cadastre-se</span>`;
  } else {
    formTitle.textContent = 'Criar Conta';
    userForm.innerHTML = `
      <div class="input-group">
        <label for="username">Nome de Usuário</label>
        <input type="text" id="username" placeholder="Digite seu nome" required>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" required>
      </div>
      <div class="input-group">
        <label for="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha" required>
      </div>
      <div class="input-group">
        <label for="profile">Foto de Perfil</label>
        <input type="file" id="profile" accept="image/*">
      </div>
      <button type="submit" class="submit-btn">Cadastrar</button>
    `;
    toggleForm.innerHTML = `Já tem conta? <span>Acesse aqui</span>`;
  }
});
