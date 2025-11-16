

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
profileDiv.style.position = "relative"; // necessário para o menu suspenso
profileDiv.style.cursor = "pointer";

// Imagem do usuário
const img = document.createElement("img");
img.src = localStorage.getItem("userImage") || "https://cdn-icons-png.flaticon.com/512/149/149071.png";
img.width = 35;
img.height = 35;
img.style.borderRadius = "50%";

// Nome do usuário
const span = document.createElement("span");
span.textContent = user;
span.style.color = "#fff";
span.style.fontWeight = "bold";
span.style.userSelect = "none";

// MENU SUSPENSO
const menu = document.createElement("div");
menu.id = "profile-menu";
menu.style.position = "absolute";
menu.style.top = "45px";
menu.style.right = "0";
menu.style.background = "rgba(20, 30, 60, 0.95)"; // fundo escuro futurista
menu.style.borderRadius = "12px";
menu.style.padding = "8px 0";
menu.style.display = "none";
menu.style.flexDirection = "column";
menu.style.gap = "0";
menu.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
menu.style.minWidth = "150px";
menu.style.zIndex = "1000";

// Função para estilizar botões
function styleMenuButton(btn) {
  btn.style.background = "transparent";
  btn.style.border = "none";
  btn.style.color = "#00f0ff";
  btn.style.padding = "10px 20px";
  btn.style.textAlign = "left";
  btn.style.fontWeight = "bold";
  btn.style.fontSize = "0.9em";
  btn.style.transition = "0.3s ease";
  btn.style.cursor = "pointer";
  btn.style.width = "100%";

  btn.addEventListener("mouseenter", () => {
    btn.style.background = "rgba(0, 240, 255, 0.2)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
  });
}

// Opções do menu
const changeImg = document.createElement("button");
changeImg.textContent = "Alterar imagem";
styleMenuButton(changeImg);
changeImg.addEventListener("click", () => {
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

const deleteAccount = document.createElement("button");
deleteAccount.textContent = "Excluir conta";
styleMenuButton(deleteAccount);
deleteAccount.addEventListener("click", () => {
  if(confirm("Tem certeza que deseja excluir sua conta?")) {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("userImage");
    location.reload();
  }
});

// Adiciona opções no menu
menu.appendChild(changeImg);
menu.appendChild(deleteAccount);

// Mostrar/ocultar menu ao clicar no perfil
profileDiv.addEventListener("click", (e) => {
  // evita abrir menu ao clicar no botão dentro dele
  if(e.target.tagName !== "BUTTON") {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
});

// Monta o perfil
profileDiv.appendChild(img);
profileDiv.appendChild(span);
profileDiv.appendChild(menu);

// Adiciona ao nav
document.querySelector("nav").appendChild(profileDiv);
  }});

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
    document.getElementById("opcoes").innerHTML += `<button class='quiz-option' onclick='fecharQuiz()'>Fechar Quiz</button>`;

  }
  function reiniciarQuiz() {indice=0;pontos=0;carregarPergunta();}

  function fecharQuiz() {
    document.getElementById("quizModal").style.display = "none";
    indice = 0; pontos = 0;
  }

  // ===== WORKSHOP =====
  function abrirWorkshop() {
    alert("🛒 Em breve: Workshop Online com kits de robótica disponíveis para compra!");
  }

  
  (function () {
  const logo = document.getElementById('logoSmall');
  if (!logo) return;

  const threshold = 100;
  let ticking = false;

  function updateLogo() {
    const y = window.scrollY || window.pageYOffset;
    if (y > threshold) {
      logo.classList.add("visible");
      logo.setAttribute("aria-hidden", "false");
    } else {
      logo.classList.remove("visible");
      logo.setAttribute("aria-hidden", "true");
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateLogo);
      ticking = true;
    }
  }

  // Inicializa
  updateLogo();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateLogo);
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






