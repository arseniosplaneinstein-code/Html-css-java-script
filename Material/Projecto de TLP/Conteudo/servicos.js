  const techbot = document.getElementById("techbot");
  const techbotSound = document.getElementById("techbot-sound");
  const techbotMessage = document.getElementById("techbotMessage");
  const buttonsContainer = document.getElementById("techbot-buttons");

  // Exibir TechBot após carregar a página
  window.addEventListener("load", () => {
    setTimeout(() => {
      techbot.style.display = "flex";
      speak("Olá! Eu sou o TechBot, o guia digital do Workshop Futurist!");
      setTimeout(() => techbotMessage.classList.add("active"), 1000);
      setTimeout(() => techbotMessage.classList.remove("active"), 5000);
    }, 2000);
  });

  // Fala do TechBot
  function speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "pt-PT";
    utter.pitch = 1.1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
  }

  // Efeitos de clique
  techbot.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      buttonsContainer.style.display =
        buttonsContainer.style.display === "flex" ? "none" : "flex";
      techbotSound.currentTime = 0;
      techbotSound.play();
    }
  });

  // Ações do TechBot
  function techbotSpeakSite() {
    techbotSound.play();
    speak(
      "O Workshop Futurist oferece serviços incríveis: cursos, kits e componentes para robótica!"
    );
  }

  function techbotSpeakRobot() {
    techbotSound.play();
    speak(
      "Os robôs são máquinas inteligentes que aprendem e ajudam os humanos. Aqui, vais descobrir como!"
    );
  }

  function techbotBye() {
    techbotSound.play();
    speak("Até logo, humano! Desligando...");
    techbot.style.display = "none";
    buttonsContainer.style.display = "none";
  }

  // Login e serviços
  const toggleLogin = document.getElementById("toggleLogin");
  const registerBtn = document.getElementById("registerBtn");
  const servicosArea = document.getElementById("servicos-area");
  const loginArea = document.getElementById("login-area");
  const loginBtnMenu = document.getElementById("loginBtnMenu");
  const nav = document.querySelector("nav");

  let loginMode = false;

  toggleLogin.addEventListener("click", () => {
    loginMode = !loginMode;
    if (loginMode) {
      document.getElementById("loginBox").innerHTML = `
        <h2>Entrar</h2>
        <input type="email" id="loginEmail" placeholder="Email" required>
        <input type="password" id="loginPassword" placeholder="Senha" required>
        <button id="loginBtn">Entrar</button>
        <p>Não tem conta? <span id="toggleLogin">Cadastre-se</span></p>
      `;
    } else location.reload();
  });

  registerBtn.addEventListener("click", () => {
    loginArea.style.display = "none";
    servicosArea.style.display = "block";
    speak("Bem-vindo ao Workshop Futurist! Explore nossos serviços futuristas!");
  });

  // Logo aparece ao rolar
  const logoSmall = document.getElementById("logoSmall");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      logoSmall.style.opacity = 1;
      logoSmall.style.transform = "translateY(0)";
    } else {
      logoSmall.style.opacity = 0;
      logoSmall.style.transform = "translateY(-20px)";
    }
  });