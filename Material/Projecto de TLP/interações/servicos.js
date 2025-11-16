

document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("usuarioLogado");
  const area = document.getElementById("servicos-area");
  const aviso = document.getElementById("login-warning");
  const navBtn = document.querySelector("nav .login-btn");

  if (user) {
    // Oculta aviso e botão "Criar Conta"
    aviso.style.display = "none";
    area.style.display = "block";
    if(navBtn) navBtn.style.display = "none";

    // Adiciona perfil na nav
    const profileDiv = document.createElement("div");
    profileDiv.id = "user-profile";
    profileDiv.style.display = "flex";
    profileDiv.style.alignItems = "center";
    profileDiv.style.gap = "10px";

    // Imagem do usuário (padrão se não enviar)
    const img = document.createElement("img");
    img.src = localStorage.getItem("userImage") || "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    img.width = 35;
    img.height = 35;
    img.style.borderRadius = "50%";
    img.style.cursor = "pointer";

    // Nome do usuário
    const span = document.createElement("span");
    span.textContent = user;

    // Permite alterar a imagem clicando nela
    img.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = () => {
        const file = input.files[0];
        if(file) {
          const reader = new FileReader();
          reader.onload = () => {
            img.src = reader.result;
            localStorage.setItem("userImage", reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    });

    profileDiv.appendChild(img);
    profileDiv.appendChild(span);

    // Adiciona ao nav
    document.querySelector("nav").appendChild(profileDiv);
  } else {
    aviso.style.display = "block";
    area.style.display = "none";
  }
});


  // ===== QUIZ =====
  const perguntas = [
    {
      pergunta: "Qual destes é um tipo de robô industrial?",
      opcoes: ["Roomba", "SCARA", "Alexa", "Drone"],
      resposta: "SCARA"
    },
    {
      pergunta: "O que significa 'IA'?",
      opcoes: ["Inteligência Artificial", "Interface Analógica", "Integração Automática", "Interação Autônoma"],
      resposta: "Inteligência Artificial"
    },
    {
      pergunta: "Qual sensor é usado para detectar distância?",
      opcoes: ["Sensor ultrassônico", "Sensor de toque", "Sensor de cor", "Sensor de temperatura"],
      resposta: "Sensor ultrassônico"
    }
  ];
  let indice = 0, pontos = 0;

  function iniciarQuiz() {
    document.getElementById("quizModal").style.display = "flex";
    carregarPergunta();
  }
  function carregarPergunta() {
    const q = perguntas[indice];
    document.getElementById("pergunta").textContent = q.pergunta;
    document.getElementById("opcoes").innerHTML = q.opcoes.map(op=>
      `<button class='quiz-option' onclick='responder("${op}")'>${op}</button>`
    ).join("");
  }
  function responder(opcao) {
    if (opcao === perguntas[indice].resposta) pontos++;
    indice++;
    if (indice < perguntas.length) carregarPergunta();
    else fimQuiz();
  }
  function fimQuiz() {
    document.getElementById("pergunta").innerHTML = `Fim do quiz 🎉<br>Sua pontuação: ${pontos}/${perguntas.length}`;
    document.getElementById("opcoes").innerHTML = `<button class='quiz-option' onclick='reiniciarQuiz()'>Jogar Novamente</button>`;
  }
  function reiniciarQuiz() {indice=0;pontos=0;carregarPergunta();}

  // ===== WORKSHOP =====
  function abrirWorkshop() {
    alert("🛒 Em breve: Workshop Online com kits de robótica disponíveis para compra!");
  }

  
  
  (function () {
    const logo = document.getElementById('logoSmall');
    if (!logo) return; // segurança

    let ticking = false;
    const threshold = 100;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          if (y > threshold) {
            logo.classList.add('visible');
          } else {
            logo.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    // inicializa no carregamento (caso a página abra já com scroll)
    function init() {
      const y = window.scrollY || window.pageYOffset;
      if (y > threshold) logo.classList.add('visible');
      else logo.classList.remove('visible');
    }

    window.addEventListener('DOMContentLoaded', init);
    window.addEventListener('load', init);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', init);
  })();

  (function () {
  const logo = document.getElementById('logoSmall'); // ou document.querySelector('.logo-small');
  if (!logo) return; // segurança

  const threshold = 100;

  function updateLogoVisibility() {
    if (window.scrollY > threshold) {
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

document.addEventListener("DOMContentLoaded", () => {
  const techbot = document.getElementById("techbot");
  const buttonsContainer = document.getElementById("techbot-buttons");
  const techbotSound = document.getElementById("techbot-sound");
  const techbotReactivate = document.getElementById("techbot-reactivate");

  // Função para falar
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-PT";
    utterance.rate = 1;
    utterance.pitch = 1.1;
    speechSynthesis.speak(utterance);
  }

  // Função para tocar som
  function playTechbotSound() {
    if (techbotSound) {
      techbotSound.currentTime = 0;
      techbotSound.play();
    }
  }

  // Mostrar TechBot após 3s
  setTimeout(() => {
    techbot.style.display = "block";
    speak("Olá, Arsénio! Eu sou o TechBot, o teu guia digital da Galeria Robótica!");
  }, 3000);

  // Alterna exibição dos botões ao clicar no corpo do TechBot
  techbot.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      buttonsContainer.style.display =
        buttonsContainer.style.display === "flex" ? "none" : "flex";
      playTechbotSound();
    }
  });

  // Funções globais
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
      buttonsContainer.style.display = "none";
      techbotReactivate.style.display = "flex";
    }, 2500);
  };

  techbotReactivate.addEventListener("click", () => {
    techbot.style.display = "block";
    techbotReactivate.style.display = "none";
    speak("TechBot reativado! Vamos continuar, Arsénio!");
  });
});



