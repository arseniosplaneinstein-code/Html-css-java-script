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

      // ===== TECHBOT SCRIPT =====
      document.addEventListener("DOMContentLoaded", () => {
        const techbot = document.getElementById("techbot");
        const buttonsContainer = document.getElementById("techbot-buttons");
        const techbotSound = document.getElementById("techbot-sound");
        const techbotReactivate = document.getElementById("techbot-reactivate");

        setTimeout(() => {
          techbot.style.display = "block";
          speak("Olá, Arsénio! Eu sou o TechBot, o teu guia digital da Galeria Robótica!");
        }, 3000);

        function speak(text) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "pt-PT";
          utterance.rate = 1;
          utterance.pitch = 1.1;
          speechSynthesis.speak(utterance);
        }

        function playTechbotSound() {
          techbotSound.currentTime = 0;
          techbotSound.play();
        }

        techbot.addEventListener("click", (e) => {
          if (e.target.tagName !== "BUTTON") {
            buttonsContainer.style.display =
              buttonsContainer.style.display === "flex" ? "none" : "flex";
            playTechbotSound();
          }
        });

        window.techbotSpeakSite = function () {
          playTechbotSound();
          speak("Esta é a Galeria da Robótica, onde exploramos a evolução e o design dos robôs ao longo da história!");
        };

        window.techbotSpeakRobot = function () {
          playTechbotSound();
          speak("Os robôs têm diferentes formas e funções — desde máquinas industriais até robôs inteligentes e criativos!");
        };

        window.techbotBye = function () {
          playTechbotSound();
          speak("Até breve, Arsénio! TechBot desligando...");
          setTimeout(() => {
            techbot.style.display = "none";
            techbotReactivate.style.display = "flex";
          }, 2500);
        };

        techbotReactivate.addEventListener("click", () => {
          techbot.style.display = "block";
          techbotReactivate.style.display = "none";
          speak("TechBot reativado! Vamos continuar, Arsénio!");
        });
      });
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    // Quando o card entra na tela
    if (cardTop < windowHeight - 120 && cardTop > 0) {
      if (!card.classList.contains('ativo')) {
        card.classList.remove('saindo');
        card.classList.add('ativo');
      }
    } else {
      // Quando sai (rolando para cima)
      if (card.classList.contains('ativo')) {
        card.classList.remove('ativo');
        card.classList.add('saindo');
      }
    }
  });
});
 
const verMaisBtns = document.querySelectorAll('.btn-detalhes');
const fecharBtns = document.querySelectorAll('.btn-fechar');

verMaisBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const detalhes = card.querySelector('.detalhes-card');
    detalhes.classList.add('ativo'); // mostra a div
  });
});

fecharBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const detalhes = btn.closest('.detalhes-card');
    detalhes.classList.remove('ativo'); // esconde a div
  });
});
const btnsDetalhes = document.querySelectorAll('.btn-detalhes');
btnsDetalhes.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const detalhes = card.querySelector('.detalhes-card');
    detalhes.classList.add('ativo'); // abre
  });
});

const btnsFechar = document.querySelectorAll('.btn-fechar');
btnsFechar.forEach(btn => {
  btn.addEventListener('click', () => {
    const detalhes = btn.closest('.detalhes-card');
    detalhes.classList.remove('ativo'); // fecha
  });
});
