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

  // === Função de voz ===
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

  // === Clique no TechBot ===
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
    speak(
      "A página inicial do site de Robótica Futurista apresenta um menu com o logo oficial, o ícone da página inicial, a área sobre a evolução robótica, a galeria, os contatos, os serviços e um botão de criar conta. Abaixo do menu, aparece a logo em tamanho maior, seguida de um carrossel que mostra aplicações futuristas da robótica, como casas inteligentes, relógios, óculos, computadores, forças policiais, cidades, consolas, drones e transportes avançados. Mais abaixo, o utilizador encontra três áreas fundamentais do mundo tecnológico: Programando o futuro, Inteligência Artificial e Robôs em ação."
    );
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

  // === MENU HAMBURGUER ===
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

});
