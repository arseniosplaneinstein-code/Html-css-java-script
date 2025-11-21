
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
