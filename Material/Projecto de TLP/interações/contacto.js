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
 window.addEventListener("load", () => {
  setTimeout(() => {
    techbot.style.display = "block";
    speak(`Saudações, humano! Eu sou o TechBot 🤖✨
Você chegou à central de Contactos da Robótica Futurista.
Diga-me como posso ajudar a aproximar você da nossa equipa incrível!`);
  }, 3000);
});


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
  speak("A página de Contato do site Robótica Futurista apresenta o menu principal com Início, Robótica, Serviços, Galeria e Contato, além do botão de cadastrar e a logo oficial. Logo abaixo há um carrossel tridimensional que mostra os seis desenvolvedores do site, representando a área Sobre Nós. No final da página encontra-se o rodapé, com os contactos da equipa, localização e lista de colaboradores. Esta página foi criada para facilitar a comunicação e aproximar os utilizadores da equipa responsável pelo projeto.");
}


  window.techbotSpeakRobot = function() {
  speak(
    "Os robôs são máquinas programáveis com sensores, motores e controladores. " +
    "Na área de contacto, os robôs utilizam sensores de toque e pressão para perceber o ambiente, " +
    "atuadores de precisão para realizar movimentos suaves e controlados, " +
    "e materiais seguros para evitar acidentes. " +
    "Esta área é essencial para que o robô consiga manipular objetos, interagir com pessoas " +
    "e adaptar-se a diferentes situações durante o trabalho."
  );
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

  document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // Abrir/fechar menu burger
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Abrir/fechar dropdown no mobile
  const serviceItem = document.querySelector('nav ul li.service');
  serviceItem.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.currentTarget.classList.toggle('active');
    }
  });
});


