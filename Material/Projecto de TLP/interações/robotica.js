
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


  (function () {
    const logo = document.getElementById("logoSmall");
    const sections = document.querySelectorAll(".informacao");
    let lastScroll = window.scrollY || 0;

    function handleScroll() {
      const currentScroll = window.scrollY || 0;

      // ===== Mostrar / esconder logo pequena =====
      if (logo) {
        if (currentScroll > 100) {
          logo.classList.add("visible");
        } else {
          logo.classList.remove("visible");
        }
      }

      // ===== Expandir / comprimir secções =====
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const visible = rect.top < window.innerHeight - 150 && rect.bottom > 150;

        if (visible) {
          if (currentScroll > lastScroll) {
            // Rolando para baixo → expandir / mostrar
            sec.classList.add("show");
            sec.classList.remove("hide");
            // garante que esteja visível caso uses display:none em CSS
            sec.style.display = sec.style.display || "";
          } else {
            // Rolando para cima → comprimir / esconder
            sec.classList.remove("show");
            sec.classList.add("hide");
            // se quiseres remover do fluxo após animação, usa timeout igual ao da animação CSS
            setTimeout(() => {
              // só esconde se a classe 'hide' ainda estiver presente
              if (sec.classList.contains("hide")) {
                sec.style.display = "none";
              }
            }, 650); // ajuste ao tempo da tua animação (600-700ms)
          }
        } else {
          // fora da área de visualização -> limpar classes e deixar as regras CSS controlarem o display
          sec.classList.remove("show", "hide");
          sec.style.display = "";
        }
      });

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }

    // inicializa no carregamento (caso já venha com scroll)
    window.addEventListener("DOMContentLoaded", handleScroll);
    // listener único de scroll
    window.addEventListener("scroll", handleScroll);
    // também atualiza se a janela for redimensionada
    window.addEventListener("resize", handleScroll);
  })();
