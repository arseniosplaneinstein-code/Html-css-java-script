
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
