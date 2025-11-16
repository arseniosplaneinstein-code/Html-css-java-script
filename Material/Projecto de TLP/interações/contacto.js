(function () {
        const logo = document.getElementById("logoSmall");
        const showAfter = 100;

        function updateLogoVisibility() {
          if (window.scrollY > showAfter) {
            logo.classList.add("visible");
            logo.setAttribute("aria-hidden", "false");
          } else {
            logo.classList.remove("visible");
            logo.setAttribute("aria-hidden", "true");
          }
        }

        window.addEventListener("DOMContentLoaded", updateLogoVisibility);
        window.addEventListener("scroll", updateLogoVisibility);
        window.addEventListener("resize", updateLogoVisibility);
      })();

document.addEventListener('DOMContentLoaded', () => {
  const techbot = document.getElementById('techbot');
  const buttonsContainer = document.getElementById('techbot-buttons');
  const techbotReactivate = document.getElementById('techbot-reactivate');

  // Mostrar TechBot após 3 segundos
  setTimeout(() => {
    techbot.style.display = 'block';
    speak("Olá! Eu sou o TechBot, o guia digital da Robótica Futurista. Quer ouvir sobre o site ou sobre robôs?");
  }, 3000);

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-PT";
    utterance.rate = 1;
    utterance.pitch = 1.1;
    speechSynthesis.speak(utterance);
  }

  techbot.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      buttonsContainer.style.display = buttonsContainer.style.display === 'flex' ? 'none' : 'flex';
      speak("Cliquei!");
    }
  });

  window.techbotSpeakSite = function() {
    speak("O site Robótica Futurista tem várias áreas: Início, Robótica, Serviços, Galeria e Contato.");
  }

  window.techbotSpeakRobot = function() {
    speak("Os robôs são máquinas programáveis com sensores, motores e controladores.");
  }

  window.techbotBye = function() {
    speak("Até logo! Desligando...");
    techbot.style.display = 'none';
    techbotReactivate.style.display = 'flex';
  }

  techbotReactivate.addEventListener('click', () => {
    techbot.style.display = 'block';
    techbotReactivate.style.display = 'none';
    speak("TechBot reativado! Estou de volta!");
  });
});

const cards = document.querySelectorAll(".card");
let current = 0;

function updateCards() {
  cards.forEach((card, i) => {
    const pos = (i - current + cards.length) % cards.length;
    
    switch(pos) {
      case 0: // Centro
        card.style.zIndex = 6;
        card.style.transform = "translateX(0px) scale(1) rotateY(0deg)";
        card.style.opacity = "1";
        break;

      case 1: // Direita próxima
        card.style.zIndex = 5;
        card.style.transform = "translateX(200px) scale(0.9) rotateY(-20deg)";
        card.style.opacity = "0.8";
        break;

      case 2: // Direita distante
        card.style.zIndex = 4;
        card.style.transform = "translateX(350px) scale(0.75) rotateY(-30deg)";
        card.style.opacity = "0.5";
        break;

      case 3: // Fundo (invisível, atrás de tudo)
        card.style.zIndex = 1;
        card.style.transform = "translateX(0px) scale(0.6) rotateY(180deg)";
        card.style.opacity = "0";
        break;

      case 4: // Esquerda distante
        card.style.zIndex = 3;
        card.style.transform = "translateX(-350px) scale(0.75) rotateY(30deg)";
        card.style.opacity = "0.5";
        break;

      case 5: // Esquerda próxima
        card.style.zIndex = 4;
        card.style.transform = "translateX(-200px) scale(0.9) rotateY(20deg)";
        card.style.opacity = "0.8";
        break;
    }
  });
}

function moveRight() {
  current = (current + 1) % cards.length;
  updateCards();
}

function moveLeft() {
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
}

updateCards();